import { motion, AnimatePresence } from 'framer-motion';
import { IconCircleCheck, IconCircleX, IconAlertCircle } from '@tabler/icons-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
}

export function Toast({ message, type = 'success', isVisible }: ToastProps) {
  const icons = {
    success: <IconCircleCheck className="w-5 h-5 text-success" />,
    error: <IconCircleX className="w-5 h-5 text-destructive" />,
    info: <IconAlertCircle className="w-5 h-5 text-primary" />
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm"
        >
          <div 
            className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-border"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          >
            {icons[type]}
            <span className="flex-1 text-sm text-foreground">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

