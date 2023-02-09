<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NewsSource;


class NewsSourceController extends Controller
{
   
    /**
     * Get a list of news source.
     *
     * 
     * @return \Illuminate\Http\jsonResponse
     */
    protected function getNewsSource()
    {
        try{
            //Fecth news source data
            $nsource = NewsSource::all(); 
            
            if($nsource)
              return jsonResponse(200, 'News sources found.', $nsource);
            
            return jsonResponse(404, 'No news source found.');
        } catch (Exception $e) {
            return jsonResponse(400, 'Error occured: '. $e->getMessage());
        }
    }

}
