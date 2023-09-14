import { Link } from 'react-router-dom';
import './Activity.css';
import ActivityDate from './ActivityDate';
import Card from '../UI/Card';
import ProfilPhoto from './ActivityProfilPhoto';

function Activity(props){
    
    return (
      <>
        <div className="container">
          <div className="row">
            
              <div className="col-4">
                <ProfilPhoto />
              </div>

              <div className="col-5">
                <div className="activity-item__description">
                  {props.title}</div>
              </div>

              <div className="col-3">
                <div className='activity-box-time-and-invite'>

                
                <div className="activty-box-time">
                  <ActivityDate date={props.date}></ActivityDate>
                </div>
                
                <div className="activty-box-invite">
                  <button className="activity-item__button">
                    Katılma isteği
                  </button>
                </div>
                </div>
              </div>
            
          </div>
        </div>
      </>
    );
            
        
        
}

export default Activity;