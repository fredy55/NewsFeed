<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\UserPreference;
use App\Models\User;

class UserPreferenceController extends Controller
{
    
    /**
     * Check whether user exists.
     *
     * @param array $query
     * @return bool
     */
    public function userExist(array $query): bool
    {
        return User::where($query)->exists();
    }

    /**
     * Save user news source option.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\jsonResponse
     */
    protected function saveUserOptions(Request $request)
    {
        try{
            //Validate form data
            $submitData = inputValidate($request->all(), UserPreference::rules());

            if($submitData[0] === 'failed'){
                return jsonResponse(412, $submitData[1]);
            }
           
            //Get the form input
            $input = $submitData[1];

            //Check whether user already exist
            if(!$this->userExist(['id' => $input['userId']])){
               return jsonResponse(400, 'User does NOT exist.');
            }

            //if user option exist, update
            $optionQuery = UserPreference::where([
                'user_id' => $input['userId'],
                'source_id' => $input['sourceId']
            ]);

            if($optionQuery->exists()){
                $optionQuery->update(['isActive' => $input['status']]);

                return jsonResponse(200, 'User option updated.');
             }
             
            //Else save user option
            $source = new UserPreference;
            $source->user_id = $input['userId'];     
            $source->source_id = $input['sourceId'];     
            $source->isActive = $input['status'];     
                
            if($source->save()){
                return jsonResponse(201,'User option created');
            }
            
            return jsonResponse(400, 'User option NOT created.');
            
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }

    /**
     * Save user news source option.
     *
     * @param  int $id
     * @return \Illuminate\Http\jsonResponse
     */
    protected function getUserOptions(int $id)
    {
        try{

            //Check whether user already exist
            if(!$this->userExist(['id' => $id])){
               return jsonResponse(400, 'User does NOT exist.');
            }

            //if user option exist, update
            $optionQuery = UserPreference::where([
                                'user_preferences.user_id' => $id,
                                'user_preferences.isActive' => 1
                            ])
                            ->join('news_sources', 'news_sources.id', '=', 'user_preferences.source_id')
                            ->select('news_sources.id', 'news_sources.name');

            if($optionQuery->exists()){
                $preference = $optionQuery->get();

                return jsonResponse(200, 'User option(s) found.', $preference);
             }     
            
            return jsonResponse(404, 'No user option found.');
            
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }

}
