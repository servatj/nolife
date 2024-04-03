import React from 'react';

interface Milestone {
  label: string;
  year: string;
}

interface RoadmapProps {
  milestones: Milestone[];
  selected: number;
}

const Roadmap: React.FC<RoadmapProps> = ({ milestones, selected }) => {
  return (
    <div className="flex items-center justify-between p-4">
      {milestones.map((milestone, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="text-sm mb-3 text-white">{milestone.label}</div>
          <div className="relative flex items-center w-full ml-10">
            {index >= 0 && (
              <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0 h-0.5 bg-pink-500" />
            )}
            <div
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                selected === index ? 'bg-white border-4 border-pink-500' : 'bg-pink-500'
              }`}
            ></div>
          </div>
          <div className="text-xs mt-3 text-2xl text-pink-600">{milestone.year}</div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
