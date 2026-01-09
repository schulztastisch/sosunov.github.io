import { MotionValue, motion, useTransform } from 'framer-motion';

type Props = { scrollYProgress: MotionValue<number> };

export default function TitlesReveal({ scrollYProgress }: Props) {
  const local = useTransform(scrollYProgress, [0.80, 1.00], [0, 1], { clamp: true });

  const sport = useTransform(local, [0.00, 0.30], [0, 1]);
  const parkour = useTransform(local, [0.35, 0.65], [0, 1]);
  const stunt = useTransform(local, [0.70, 1.00], [0, 1]);

  return (
    <section className="section section--titles" aria-label="Titel-Reveal">
      <motion.div className="title" style={{ opacity: sport }}>Sportpädagoge.</motion.div>
      <motion.div className="title" style={{ opacity: parkour }}>Parkour‑Trainer,</motion.div>
      <motion.div className="title" style={{ opacity: stunt }}>Stuntman.</motion.div>
    </section>
  );
}
