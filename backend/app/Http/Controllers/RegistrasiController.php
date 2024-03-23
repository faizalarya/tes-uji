<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Auth;

class RegistrasiController extends Controller
{
    // public function indexlogin(){
    //     return view('login.index');
    // }
    public function CreateUser(Request $request){
      
       try {
        $nama = $request->nama;
        $email = $request->email;
        $password = $request->password;
        $alamat = $request->alamat;
        $nomor_telepon = $request->nomor_telepon;
        $nomor_sim = $request->nomor_sim;
        $role = "2";
        
        $save_user = new User;
        $save_user->nama = $nama;
        $save_user->email = $email;
        $save_user->password = bcrypt($password);
        $save_user->alamat = $alamat;
        $save_user->nomor_telepon = $nomor_telepon;
        $save_user->nomor_sim = $nomor_sim;
        $save_user->role = $role;
 
        $save_user->save();

        $data_user = [
            'nama'=>$nama,
            'email'=>$email,
            'password'=>$password,
            'message'=>'Sukses Mendaftar',
            'code'=>200
        ];

       } catch (\Exception $e) {
        $data_user = [
            'message'=>'Gagal Mendaftar',
            'error'=>$e,
            'code'=>401
        ];
       }
       
       

       return $data_user;
    }
    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('AuthToken')->plainTextToken;
          
            return response()->json(['token' => $token]);
        }
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
    public function logout(Request $request){
        $accessToken = $request->user()->currentAccessToken();

        if ($accessToken) {
            $accessToken->delete();
            return response()->json(['message' => 'Successfully logged out']);
        }
    
        return response()->json(['error' => 'Access token not found'], 404);
    }
    public function GetUser($id){
        $user_data = User::find($id);
        if ($user_data != NULL) {
            $list_data = [
                'data'=> $user_data,
                'message'=>'berhasil mendapatkan data',
                'code'=>200
            ];
        }else {
            $list_data = [
                'message'=>'gagal mendapatkan data',
                'code'=>404,
            ];
        }
        return $list_data;
    }
}