<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
    ];

    public function notas()
    {
        return $this->hasMany(Nota::class, 'id_materia');
    }

    public function profesores()
    {
        return $this->belongsToMany(Profesor::class, 'materias_profesores', 'id_materia', 'id_profesor');
    }
}
