<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'descripcion',
    ];

    public function estudiantes()
    {
        return $this->belongsToMany(Estudiante::class, 'estudiantes_cursos', 'id_curso', 'id_estudiante');
    }

    public function notas()
    {
        return $this->hasMany(Nota::class, 'id_curso');
    }
}
