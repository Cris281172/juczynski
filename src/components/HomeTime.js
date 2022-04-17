import {useState, useEffect} from 'react';
import style from '../css/home-time.module.scss';

const HomeTime = () => {
    const[time, setTime] = useState('00:00:00');



    useEffect(() => {
        const interval =  setInterval(() => {
            const now = new Date();
            setTime(`${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}:${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`)
        }, 1000)
        return () => clearInterval(interval);
        }, [])

    return(
        <h3 className={style.homeTime}>
            {time}
        </h3>
    )
}

export default HomeTime;