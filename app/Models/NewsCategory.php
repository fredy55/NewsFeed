<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsCategory extends Model
{
    use HasFactory;

    /**
     * DB table name for model
     */
    protected $table = 'news_categories';
    
    /**
     * DB table primary key
     */
    protected $primaryKey = 'id';
    
    /**
     * DB tables required and usable fields
     */
    protected $fillable = [];

    /**
     * The validation rule array
     * 
     * @return array
     */
    public static function rules():array
    {
        //
    }

    /**
     * DB table default created and 
     * updated_at field
     */
    protected $timestamp = true;
}
