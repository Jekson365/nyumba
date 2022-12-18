import React from 'react'

export const Stats = () => {
  const items = [
    {
      id:1,
      num:"$4+B",
      title:`Total sales ssince 2013`
    },
    {
      id:2,
      num:"935K",
      title:"TOTAL SOCIAL MEDIA FOLLOWERS"
    },
    {
      id:3,
      num:"#1",
      title:"REAL ESTATE COMPANY IN AMERICA"
    },
    {
      id:4,
      num:"823",
      title:"TRANSACTIONS SINCE 2013"
    },

  ]
  return (
    <>
      <section 
      className='vid-sec w-100 position-relative' style={{ 'marginTop': "100px" ,'height':"100vh"}}>
        <video
          className='w-100 h-100'
          style={{"objectFit":"cover"}}
          loop muted type='video/mp4'
          src="https://uploads-ssl.webflow.com/62fa691cc55f6309ef33ee6a/6300e45e244f8ef556bdb320_Buildings - 82264-transcode.mp4" autoPlay></video>
        <div className="overlay"></div>
        <div className="content-stats">
          <h4 className='h4'>OUR STATS</h4>
          <h1 className='h1 tt'>Why Work With Us</h1>
          <div className="flex-row flex-wrap d-flex justify-content-center">
            {items.map((each) => {
              const {id,num,title} = each
              return (
                <>

                  <div 
                  key={id}
                  style={{"maxWidth":"320px",'minHeight':"100px",'marginTop':"100px"}}
                  className="p-3 text-content text-center justify-content-between column d-flex align-items-center flex-column">
                    <h1 className='h1'>{num}</h1>
                    <div style={{"width":"95%",'fontSize':"1.3vw"}}>{title}</div>
                  </div>

                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
