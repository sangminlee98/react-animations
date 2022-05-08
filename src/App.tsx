import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const BiggerBox = styled.div`
//   width: 600px;
//   height: 600px;
//   background-color: rgba(255,255,255,0.4);
//   border-radius: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
// const Circle = styled(motion.div)`
//   background-color: white;
//   height: 70px;
//   width: 70px;
//   place-self: center;
//   border-radius: 50%;
//   box-shadow: 0 2px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.1);
// `;

// const boxVariants = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   },
// };

// const circleVariants = {
//   start: {
//     opacity: 0,
//     y: 10,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//     }
//   },
// }

const boxVariant = {
  // hover: {scale: 1.5, rotateZ: 90},
  // tap: {borderRadius: '100px', scale: 1},
  // drag: {
  //   backgroundColor: 'rgb(46,204,113)',
  //   transition: {duration: .3}
  // },
  
}

function App() {
  // const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-500, 500], [-360, 360]);
  const gradient = useTransform(x, [-500, 0, 500],[
    'linear-gradient(135deg,rgb(9, 170, 184),rgb(130, 208, 244))',
    'linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238))',
    'linear-gradient(135deg,rgb(192, 22, 22),rgb(245, 113, 113))'
  ]);
  const {scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // },[x])
  // useEffect(() => {
  //   scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  // }, [scrollY, scrollYProgress])
  return (
    <Wrapper style={{background: gradient}}>
      {/* <Box transition={{duration: .5}} initial={{transform:'translateY(50px)', opacity:0}} animate={{transform: 'translateY(0px)', opacity: 1}}/> */}
      {/* <Box variants={boxVariants} initial='start' animate='end'>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box> */}
      {/* <BiggerBox ref={biggerBoxRef}>
        <Box drag dragConstraints={biggerBoxRef} dragSnapToOrigin dragElastic={0.5} variants={boxVariant} whileHover='hover' whileTap='tap'/>
      </BiggerBox> */}
      <Box style={{x, rotateZ, scale}}  drag='x' dragSnapToOrigin/>
    </Wrapper>
  );
}

export default App;
