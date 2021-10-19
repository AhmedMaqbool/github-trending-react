import React from 'react'
import '../RepoInfo/RepoInfo.css'
import {RepoIcon,StarIcon,RepoForkedIcon} from '@primer/octicons-react'



function RepoInfo(props) {

        const {username,repositoryName,description,totalStars,forks,builtBy,starsSince,url,language}=props.value;
        
    return (

        <div className="repo-box">
            <div className="a">
            <div className="b">
            <RepoIcon className="repo-icon"  size={16} />
            <h3><span className="repo-username">{username}</span><span className="divider">/</span><a className="repo-name" href={url} rel="noreferrer" target="_blank"><span className='repo-name'>{repositoryName}</span></a></h3>
            </div>
            <button className="star-button">
            <StarIcon size={16} />
             Star
            </button>
            </div>
            
            {description?<div className='repo-description'><p>{description}</p></div>:null}
            
            <div className='d'>
                <div className="e">
                  <span className="repo-languagae">{language} </span>
                  <span className="repo-stars"><StarIcon size={16} /> {totalStars}</span>
                  <span className="repo-forks"><RepoForkedIcon size={16} />{forks} </span>
                  
                  
                  <div className='f'>
                   <span>Built by</span>
                   { 
                       builtBy.map((val,index)=>(
                        
                        <a rel="noreferrer" key={index} href={val.url} target="_blank">
                            <img src={val.avatar} className="img" alt="user" width="20" height="20" />
                        </a>
                        

                       ))      
                   }

                  
                  </div>
                  
                </div>

                <div className='today-star'>
                <StarIcon size={16} />{starsSince} stars today                 
                </div>
            </div>

            
        </div>
        
    )
}

export default RepoInfo
