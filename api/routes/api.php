<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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

Route::get('products',[ProductController::class, 'index'])->name('api.product.index');
Route::post('products',[ProductController::class, 'store'])->name('api.product.store');
Route::put('products/{id}',[ProductController::class, 'update'])->name('api.product.update');
Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('api.product.destroy');
Route::get('products/{id}',[ProductController::class, 'show'])->name('api.product.show');