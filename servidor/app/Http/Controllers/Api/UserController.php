<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUsers()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

 
    public function getUser($id)
    {
        $user = User::find($id);
        if(is_null($user)){
            return response()->json(['message'=>'Usuario no encontrado'], 404);
        }
        return response()->json($user, 200);
    }

 
    public function addUser(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user, 201);
    }

 
    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);
        if(is_null($user)){
            return response()->json(['message'=>'Usuario no encontrado'], 404);
        }
        $user->update($request->all());
        return response()->json($user, 200);
    }


    public function deleteUser($id)
    {
        $user = User::find($id);
        if(is_null($user)){
            return response()->json(['message'=>'Usuario no encontrado'], 404);
        }
        $user->delete();
        return response()->json(null, 204);
    }
    
}
