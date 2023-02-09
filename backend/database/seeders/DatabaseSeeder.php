<?php

namespace Database\Seeders;
use App\Models\NewsSource;
use App\Models\User;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $sources = [
            ['name' => 'News API'],
            ['name' => 'The Guardian'],
            ['name' => 'New York Times']
        ];

        foreach($sources as $source){
            NewsSource::create([
                'name' => $source['name']
            ]);
        }
       
    }
}
