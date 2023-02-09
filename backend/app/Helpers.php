<?php


function jsonResponse(int $code, mixed $message = "", mixed $data = null, array $headers = []){
    
    return response()->json([
        'status' => $code, 
        'message' => $message,
        'data'=> $data
    ], $code)
    ->withHeaders($headers);
}

/**
 * Validate input from frontend.
 *
 * @param  \Illuminate\Http\Request  $request
 * @return array
 */
function inputValidate(array $request, array $rules): array
{
    $validate = Validator::make($request, $rules);
    
    if($validate->fails()){
        return ['failed', $validate->errors()] ;
    }

    return ['success', $validate->validated()];
}

function idGenerate(){
    // six (6) digit user ID
    $today = date("Gis");
    $rand = sprintf("%04d", rand(0,999));
    $user_id = $rand.$today;
    return $user_id;
}

function serialNum(){
    // six (6) digit user ID
    $today = date("Gsi");
    $rand = sprintf("%03d", rand(0,999));
    $sn = $today.$rand;
    return $sn;
}
