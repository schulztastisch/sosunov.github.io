import { MotionValue, motion, useTransform } from 'framer-motion';

type Props = { scrollYProgress: MotionValue<number> };

export default function MorseSOS({ scrollYProgress }: Props) {
  const local = useTransform(scrollYProgress, [0.00, 0.20], [0, 1], { clamp: true });
  const opacityDots = useTransform(local, [0, 0.2, 0.6, 1], [1, 0.7, 0.3, 0]);
  const headlineOpacity = useTransform(local, [0.4, 0.7], [0, 1]);
  const subOpacity = useTransform(local, [0.25, 0.45], [0, 1]);

  return (
    <section className="section section--morse" aria-label="Morse SOS Intro">
      <div className="morse-wrap">
        <motion.div className="morse" style={{ opacity: opacityDots }} aria-hidden>
          {/* SOS = ... --- ... */}
          <span className="dot" /><span className="dot" /><span className="dot" />
          <span className="dash" /><span className="dash" /><span className="dash" />
          <span className="dot" /><span className="dot" /><span className="dot" />
        </motion.div>

        <motion.h2 className="sub" style={{ opacity: subOpacity }}>
          Kommt, wie gerufen
        </motion.h2>

        <motion.h1 className="headline" style={{ opacity: headlineOpacity }}>
          SOS
        </motion.h1>
      </div>
    </section>
  );
}
