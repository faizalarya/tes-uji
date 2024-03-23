<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrasiController; //get registrasi controller
use App\Http\Controllers\ManajemenController; //get Manajemen controller
use App\Http\Controllers\UserController; //get User controller

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

Route::middleware('auth:sanctum')->group(function () {  
   
    //route manajemen admin
    Route::post('/manajemen/create_mobil', [ManajemenController::class, 'CreateMobil']);
    Route::get('/manajemen/update_ketersediaan/{id}', [ManajemenController::class, 'UpdateKetersediaan']);
    Route::get('/manajemen/hapus_mobil/{id}', [ManajemenController::class, 'HapusMobil']);
    Route::post('/logout', [RegistrasiController::class, 'logout']);
    //route get listrent mobil
    Route::get('/manajemen/listrent', [ManajemenController::class, 'ListRent']);
});

//route registrasi
Route::post('/registrasi', [RegistrasiController::class, 'CreateUser']);
Route::get('/errorauth', function(){
    $data = [
        'message'=>'Anda Harus Login',
        'code'=>'401'
    ];
    return $data;
})->name('login');

Route::post('/login', [RegistrasiController::class, 'login']);


//route akses database users
Route::get('/data_user/{id}', [RegistrasiController::class, 'GetUser']);

//route get mobil for user
Route::get('/user/mobil', [UserController::class, 'GetMobil']);
//route post mobil for user berdasarkan merk
Route::get('/user/mobil/search', [UserController::class, 'SearchMobil']);
//route post for rent mobil
Route::post('/user/mobil/rental/{id}/{hari}', [ManajemenController::class, 'CreateListRent']);