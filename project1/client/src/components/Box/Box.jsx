import React, { useEffect } from 'react'
import './Box.css'
import axios from 'axios'
import { useState } from 'react'
import { BsFillCalendarDateFill } from 'react-icons/bs';
import {AiOutlineComment , AiOutlineSearch} from 'react-icons/ai';
import {FiFolder} from  'react-icons/fi';
import {FaSort} from  'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Box() {
    const [data,setdata] = useState([])
    const [search,setsearch] = useState("")
    const [sortcase,setsortcase] = useState(true)
    const navigate = useNavigate();

    const getdata  = async()=>{
        const res = await axios.get("http://localhost:4000/box")
        setdata(res.data)
    }
    useEffect(()=>{
        getdata()
    },[])
    function sort(){
        if(sortcase){
            setdata(data.sort((a,b)=>a.title.localeCompare(b.title)))
            setsortcase(false)
        }
        else{
            setdata(data.sort((a,b)=>b.title.localeCompare(a.title)))
            setsortcase(true)
        }
    }
    function Sendtodetails(id){
        console.log(id);
        navigate(`details/${id}`)
    }
  return (
    <div className="boxcontainer">
        <div className="boxside">
            <div className="sort">
                Sort by title <FaSort onClick={sort} style={{cursor:'pointer'}}/>
            </div>
            {
                data.filter((element)=> element.title.toLowerCase().includes(search.toLowerCase())).map((item)=>(
                    <div key={item._id} className="box">
                        <p className="boxtitle">{item.title}</p>

                        <div className="static">
                            <div className="boxDate">
                                <BsFillCalendarDateFill/>
                                <p className="boxdate">{item.date}</p>
                            </div>
                            <div className="boxComment">
                                <AiOutlineComment/>
                                <p className="boxcomment">{item?.comment}</p>
                            </div>
                            <div className="boxFolder">
                                <FiFolder/>
                                <p className="boxfolder">{item.folder}</p>
                            </div>
                        </div>
                        <hr/>

                        <div className="imgside">
                            <img className='image' src={item.img} alt="" />
                            <div className="boxTxt">
                                <p className="boxtext">{item.text}</p>
                                <p className='con' onClick={()=>{Sendtodetails(item._id)}}>Contunue Reading</p>
                            </div>

                        </div>
                    </div>
                ))
            }
            <hr/>

            <button className="boxend">
                Older post
            </button>
        </div>
        <div className="searchside">
            <div className="Search">
                <input onChange={(e) => {setsearch(e.target.value)}} className="searchinput" placeholder='Search' type="text"/>
                <div className="divsearch">
                    <AiOutlineSearch className='searchbtn'/>
                </div>
            </div>
            <div className="popular">
                <div className="populartext">
                    <p className="popularitem" style={{border:'1px solid',padding:'5px'}}>Popular</p>
                    <p className="popularitem">Recent</p>
                    <AiOutlineComment/>
                </div>
                <div className="popularbox">
                    <div className="boxitem">
                        <img className='popularimage' src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-730x410.jpg" alt="" />
                        <p className="boxitemtext">Template: Sticky Jan 7, 2015</p>
                    </div>
                    
                    <hr/>
                    <div className="boxitem">
                        <img className='popularimage' src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-730x410.jpg" alt="" />
                        <p className="boxitemtext">Template: Sticky Jan 7, 2015</p>
                    </div>
                    <hr/>
                    <div className="boxitem">
                        <img className='popularimage' src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-730x410.jpg" alt="" />
                        <p className="boxitemtext">Template: Sticky Jan 7, 2015</p>
                    </div><hr/>
                    <div className="boxitem">
                        <img className='popularimage' src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-730x410.jpg" alt="" />
                        <p className="boxitemtext">Template: Sticky Jan 7, 2015</p>
                    </div>
                    <hr/>
                    <div className="boxitem">
                        <img className='popularimage' src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2012/01/54-730x410.jpg" alt="" />
                        <p className="boxitemtext">Template: Sticky Jan 7, 2015</p>
                    </div>
                </div>
                <div className="Recentcomments">
                    <p className="recent">Recentcomments</p>
                    <hr/>
                    <div className="commentsitem">
                        <AiOutlineComment/>
                        <p className="commenttext">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="commentsitem">
                        <AiOutlineComment/>
                        <p className="commenttext">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="commentsitem">
                        <AiOutlineComment/>
                        <p className="commenttext">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="commentsitem">
                        <AiOutlineComment/>
                        <p className="commenttext">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="commentsitem">
                        <AiOutlineComment/>
                        <p className="commenttext">Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Box