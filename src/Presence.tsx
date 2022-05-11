import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;
const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255,255,255,1);
  border-radius: 20px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: .3
    }
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: .3
    }
  })
}
const Presence = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible(prev => (prev === 10 ? 1 : prev+1))
  };
  const prevPlease = () => {
    setBack(true);
    setVisible(prev => (prev === 1 ? 10 : prev-1))
  };
  return (
    <Wrapper>
      {/* exitBeforeEnter */}
      <AnimatePresence custom={back}> 
        <Box   
          custom={back}       
          key={visible}
          variants={boxVariants} 
          initial='entry' 
          animate='center' 
          exit='exit'
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
};

export default Presence;