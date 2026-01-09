import { MotionValue, motion, useTransform } from 'framer-motion';

type Props = { scrollYProgress: MotionValue<number> };

export default function StickFigure({ scrollYProgress }: Props) {
  const local = useTransform(scrollYProgress, [0.40, 0.60], [0, 1], { clamp: true });

  const armsAngle = useTransform(local, [0, 0.3, 0.6, 1], [0, 45, -45, 0]);
  const legsAngle = useTransform(local, [0, 0.3, 0.6, 1], [0, -20, 20, 0]);
  const captionOpacity = useTransform(local, [0.2, 0.5], [0, 1]);

  return (
    <section className="section section--stick" aria-label="Stick figure animation">
      <svg viewBox="0 0 200 200" className="stick-svg" role="img" aria-label="Strichmännchen">
        {/* Kopf */}
        <circle cx="100" cy="40" r="12" className="stick-head" />
        {/* Körper */}
        <line x1="100" y1="52" x2="100" y2="120" className="stick-body" />
        {/* Arme */}
        <motion.line
          x1="100" y1="70" x2="50" y2="100"
          style={{ rotate: armsAngle }}
          className="stick-arm"
        />
        <motion.line
          x1="100" y1="70" x2="150" y2="100"
          style={{ rotate: armsAngle }}
          className="stick-arm"
        />
        {/* Beine */}
        <motion.line
          x1="100" y1="120" x2="70" y2="160"
          style={{ rotate: legsAngle }}
          className="stick-leg"
        />
        <motion.line
          x1="100" y1="120" x2="130" y2="160"
          style={{ rotate: legsAngle }}
          className="stick-leg"
        />
      </svg>

      <motion.h2 className="sub" style={{ opacity: captionOpacity }}>
        Mit Vollgas zum Erfolg
      </motion.h2>

      <div className="sosuno-inline" aria-label="SOS V UNO">
        SOS<span className="v-merge">V</span>UNO
      </div>
    </section>
  );
}
