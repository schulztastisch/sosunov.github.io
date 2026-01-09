import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MorseSOS from './sections/MorseSOS';
import UnoMorph from './sections/UnoMorph';
import StickFigure from './sections/StickFigure';
import NameReveal from './sections/NameReveal';
import TitlesReveal from './sections/TitlesReveal';
import './styles.css';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const bg = useTransform(scrollYProgress, [0, 1], ['#0b0d12', '#101828']);

  return (
    <motion.div className="page" style={{ background: bg }} ref={containerRef}>
      <MorseSOS scrollYProgress={scrollYProgress} />
      <UnoMorph scrollYProgress={scrollYProgress} />
      <StickFigure scrollYProgress={scrollYProgress} />
      <NameReveal scrollYProgress={scrollYProgress} />
      <TitlesReveal scrollYProgress={scrollYProgress} />
    </motion.div>
  );
}
``
