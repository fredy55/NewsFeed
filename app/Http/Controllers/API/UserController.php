<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\NewsSource;

class UserController extends Controller
{
    /**
     * Register a new User.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    protected function registerUser(Request $request)
    {
        try{
            //Validate form data
            $submitData = inputValidate($request->all(), User::rules());

            if($submitData[0] === 'failed'){
                return jsonResponse(412, $submitData[1]);
            }
           
            //Get the form input
            $input = $submitData[1];

            //Check whether user already exist
           if($this->userExist(['email' => $input['email']])){
               return jsonResponse(400, 'User already exist.');
           }
             
            //Save data
            $user = new User;
            $user->ftname = $request->post('fname');
            $user->ltname = $request->post('lname');
            $user->email = $request->post('email');
            $user->password = Hash::make($input['password']);     
                
            if($user->save()){
                return jsonResponse(201,'New user created', $user);
            }
            
            return jsonResponse(400, 'User NOT created.');
            
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }

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

    
}
