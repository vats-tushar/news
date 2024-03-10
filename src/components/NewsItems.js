import React from 'react'

const NewsItems = (props)=> {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='container my-3'>
        <div className="card" style={{boxShadow: props.mode === 'light' ? '0 4px 8px 0 black' : '0 4px 8px 0 white'}}>
        <div style={{display: 'flex', position: 'absolute', right: ''}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
            <img src={imageUrl?imageUrl:"https://raw.githubusercontent.com/vats-tushar/images/main/newsburst-default.png"} className="card-img-top" alt="..."/>
            <div className="card-body" style={{color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'rgb(248,249,250)' : 'rgb(33,37,41)'}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">By {author?author:'Unknown'} on {new Date(date).toUTCString()}</p>
                <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItems