<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;


class AuthController extends Controller
{
   
    /**
     * Login a registered user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userLogin(Request $request)
    {
        try{
            //Validate form data
            $submitData = inputValidate($request->all(), User::loginRules());

            if($submitData[0] === 'failed'){
                return jsonResponse(412, $submitData[1]);
            }
           
            //Get the form input
            $input = $submitData[1];

           //Check password match
           //$loginInfo = ;
           if(! $loginToken = auth('api')->attempt(request(['email', 'password']))){
               return jsonResponse(401, 'Request is unauthorised!');
           }

           //Get the logged in user
           $user = [
             'user'=> auth('api')->user(),
             'token'=> $loginToken
           ]; 

           //Prepare response headers
           $headers = [
               'Authoriation' => 'Bearer '.$loginToken,
               'expires_in' => auth('api')->factory()->getTTL() * 60
           ];
          
            return jsonResponse(200,'User login successful.', $user, $headers);
            
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }
    
    
    /**
     * Refresh a registered user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userRefresh(Request $request)
    {
        try{
            //Logout user
           $loginToken = auth('api')->refresh();

           if($loginToken){
                //Prepare response headers
                $headers = [
                    'Authoriation' => 'Bearer '.$loginToken,
                    'expires_in' => auth('api')->factory()->getTTL() * 60
                ];
                return jsonResponse(200,'User token refreshed successful.', [], $headers);
           }

           return jsonResponse(400,'User token NOT refreshed.');
            
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }


    /**
     * Logout a registered user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function userLogout(Request $request)
    {
        try{
            //Logout user
            auth('api')->invalidate($request->token);

            return jsonResponse(200,'User logout successful.');
            
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }
}
