// File: src/components/SegmentedProgressBar.tsx

import Link from 'next/link';

interface SegmentProps {
  active?: boolean;
  href: string;
}

const Segment: React.FC<SegmentProps> = ({ active, href }) => (
  <Link href={href} className="flex-grow relative">
    {active ? (
      <>
        <div className="segment-active-base absolute inset-0"></div>
        <div className="segment-active-middle absolute inset-0"></div>
        <div className="segment-active-top absolute inset-0"></div>
      </>
    ) : (
      <div className="segment-inactive h-full"></div>
    )}
  </Link>
);

interface SegmentedProgressBarProps {
  segments: { href: string; active?: boolean }[];
}

const SegmentedProgressBar: React.FC<SegmentedProgressBarProps> = ({ segments }) => (
  <div className="flex w-full bg-transparent p-1">
    {segments.map((segment, index) => (
      <div key={index} className="flex-grow flex items-center">
        <Segment {...segment} />
        {index < segments.length - 1 && <div className="w-9 flex-shrink-0"></div>}
      </div>
    ))}
  </div>
);

export default SegmentedProgressBar;