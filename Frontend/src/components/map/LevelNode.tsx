import { Hexagon, Lock, Check, Star } from 'lucide-react'
import styles from './LevelNode.module.css'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

interface LevelNodeProps {
  questionNumber: number
  position: { x: number; y: number }
  status: 'locked' | 'available' | 'completed'
  onClick: (questionNumber: number) => void
}

const LevelNode = ({
  questionNumber,
  position,
  status,
  onClick,
}: LevelNodeProps) => {
  const sideClass = position.x >= 0 ? styles.right : styles.left
  const isLocked = status === 'locked'

  const getStatusIcon = () => {
    switch (status) {
      case 'locked':
        return <Lock size={22} />
      case 'completed':
        return <Check size={30} strokeWidth={3} />
      case 'available':
        return <Star size={30} fill="var(--bg-dark)" />
    }
  }

  const handleClick = () => {
    if (!isLocked) {
      console.log('Node clicked - Question:', questionNumber, 'Status:', status)
      onClick(questionNumber)
    } else {
      console.log('Node locked - Question:', questionNumber)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isLocked) {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <motion.div
      className={clsx(styles.nodeContainer, styles[status], sideClass)}
      style={{
        left: `calc(50% + ${position.x}%)`,
        top: `${position.y}px`,
      }}
      initial={{ x: '-50%', opacity: 0 }}
      animate={{ x: '-50%', opacity: 1 }}
      whileHover={!isLocked ? { scale: 1.05 } : {}}
      whileTap={!isLocked ? { scale: 0.95 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      role="button"
      tabIndex={isLocked ? -1 : 0}
      aria-label={`Question ${questionNumber} - ${status}`}
      aria-disabled={isLocked}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.iconWrapper}>
        <Hexagon size={80} className={styles.hexBg} strokeWidth={1.5} />
        <div className={styles.content}>
          {getStatusIcon()}
        </div>
      </div>
    </motion.div>
  )
}

export default LevelNode