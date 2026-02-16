"use client";

import { useGsapScroll } from "@/hooks/useGsapScroll";
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

const infoItems = [
  { key: "duration", label: "Duration", Icon: ClockIcon, bgClass: "bg-purple-50", iconBg: "bg-purple-100", textClass: "text-[#854EC9]" },
  { key: "maxGroupSize", label: "Max Group Size", Icon: UsersIcon, bgClass: "bg-blue-50", iconBg: "bg-blue-100", textClass: "text-blue-600" },
  { key: "departureType", label: "Departure Type", Icon: CheckIcon, bgClass: "bg-green-50", iconBg: "bg-green-100", textClass: "text-green-600" },
  { key: "physicalLevel", label: "Physical Level", Icon: ActivityIcon, bgClass: "bg-orange-50", iconBg: "bg-orange-100", textClass: "text-orange-600" },
  { key: "operatedIn", label: "Operated In", Icon: GlobeIcon, bgClass: "bg-indigo-50", iconBg: "bg-indigo-100", textClass: "text-indigo-600" },
  { key: "ageRequirement", label: "Age Req.", Icon: UsersIcon, bgClass: "bg-pink-50", iconBg: "bg-pink-100", textClass: "text-pink-600" },
];

export default function TourQuickInfo({ data }: { data: QuickInfoProps }) {
  const ref = useGsapScroll({ type: "stagger", staggerSelector: ":scope > div", staggerDelay: 0.08 });

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-8 mt-6 grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-5 text-sm text-gray-600"
    >
      {infoItems.map((item) => {
        const value = data[item.key as keyof QuickInfoProps];
        return (
          <div
            key={item.key}
            className="flex flex-col items-center text-center space-y-2 rounded-xl p-3 transition-all duration-300 hover:shadow-md cursor-default group"
          >
            <div className={`${item.iconBg} p-3 rounded-xl ${item.textClass} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md`}>
              <item.Icon className="w-5 h-5" />
            </div>
            <span className="font-bold text-gray-900 text-xs uppercase tracking-wide">{item.label}</span>
            <span className={`${item.key === "physicalLevel" ? "capitalize" : ""} font-medium text-gray-600 text-sm`}>{value}</span>
          </div>
        );
      })}
    </div>
  );
}
