import styles from "./Animation.module.css";
import Lottie from "lottie-react";
import beard from "../../assets/Beard-Animation.json";
import { motion } from "framer-motion";

export const Animation = () => {
  return (
    <div className={styles.root}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Lottie animationData={beard} />
      </motion.div>
    </div>
  );
};
