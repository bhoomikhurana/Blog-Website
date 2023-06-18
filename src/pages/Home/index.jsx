import React,{useState} from 'react'
import BlogList from '../../components/Home/BlogList'
import SearchBar from '../../components/Home/SearchBar'
import { blogList } from '../../config/data'
import EmptyList from '../../components/common/EmptyList'
import Navbar from '../../components/Home/Navbar'
import Header from '../../components/Home/Header'

const Home = () => {
    const[blogs,setBlogs]=useState(blogList);
    const[searchKey,setSearchKey]=useState('')
    const handleSearchSubmit=event=>{
        event.preventDefault();
        handleSearchResults();
    }
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
          blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
      };
      const handleClearSearch=()=>{
       setBlogs(blogList);
       setSearchKey('');
      }
  return (
    <div> 
        <Navbar/>
     <Header/>
      {/* search bar */}
      <SearchBar value={searchKey}
      clearSearch={handleClearSearch}
      formSubmit={handleSearchSubmit}
      handleSearchKey={(e)=> setSearchKey(e.target.value)}/>
      {/* blog list and empty list */}
      {!blogs.length?<EmptyList/>:<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home
