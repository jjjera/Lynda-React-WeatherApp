import React from 'react';
import AddDayForm from './AddDayForm';
//import {Icon} from 'react-icons-kit';
//import Terrain from 'react-icons/lib/md/terrain';
//import SnowFlake from 'react-icons/lib/ti/weather-snow';
//import {Calendar} from 'react-icons-kit/fa/calendar';


const perecntToDecimal = (decimal) => {
    return((decimal * 100) + '%')
}
const calcGoalProgress = (total,goal) => {
    return perecntToDecimal(total/goal)
}

const SkiDayCount = ({total, powder, backcountry, goal}) => (
            <div className="ski-day-count">
            <div className="total-days">
            
            <span>{total}</span>
            <span>days</span>
            </div>
            <div className="powder-days">
            <span>{powder}</span>
    
            <span>days</span>
            </div>
            
            <div className = "backcountry-days">
            <span>{backcountry}</span>
            <span>days</span>
            
            </div> 
            <div>
            <span>
            {
                calcGoalProgress(
                    total, 
                    goal)
            }
                </span>
            </div>
            <AddDayForm />
            </div>
);
export default SkiDayCount ;