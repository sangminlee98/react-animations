import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.1);
`;

const Layout = () => {
  const [clicked, setClicked] = useState(true);
  const toggleClick = () => setClicked(prev => !prev);
  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {clicked? <Circle layoutId='circle' style={{borderRadius: 50}}/> : null}
      </Box>
      <Box>
        {!clicked? <Circle layoutId='circle' style={{borderRadius: 0, scale: 2}}/> : null}
      </Box>
    </Wrapper>
  );
};

export default Layout;