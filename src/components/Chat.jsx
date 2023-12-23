import React from 'react';
import camera from '../images/camera.png';
import add from '../images/add.png';
import more from '../images/more.png';
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={camera} alt="camera" />
          <img src={add} alt="add" />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
