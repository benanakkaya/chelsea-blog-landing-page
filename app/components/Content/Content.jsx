import React from 'react'
import PostList from '../PostList/PostList'
import SideMenu from '../SideMenu/SideMenu'

export default function Content() {
  return (
    <div className='container px-6 grid grid-cols-1 md:grid-cols-3 gap-12'>
      <PostList />
      <SideMenu />
    </div>
  )
}
