import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div style={{ cursor: "pointer" }} title='linkedin'>
        <a
          href='https://www.linkedin.com/in/srisai-gembali-9a4b81205/'
          target='_blank'
          rel='noreferrer'
          style={{ marginTop: "2.5px" }}
        >
          <BsLinkedin />
        </a>
      </div>
      <div style={{ cursor: "pointer" }} title='github'>
        <a
          href='https://github.com/srisaigembali'
          target='_blank'
          rel='noreferrer'
          style={{ marginTop: "2.5px" }}
        >
          <BsGithub />
        </a>
      </div>
      <div style={{ cursor: "pointer" }} title='leetcode'>
        <a
          href='https://leetcode.com/srisaigembali/'
          target='_blank'
          rel='noreferrer'
          style={{ marginTop: "2.5px" }}
        >
          <SiLeetcode />
        </a>
      </div>
      <div style={{ cursor: "pointer" }} title='leetcode'>
        <a
          href='https://auth.geeksforgeeks.org/user/srisaigembali2000/practice'
          target='_blank'
          rel='noreferrer'
          style={{ marginTop: "2.5px" }}
        >
          <SiGeeksforgeeks />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
