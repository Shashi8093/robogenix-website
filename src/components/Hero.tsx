import { motion } from 'framer-motion';
import { CircuitBoard, Cpu, Cog, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovate with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Robotics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
            RobogeniX promotes hands-on learning
in robotics, encouraging creativity and
problem-solving. The club has hosted
competitions like Quizzabot, Roboriddle
sponsored by Avishkaar, hosted
ZenoTerminus and Megatron events
sponsored by Monster. Led by coordinator
Saptarshi, deputy coordinator Ananya
and secretary Ankit, RobogeniX aims to
advance its mission and cultivate a
vibrant robotics culture at XIM University.
            </p>
            <p className="text-xl text-gray-300 mb-8">
            RobogeniX welcomes
both experienced
robotics enthusiasts and
newcomers to explore
and innovate in robotics,
aiming to inspire and
push technological
boundaries.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Join Us
              </button>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: CircuitBoard, title: 'Robotics' },
              { icon: Cpu, title: 'AI & ML' },
              { icon: Cog, title: 'Automation' },
              { icon: Rocket, title: 'Innovation' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-colors duration-200"
              >
                <item.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}