<?php

namespace App\Http\Controllers;
use App\Models\ListMobil;
use Illuminate\Http\Request;
use App\Models\Rentlist;


class ManajemenController extends Controller
{
    // public function dashboardadmin(){
    //     return view('dashboard-admin.index');
    // }
    // public function tambahmobil(){
    //     return view('dashboard-admin.tambahmobil');
    // }
    public function CreateMobil(Request $request){
        try {
            $merk = $request->merk;
            $model = $request->model;
            $nomor_plat = $request->nomor_plat;
            $tarif_sewa_perhari = $request->tarif_sewa_perhari;
            $gambar_mobil = $request->gambar_mobil;

            $save_mobil = new ListMobil;
            $save_mobil->merk = $merk;
            $save_mobil->model = $model;
            $save_mobil->nomor_plat = $nomor_plat;
            $save_mobil->tarif_sewa_perhari = $tarif_sewa_perhari;
            $save_mobil->gambar_mobil = $gambar_mobil;

            $save_mobil->save();

            $data_mobil = [
                'merk'=>$merk,
                'model'=>$model,
                'nomor_plat'=>$nomor_plat,
                'message'=>'Sukses Menambahkan Mobil',
                'code'=>200
            ];

        } catch (\Exception $e) {
            $data_mobil = [
                'message'=>'Gagal Menambahkan mobil',
                'error'=>$e,
                'code'=>401
            ];
        }
        return $data_mobil;
    }
    public function UpdateKetersediaan($id){
        $mobil = ListMobil::find($id);
        if($mobil->ketersediaan == false){
            $mobil->ketersediaan = true;
        }else{
            $mobil->ketersediaan = false;
        }
   
        $mobil->save();
        $data = [
            'message'=>'Sukses Update mobil',
            'code'=>200
        ];
        return $data;
    }
    public function HapusMobil($id){
        $mobil = ListMobil::find($id);
        $mobil->delete();
        $deleteMobil = [
            'message'=>'berhasil menghapus list mobil',
            'code'=>200
        ];
        return $deleteMobil;
    }
    public function CreateListRent($id,$hari, Request $request){
       try {

        $totalHari = $hari;
        $getDataHarga = ListMobil::find($id);
        $hargaSewa = $getDataHarga->tarif_sewa_perhari;
        $totalBayar = $hargaSewa * $totalHari;
        $rentdata = new Rentlist;
        $rentdata->id_mobil = $id;
        $rentdata->nama = $request->nama;
        $rentdata->alamat = $request->alamat;
        $rentdata->nomor_telepon = $request->nomor_telepon;
        $rentdata->nomor_sim = $request->nomor_sim;
        $rentdata->tanggal_awal = $request->tanggal_awal;  
        $rentdata->tanggal_akhir = $request->tanggal_akhir;
        $rentdata->total_bayar = $totalBayar;
        $getDataHarga->ketersediaan=0;


        $rentdata->save();
        $getDataHarga->save();
        $rentdata = [
            'message'=>'Sukses Update mobil',
            'data'=>$rentdata,
            'code'=>200
        ];

       } catch (\Exception $e) {
        $rentdata = [
            'message'=>'Gagal rent mobil',
            'error'=>$e,
            'code'=>401
        ];
       } 
       return $rentdata;
    }
    public function ListRent() {
        $getlistrent = Rentlist::join('list_mobils', 'rentlists.id_mobil', '=', 'list_mobils.id')
                                ->select('rentlists.*', 'list_mobils.*')
                                ->get();
    
        $data = [
            'data' => $getlistrent,
            'code' => 200
        ];
    
        return $data;
    }
    
}
