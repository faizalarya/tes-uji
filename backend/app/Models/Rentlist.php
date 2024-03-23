<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rentlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'alamat',
        'nomor_telepon',
        'nomor_sim',
        'tanggal_awal',
        'tanggal_akhir',
        'total_bayar'
    ];
}
