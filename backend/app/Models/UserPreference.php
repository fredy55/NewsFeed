<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPreference extends Model
{
    use HasFactory;
    
    /**
     * DB table name for model
     */
    protected $table = 'user_preferences';
    
    /**
     * DB table primary key
     */
    protected $primaryKey = 'id';
    
    /**
     * DB tables required and usable fields
     */
    protected $fillable = [
        'user_id',
        'source_id',
        'isActive'
    ];

    /**
     * The validation rule array
     * 
     * @return array
     */
    public static function rules():array
    {
        return [
            'userId'=>'required|numeric',
            'sourceId'=>'required|numeric',
            'status' => 'required|numeric'
        ];
    }

    /**
     * DB table default created and 
     * updated_at field
     */
    protected $timestamp = true;
}
