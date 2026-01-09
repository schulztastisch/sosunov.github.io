import { MotionValue, motion, useTransform } from 'framer-motion';

type Props = { scrollYProgress: MotionValue<number> };

export default function NameReveal({ scrollYProgress }: Props) {
  const local = useTransform(scrollYProgress, [0.60, 0.80], [0, 1], { clamp: true });

  const sizeSOSUNOV = useTransform(local, [0, 0.4], ['8vw', '5vw']);
  const weightSOSUNOV = useTransform(local, [0, 0.4], [900, 500]);
  const kerning = useTransform(local, [0, 0.4], ['0.02em', '0em']);
  const shiftRight = useTransform(local, [0.5, 0.8], ['0%', '20%']);
  const vassilijOpacity = useTransform(local, [0.65, 0.9], [0, 1]);

  return (
    <section className="section section--name" aria-label="Namens-Choreografie">
      <motion.div className="name-row" style={{ gap: shiftRight }}>
        <motion.span
          className="last"
          style={{ fontSize: sizeSOSUNOV, fontWeight: weightSOSUNOV, letterSpacing: kerning }}>
          Sosunov
        </motion.span>
        <motion.span className="first" style={{ opacity: vassilijOpacity }}>
          Vassilij
        </motion.span>
      </motion.div>
    </section>
  );
}
