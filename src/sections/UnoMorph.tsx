import { MotionValue, motion, useTransform } from 'framer-motion';
import * as flubber from 'flubber';

type Props = { scrollYProgress: MotionValue<number> };

export default function UnoMorph({ scrollYProgress }: Props) {
  const local = useTransform(scrollYProgress, [0.20, 0.40], [0, 1], { clamp: true });

  const sourcePath = 'M10 80 h20 M40 80 h20 M70 80 h20 M100 80 h20 M130 80 h20'; 
  const card1Path = 'M20 20 h70 v120 h-70 z';
  const card2Path = 'M70 35 h70 v120 h-70 z';

  const interp1 = flubber.interpolate(sourcePath, card1Path, { maxSegmentLength: 2 });
  const interp2 = flubber.interpolate(sourcePath, card2Path, { maxSegmentLength: 2 });

  const d1 = useTransform(local, t => interp1(t));
  const d2 = useTransform(local, t => interp2(t));

  const captionOpacity = useTransform(local, [0.6, 0.9], [0, 1]);
  const unoGlow = useTransform(local, [0.4, 0.6, 0.8], [0, 1, 0]);

  return (
    <section className="section section--uno" aria-label="UNO Morph">
      <svg viewBox="0 0 180 180" className="uno-svg" role="img" aria-label="Morphende Karten">
        <motion.path d={d1} className="card card--plus4" />
        <motion.path d={d2} className="card card--reverse" />
        {/* Platzhalter für +4/Reverse Symbole */}
        <motion.text x="45" y="85" textAnchor="middle" className="card-text">+4</motion.text>
        <motion.text x="105" y="100" textAnchor="middle" className="card-text">↺</motion.text>
      </svg>

      <motion.h2 className="sub" style={{ opacity: captionOpacity }}>
        Der Gamechanger
      </motion.h2>

      <div className="sosuno" aria-label="SOS UNO">
        <span>SOS</span>
        <motion.span
          className="uno"
          style={{ textShadow: unoGlow.to(v => (v > 0 ? `0 0 16px #ffd84c` : 'none')) }}>
          UNO
        </motion.span>
      </div>
    </section>
  );
}
