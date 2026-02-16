import { 
  ClockIcon, 
  UsersIcon, 
  FlagIcon, 
  ActivityIcon, 
  GlobeIcon, 
  CheckIcon,
  CalendarIcon
} from "./Icons";

type QuickInfoProps = {
  duration: string;
  maxGroupSize: number;
  departureType: string;
  guidingMethod: string;
  physicalLevel: string;
  operatedIn: string;
  ageRequirement: string;
};

export default function TourQuickInfo({ data }: { data: QuickInfoProps }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 text-sm text-gray-600">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
        <div className="bg-purple-100 p-2 rounded-full text-[#854EC9]">
          <ClockIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Duration</span>
        <span>{data.duration}</span>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
          <UsersIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Max Group Size</span>
        <span>{data.maxGroupSize}</span>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
        <div className="bg-green-100 p-2 rounded-full text-green-600">
          <CheckIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Departure Type</span>
        <span>{data.departureType}</span>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
         <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
          <FlagIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Guiding Method</span>
        <span>{data.guidingMethod}</span>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
        <div className="bg-orange-100 p-2 rounded-full text-orange-600">
          <ActivityIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Physical Level</span>
        <span className="capitalize">{data.physicalLevel}</span>
      </div>
      
       <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
        <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
          <GlobeIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Operated In</span>
        <span>{data.operatedIn}</span>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
        <div className="bg-pink-100 p-2 rounded-full text-pink-600">
          <UsersIcon className="w-5 h-5" />
        </div>
        <span className="font-semibold text-gray-900">Age Requirement</span>
        <span>{data.ageRequirement}</span>
      </div>
    </div>
  );
}
