import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
