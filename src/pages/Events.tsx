import { motion } from 'framer-motion';
import EventCard from '../components/events/EventCard';
import PastEventCard from '../components/events/PastEventCard';
import { UpcomingEventProps, PastEventProps } from '../components/events/types';

const upcomingEvents: UpcomingEventProps[] = [
  {
    title: 'LINE FOLLOWING BOT',
    date: 'JAN, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    description: 'Annual robotics competition featuring battle bots and autonomous robots.',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
    ],
  },
  {
    title: 'RC BOT',
    date: 'JAN, 2025',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800',
    description: 'Hands-on workshops covering various aspects of robotics and automation.',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200' },
    ],
  },
  {
    title: 'SUMO BOT',
    date: 'April 20, 2024',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
    description: 'Conference featuring industry experts and latest innovations in robotics.',
    gallery: [
      { url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200' },
      { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200' },
    ],
  },
];

const pastEvents: PastEventProps[] = [
  {
    title: 'Robotics Workshop 2023',
    date: 'November 15, 2023',
    location: 'Main Campus Auditorium',
    participants: 150,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'A successful workshop where students learned about robot programming and sensor integration.',
    gallery: [
      { 
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
        caption: 'Students working on robot programming'
      },
      { 
        url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200',
        caption: 'Hands-on sensor integration session'
      },
      { 
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Final project demonstrations'
      },
    ],
  },
  {
    title: 'National Robotics Competition',
    date: 'October 5-7, 2023',
    location: 'City Convention Center',
    participants: 300,
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
    description: 'Our team secured second place in the national robotics competition.',
    gallery: [
      { 
        url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200',
        caption: 'Competition arena'
      },
      { 
        url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200',
        caption: 'Team presentation'
      },
      { 
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Award ceremony'
      },
    ],
  },
  {
    title: 'Innovation Showcase',
    date: 'September 20, 2023',
    location: 'Engineering Building',
    participants: 200,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    description: 'Showcasing innovative robotics projects developed by our club members.',
    gallery: [
      { 
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
        caption: 'Project demonstrations'
      },
      { 
        url: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200',
        caption: 'Interactive sessions'
      },
      { 
        url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200',
        caption: 'Student presentations'
      },
    ],
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold text-white mb-2 text-center">
            Upcoming <span className="text-blue-500">Events</span>
          </h1>
          <p className="text-gray-400 text-center mb-12">Join us in our upcoming robotics events and workshops</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </motion.div>

        {/* Past Events Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2 text-center">
            Past <span className="text-blue-500">Events</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Take a look at our successful past events</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <PastEventCard key={index} {...event} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}