import PostCard from '@/Utility_Component/PostCard'
import React from 'react'

export default function UserPostSection() {
  return (
    <div class="text-center p-10 mt-6">
    <h1 class="font-bold text-4xl mb-4 text-white cursor-default">My Posts</h1>
    <div className='grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    </div>
</div>
  )
}
