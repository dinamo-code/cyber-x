<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use \Illuminate\Validation\Validator;

 USE Illuminate\Database\Eloquent\Modelsave;
use Illuminate\Database\Schema\Grammars\PostgresGrammar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\signup;
use Illuminate\Support\Facades\Hash;
 use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
 use Illuminate\database\Migrations\cybers;

class signupController extends Controller
{
  

    public function signupPost(Request $request)
    {
        $user = new User();
        
        $user->name = $request->name  ;
        $user->email = $request->email   ;

         
        $user->Password = $request->Password  ;
        $user-> save();

  

        
         
    }
}