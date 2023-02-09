<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\NewsSourceController;
use App\Http\Controllers\API\UserPreferenceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

Route::group(['prefix' => 'v1'], function () {

    //--------------------- User Routes ----------------------//
    Route::controller(UserController::class)
    ->prefix('users')
    ->group(function() {
        Route::post('/', 'registerUser');
    });

    Route::post('auth/login', [AuthController::class, 'userLogin']);

    Route::middleware('api')->group(function() {
        Route::controller(AuthController::class)
        ->prefix('auth')
        ->group(function() {
            Route::post('/logout', 'userLogout');
            Route::post('/refresh', 'userRefresh');
            Route::post('/getuser', 'getUser');
        });

        /**============= User News Source Option Route ============*/
        Route::controller(UserPreferenceController::class)
        ->prefix('users')
        ->group(function() {
            Route::get('/news-options/{id}', 'getUserOptions');
            Route::post('/news-option', 'saveUserOptions');
        });

        /**============= News Source Route ============*/
        Route::controller(NewsSourceController::class)
        ->prefix('sources')
        ->group(function() {
            Route::get('/', 'getNewsSource');
        });
    });
});
