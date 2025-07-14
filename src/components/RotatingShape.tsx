'use client';

import { motion } from 'framer-motion';

const RotatingShape = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                className="relative w-64 h-64 rounded-full border-2 border-gray-300 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            >
                <div className="w-32 h-32 border border-gray-500 rotate-45" />
            </motion.div>
        </div>
    );
};

export default RotatingShape;
