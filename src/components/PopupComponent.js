import React from 'react';
import { PopupWidget } from 'react-calendly';

const PopupComponent = () => {
    return (
        <div className="popup">
            <PopupWidget
                url="https://calendly.com/theroguechef"
                rootElement={document.getElementById('root')}
                text="Schedule Your Appt"
                textColor="white"
                color="purple"
            />
        </div>
    );
};

export default PopupComponent;
