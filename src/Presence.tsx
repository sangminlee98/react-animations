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
  width: 400px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50
  }
}

const Presence = () => {
  const [showing, setShowing] = useState(true);
  const onToggleShowing = () => setShowing(prev => !prev);

  return (
    <Wrapper>
      <AnimatePresence>{showing ? <Box variants={boxVariants} initial='initial' animate='visible' exit='leaving'/> : null}</AnimatePresence>
      <button onClick={onToggleShowing}>click</button>
    </Wrapper>
  );
};

export default Presence;