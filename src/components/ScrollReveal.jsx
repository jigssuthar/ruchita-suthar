import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function ScrollReveal({ children, className = '', delay = 0, as = 'div' }) {
  const MotionElement = motion[as] || motion.div;

  return (
    <MotionElement
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={revealVariants}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionElement>
  );
}

export default ScrollReveal;
