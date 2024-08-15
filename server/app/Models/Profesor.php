<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'apellido',
        'email',
        'telefono',
    ];

    public function materias()
    {
        return $this->belongsToMany(Materia::class, 'materias_profesores', 'id_profesor', 'id_materia');
    }
}
