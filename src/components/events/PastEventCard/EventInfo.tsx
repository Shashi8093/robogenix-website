import { Calendar, Users, MapPin } from 'lucide-react';

interface EventInfoProps {
  date: string;
  location: string;
  participants: number;
}

export default function EventInfo({ date, location, participants }: EventInfoProps) {
  return (
    <div className="space-y-2 mb-4">
      <div className="flex items-center space-x-2 text-gray-300">
        <Calendar className="h-4 w-4 text-blue-500" />
        <span>{date}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-300">
        <MapPin className="h-4 w-4 text-blue-500" />
        <span>{location}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-300">
        <Users className="h-4 w-4 text-blue-500" />
        <span>{participants} Participants</span>
      </div>
    </div>
  );
}