<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    UserController,
    RegistrasiController,
    ManajemenController
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [UserController::class, 'index']);
Route::post('/', [UserController::class, 'index']);
Route::get('/login', [RegistrasiController::class, 'indexlogin']);
Route::get('/dashboard-admin', [ManajemenController::class, 'dashboardadmin']);
Route::get('/dashboard-admin/tambahmobil', [ManajemenController::class, 'tambahmobil']);

Route::get('/dashboard-user', [ManajemenController::class, 'dashboarduser']);
Route::get('/book_car/{id}/', [UserController::class, 'bookcar']);
