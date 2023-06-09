import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    
    
    

  return (
    <div className='widgets'>
        <div className="widgets-header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        <div className="widgets_article">
            <div className="article_left">
            <FiberManualRecordIcon/>
            </div>
            <div className="article_right">
                <h4>Worlf war</h4>
                <p>the consequences of the world war 2 are...</p>
                
            </div>

        </div>
        <div className="widgets_article">
            <div className="article_left">
            <FiberManualRecordIcon/>
            </div>
            <div className="article_right">
                <h4>worlf war 2  has many quanseque nceafna ksnfnf</h4>
                <p>the consequences of the world war 2 are...</p>
                
            </div>

        </div>
        <div className="widgets_article">
            <div className="article_left">
            <FiberManualRecordIcon/>
            </div>
            <div className="article_right">
                <h4>worlf war</h4>
                <p>the consequences of the world war 2 are...</p>
                
            </div>

        </div>
        <div className="widgets_article">
            <div className="article_left">
            <FiberManualRecordIcon/>
            </div>
            <div className="article_right">
                <h4>worlf war</h4>
                <p>the consequences of the world war 2 are...</p>
                
            </div>


        </div>
    </div>
  )
}

export default Widgets