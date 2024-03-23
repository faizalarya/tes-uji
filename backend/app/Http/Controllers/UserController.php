<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\ListMobil;

class UserController extends Controller
{
    // public function index(Request $request){
    //     if($request->merk){
    //         $list_mobil = ListMobil::where('merk', 'LIKE', '%'.$request->merk.'%')->get();
    //     }else{
    //         $list_mobil = ListMobil::all();
    //     }
     
    //     return view('landingpage.index', compact('list_mobil'));
    // }
    // public function bookcar($id){
    //     $mobil = ListMobil::find($id);
    //     return view('landingpage.bookcar', compact('mobil'));
    // }

    public function GetMobil(){
        $mobil_semua = ListMobil::get();
        if ($mobil_semua != NULL) {
            $list_mobil = [
                'data'=>$mobil_semua,
                'message'=>'berhasil',
                'code'=>200
            ];
        }
        else {
            $list_mobil = [
                'message'=>'gagal',
                'code'=>404
            ];
        }
        return $list_mobil;
    }
    public function SearchMobil(Request $request){
        if($request->merk){
            $merk = $request->merk;
            $cari_mobil = ListMobil::where('merk', 'LIKE', '%'.$merk.'%')
            ->get(); //not specific    
        }
        if($request->model){
            
            $model = $request->model;
            $cari_mobil = ListMobil::where('model', 'LIKE', '%'.$model.'%')
            ->get();
        }

        $count_mobil = count($cari_mobil); //menghitung length
        if ( $count_mobil > 0 ) {
            $list_mobil = [
                'data'=>$cari_mobil,
                'message'=>'mobil ada',
                'code'=>200
            ];
        }else {
            $list_mobil = [
                'data'=>[],
                'message'=>'mobil tidak ada',
                'code'=>404
            ];
        }
        return $list_mobil;
    }
}
