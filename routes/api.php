<?php

use App\Http\Controllers\Api\v1\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('/user')->group(function(){
    Route::post('/login', 'Api\v1\LoginController@login');
    // Route::middleware('auth:api')->get('/all', 'Api\v1\UserController@index');
    Route::get('/all', 'Api\v1\user\UserController@index');
});