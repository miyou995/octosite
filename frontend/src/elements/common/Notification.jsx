import React, { useEffect, useState } from 'react';

export default function Notification(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [sent, setSent] = useState(0)
    const [message, setMessage] = useState(props.message)
    const [success, setSuccess] = useState(false)
    useEffect(() =>
    {   
        setMessage(props.msg)
        setSuccess(props.success)
        setTimer(3000)
        setSent(props.sent)
        //console.log(message)

    }, [sent]);


    const setTimer = (delay) =>
    {   setIsVisible(true)
        setTimeout(() => setIsVisible(false), delay);
    };

    const getClass = ()=> {
        if (success) {
            return 'alert-success'
        }
        else {
            return 'alert-danger'
        }
    }
    return (
        isVisible
            ? <div className={`alert ${getClass()}`} role="alert">{message}</div>
            : <span />
    );
}