<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * DB table name for model
     */
    protected $table = 'users';
    
    /**
     * DB table primary key
     */
    protected $primaryKey = 'id';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ftname',
        'ltname',
        'email',
        'password',
        'last_login',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The validation rule array
     * 
     * @return array
     */
    public static function rules():array
    {
        return [
            'fname'=>'required|string',
            'lname'=>'required|string',
            'email'=>'required|email',
            'password'=>'required|string|min:6|max:30'
        ];
    }

     /**
     * User login validation rule array
     * 
     * @return array
     */
    public static function loginRules():array
    {
        return [
            'email'=>'required|email',
            'password'=>'required|string|min:6|max:30'
        ];
    }

    /**
     * JWT Indentifier
     * 
     * @return mixed
     */
    public function getJWTIdentifier() {
        $this->getKey();
    }

     /**
     * JWT Indentifier
     * 
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }

    protected $timestamp = true;
}
