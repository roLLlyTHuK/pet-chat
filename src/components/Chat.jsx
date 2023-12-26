import React, { useContext } from 'react';
import camera from '../images/camera.png';
import add from '../images/add.png';
import more from '../images/more.png';
import { Messages } from './Messages';
import { Input } from './Input';
import { ChatContext } from '../context/ChatContext';

export const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log('data :>> ', data);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatIcons">
          <img src={data.user?.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>

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
