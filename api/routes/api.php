<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('products',[ProductController::class, 'index'])->name('api.product.show');
Route::post('products',[UserController::class, 'store'])->name('api.product.update');
//Route::put('profile/edit/personal-data',[PersonalDataController::class, 'update'])->name('api.personal.update');
//Route::put('profile/edit/interests',[InterestController::class, 'update'])->name('api.interests.update');
//Route::put('profile/edit/frameworks',[FrameworkController::class, 'update'])->name('api.frameworks.update');
//Route::put('profile/edit/social-network',[SocialNetworkController::class, 'update'])->name('api.social.update');
