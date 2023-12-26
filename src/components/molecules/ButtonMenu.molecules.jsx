import React, { useState } from 'react'
import ButtonQuick from '../atom/ButtonQuick.atom';
import ButtonQuickTask from '../atom/ButtonQuickTask.atom';
import ButtonQuickInbox from '../atom/ButtonQuickInbox.atom';

const ButtonMenu = ({ onClickQuickTask, onClickQuickInbox }) => {
    const [isButtonsVisible, setButtonsVisible] = useState(false);

    const toggleButtons = () => {
        setButtonsVisible(!isButtonsVisible);
    };

    return (
        <div className='items-center justify-center flex absolute bottom-10 right-10'>
            <div className='z-50	'>
                <ButtonQuick onClick={toggleButtons} />
            </div>
            <div className='flex-row flex items-center '>
                <div className={`hiddenButtons flex flex-row ${isButtonsVisible ? 'visible' : ''}`} onClick={onClickQuickTask}>
                    <ButtonQuickTask />
                </div>
                <div className={`hiddenButtons flex flex-row ${isButtonsVisible ? 'visible2' : ''}`} onClick={onClickQuickInbox}>
                    <ButtonQuickInbox />
                </div>

            </div>
        </div>
    )
}

export default ButtonMenu