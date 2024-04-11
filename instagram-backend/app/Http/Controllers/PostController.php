<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function add(Request $request)
    {
        try {
            $validateData = $this->validatePostRequest($request);
            $post = new Post();
            $post->caption = $validateData['caption'];
            $post->user_id = $validateData['user_id'];
            $post->image = $validateData['image'];
            $post->save();
            return response()->json(['status' => 'success', 'message' => 'Post added successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
    private function validatePostRequest(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'caption' => 'required|string',
            'image' => 'required|string',
        ]);
    }
    public function getFollowingPosts($userId)
    {
        try {
            $user = User::find($userId);
            if (!$user) {
                return response()->json(['status' => 'error', 'message' => 'User not found'], 404);
            }
            $followingIds = $user->following()->pluck('id')->toArray();
            $posts = Post::whereIn('user_id', $followingIds)->get();
            return response()->json(['status' => 'success', 'data' => $posts], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
    public function getUserPosts($userId)
    {
        try {
            $user = User::find($userId);

            if (!$user) {
                return response()->json(['status' => 'error', 'message' => 'User not found'], 404);
            }

            $posts = Post::where('user_id', $userId)->get();

            return response()->json(['status' => 'success', 'data' => $posts], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

}

