import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

export default function Pagination(props) {

    const [pagination, setPagination] = useState({})

    useEffect(()=> {
        //console.log('props', props)
        setPagination(props.pagination)
        //console.log('paginaaaaaation',pagination) 

    }, [props.pagination])

    const getPage = (pageString) => {
        //console.log('pagestring', pageString)

       
        try{
            const split = pageString.split('page=')
            if(split.length>1) {
                return `/blog/?page=${split[1]}`
            }
            else {
                return `/blog/`
            }
        } 
        catch {
            return `/blog/`
        }
        
    }
    return (

        <div className="rn-pagination text-center">
            
               {(Object.keys(pagination).length !== 0)? 
                <ul className="page-list">
                {pagination.previous ? <li><Link to={`${getPage(pagination.previous)}`} className='disabled-link'><FaAngleLeft /></Link></li> :  <li><Link to='#' onClick={e => e.preventDefault()} className='disabled-link'><FaAngleLeft /></Link></li>}
                <li><Link to={`${getPage(pagination.previous)}`} className='disabled-link' onClick={e => e.preventDefault()}>{props.page}</Link></li>
                {pagination.next ? <li><Link to={`${getPage(pagination.next)}`}><FaAngleRight /></Link></li>: <li><Link to="#" onClick={e => e.preventDefault()}><FaAngleRight /></Link></li>}

                </ul>

                : <ul className="page-list"></ul> }
               
        </div>
    )
}