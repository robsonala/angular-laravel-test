<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Support\Facades\Request;

class StudentController
{

    public function index(Request $request)
    {
        $query = $request::get('q');

        if (empty($query)) {
            return Student::all();
        }

        return Student::orWhere('first_name', 'like', '%' . $query . '%')
            ->orWhere('last_name', 'like', '%' . $query . '%')
            ->orWhere('email', 'like', '%' . $query . '%')
            ->orWhere('subject', $query)
            ->get();
    }
}
