import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setTimeout(()=>{
            setTime(new Date())
        }, 1000)

        return ()=>{
            clearInterval(interval)
        }
    })

    function formateTime(){
        let hr = time.getHours().toString().padStart(2, "0");
        const min = time.getMinutes().toString().padStart(2, "0");
        const sec = time.getSeconds().toString().padStart(2, "0");
        const meridiam = time >= 12 ? "PM" : "AM";
        hr = hr % 12 || 12;

        

        return (`${hr}:${min}:${sec}:${meridiam}`);
    }
    return(<div>
        <span className="digital-clock">
            {formateTime()}
        </span>
    </div>)
}

export default DigitalClock;