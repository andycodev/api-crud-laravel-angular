<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;



Route::get('users', [UserController::class, 'getUsers'])->name('api.v1.users');
Route::get('user/{id}', [UserController::class, 'getUser'])->name('api.v1.user');
Route::post('addUser', [UserController::class, 'addUser'])->name('api.v1.addUser');
Route::put('updateUser/{id}', [UserController::class, 'updateUser'])->name('api.v1.updateUser');
Route::delete('deleteUser/{id}', [UserController::class, 'deleteUser'])->name('api.v1.deleteUser');


