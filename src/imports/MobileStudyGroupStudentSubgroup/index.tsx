import imgProperty1Ellipse112 from "./a68e0a32978f88c65caa2aea22892b339fe53573.png";
import imgProperty1Ellipse117 from "./b759178af7543422272281b77c85c81861c56942.png";
import imgProperty1Ellipse116 from "./11b954048b5dc7432eb87232e5dd2733075dc342.png";
import imgProperty1Ellipse113 from "./81aae6c1266594d2676a8d3ec929a471cf60420b.png";
import imgProperty1Ellipse114 from "./c08d867c923e3a0ba6df2762252945ba80af95ca.png";
import svgPaths from "./svg-346517hzha";
import { imgSwapVert } from "./svg-hxczt";

function HorizontalFullWidth({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[320px]"} data-name="Horizontal/Full-width">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 320 1" width="320">
                <line id="Divider" stroke="#C7C5CE" x2="320" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  property1?: "Ellipse 112" | "Ellipse 114" | "Ellipse 115" | "Ellipse 116" | "Ellipse 117";
};

function Component({ className, property1 = "Ellipse 114" }: ComponentProps) {
  return (
    <div className={className || "relative size-[30px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={property1 === "Ellipse 114" ? imgProperty1Ellipse114 : property1 === "Ellipse 112" ? imgProperty1Ellipse113 : property1 === "Ellipse 116" ? imgProperty1Ellipse116 : property1 === "Ellipse 117" ? imgProperty1Ellipse117 : imgProperty1Ellipse112} width="30" />
    </div>
  );
}
type SubGroupNameProps = {
  className?: string;
  property1?: "A";
  property2?: "Sub_Group";
};

function SubGroupName({ className, property1 = "A", property2 = "Sub_Group" }: SubGroupNameProps) {
  return (
    <div className={className || "relative size-[40px]"}>
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <circle cx="20" cy="20" fill="#E6E6E6" id="Ellipse 113" r="20" />
      </svg>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[17.19%_17.19%_23.44%_17.19%] justify-center leading-[0] text-[#1d1b20] text-[22px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[1.5]">A</p>
      </div>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_back">
          <mask height="24" id="mask0_0_260" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_260)">
            <path d={svgPaths.p3166edc0} fill="white" id="arrow_back_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderDetails() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[182px]" data-name="Header Details">
      <ArrowBack />
      <p className="[word-break:break-word] font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Study group
      </p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-[16px] pt-[8px] right-[16px] top-[42px]" data-name="Header Container">
      <HeaderDetails />
    </div>
  );
}

function Error() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="error">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="error">
          <mask height="22" id="mask0_0_270" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" x="0" y="0">
            <rect fill="#D9D9D9" height="22" id="Bounding box" width="22" />
          </mask>
          <g mask="url(#mask0_0_270)">
            <path d={svgPaths.p3fdad500} fill="#484848" id="error_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UserInfoTitleContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="User Info Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">{`Captain: Atiqul Haque `}</p>
      </div>
      <Error />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">60.0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserStatsTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="User Stats Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">120 members</p>
      </div>
    </div>
  );
}

function StatTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Stat Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">100 attended</p>
      </div>
    </div>
  );
}

function UserStatsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="User Stats Container">
      <UserStatsTextContainer />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">•</p>
      </div>
      <StatTextContainer />
    </div>
  );
}

function UserInfoSubtitleTextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="User Info Subtitle Text Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 2">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame />
          </div>
        </div>
      </div>
      <UserStatsContainer />
    </div>
  );
}

function UserInfoSubtitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="User Info Subtitle Container">
      <UserInfoSubtitleTextContainer />
    </div>
  );
}

function UserInfoTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="User Info Text Container">
      <UserInfoTitleContainer />
      <UserInfoSubtitleContainer />
    </div>
  );
}

function UserDetailsContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="User Details Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] relative size-full">
          <SubGroupName className="relative shrink-0 size-[60px]" />
          <UserInfoTextContainer />
        </div>
      </div>
    </div>
  );
}

function UserInfoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="User Info Container">
      <UserDetailsContainer />
    </div>
  );
}

function ActivitySectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Section Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[14px] text-black tracking-[0.1px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px]">Subgroup activities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodaysGoalTitleContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Today’s Goal Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Today’s Goal</p>
      </div>
    </div>
  );
}

function ChevronForward() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron_forward">
          <mask height="20" id="mask0_0_265" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_265)">
            <path d={svgPaths.p1c848e00} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TodaysGoalHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Today’s Goal Header">
      <TodaysGoalTitleContainer />
      <ChevronForward />
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute content-stretch flex inset-[0_50.74%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#1441CC" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5.71%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 39 4" width="39">
              <path d="M2 2H10.75H28.25H37" id="wave-increment" stroke="#1441CC" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_49.26%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#d6e4ff] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[-0.03px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#1441cc] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator />
      <TrackAndStop />
    </div>
  );
}

function TodaysGoalProgressContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Today’s Goal Progress Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">188 / 438</p>
      </div>
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TodaysAttendanceTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Today’s Attendance Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Today’s Attendance</p>
      </div>
    </div>
  );
}

function TodaysAttendanceHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Today’s Attendance Header">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">50%</p>
      </div>
    </div>
  );
}

function TodaysAttendanceFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Today’s Attendance Footer">
      <TodaysAttendanceTextContainer />
      <TodaysAttendanceHeader />
    </div>
  );
}

function CircularCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Circular Card">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[8px] relative size-full">
          <TodaysGoalHeader />
          <TodaysGoalProgressContainer />
          <TodaysAttendanceFooter />
        </div>
      </div>
    </div>
  );
}

function MonthlyGoalTitleContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Monthly Goal Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Monthly Goal</p>
      </div>
    </div>
  );
}

function ChevronForward1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron_forward">
          <mask height="20" id="mask0_0_265" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_265)">
            <path d={svgPaths.p1c848e00} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MonthlyGoalHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Monthly Goal Header">
      <MonthlyGoalTitleContainer />
      <ChevronForward1 />
    </div>
  );
}

function ActiveIndicator1() {
  return (
    <div className="absolute content-stretch flex inset-[0_50.74%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#1441CC" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5.71%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 39 4" width="39">
              <path d="M2 2H10.75H28.25H37" id="wave-increment" stroke="#1441CC" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_49.26%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#d6e4ff] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[-0.03px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#1441cc] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator1 />
      <TrackAndStop1 />
    </div>
  );
}

function MonthlyGoalProgressContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Monthly Goal Progress Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">188 / 438</p>
      </div>
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TodaysAttendanceTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Today’s Attendance Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Monthly Attendance</p>
      </div>
    </div>
  );
}

function TodaysAttendanceHeader1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="Today’s Attendance Header">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">50%</p>
      </div>
    </div>
  );
}

function TodaysAttendanceFooter1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Today’s Attendance Footer">
      <TodaysAttendanceTextContainer1 />
      <TodaysAttendanceHeader1 />
    </div>
  );
}

function CircularCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Circular Card">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center p-[8px] relative size-full">
          <MonthlyGoalHeader />
          <MonthlyGoalProgressContainer />
          <TodaysAttendanceFooter1 />
        </div>
      </div>
    </div>
  );
}

function TodaysGoalCardContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-x-auto overflow-y-clip px-[16px] relative shrink-0 w-[375px]" data-name="Today’s Goal Card Container">
      <CircularCard />
      <CircularCard1 />
    </div>
  );
}

function ActivityCardsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="Activity Cards Container">
      <TodaysGoalCardContainer />
    </div>
  );
}

function ActivitySectionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Activity Section Container">
      <ActivitySectionHeader />
      <ActivityCardsContainer />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[12.01%_20.1%_12.01%_20.06%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.814px_-2.882px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgSwapVert}")` }} data-name="swap_vert">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.2365" preserveAspectRatio="none" viewBox="0 0 14.3615 18.2365" width="14.3615">
            <path d={svgPaths.p39d90700} fill="#484848" id="swap_vert" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function AttendanceActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Attendance Actions">
      <div className="relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

function AttendanceHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Attendance Header">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Subgroup members</p>
      </div>
      <AttendanceActions />
    </div>
  );
}

function SaveButtonIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Save Button Icon">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[16px] relative size-full">
          <AttendanceHeader />
        </div>
      </div>
    </div>
  );
}

function MemberListHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Member List Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[16px] px-[16px] relative size-full text-[#787878] text-[12px] whitespace-nowrap">
          <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Member
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Attendance
          </p>
        </div>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <Component className="relative shrink-0 size-[30px]" property1="Ellipse 112" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">{`Atiqul Haque `}</p>
      </div>
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#b7dfb9] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer />
      <PercentageContainer />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo />
      <ScoreInfo />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function UserInfo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse112} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">Shajenur khatun</p>
      </div>
    </div>
  );
}

function RatingContainer1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#b7dfb9] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer1 />
      <PercentageContainer1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo1 />
      <ScoreInfo1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function UserInfo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse114} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">Anik Mahmud</p>
      </div>
    </div>
  );
}

function RatingContainer2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#fff5f5] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff3232] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">29.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer2 />
      <PercentageContainer2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo2 />
      <ScoreInfo2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function UserInfo3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse116} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">{`🙉🙊🙈মেহেজাবীন নুসরাত স্মৃতি✨💝🎉 `}</p>
      </div>
    </div>
  );
}

function RatingContainer3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#b7dfb9] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer3 />
      <PercentageContainer3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo3 />
      <ScoreInfo3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
    </div>
  );
}

function UserInfo4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse117} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">{`অর্থহীন জীবন `}</p>
      </div>
    </div>
  );
}

function RatingContainer4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#fef9e7] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#784a00] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer4 />
      <PercentageContainer4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo4 />
      <ScoreInfo4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
    </div>
  );
}

function UserInfo5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse112} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">{`⭕️ Shuraiya Ripa `}</p>
      </div>
    </div>
  );
}

function RatingContainer5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer5() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#b7dfb9] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer5 />
      <PercentageContainer5 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo5 />
      <ScoreInfo5 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function UserInfo6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse117} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">Hridoy Hasan</p>
      </div>
    </div>
  );
}

function RatingContainer6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer6() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#b7dfb9] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer6 />
      <PercentageContainer6 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo6 />
      <ScoreInfo6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
    </div>
  );
}

function UserInfo7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[226px]" data-name="User Info">
      <div className="relative shrink-0 size-[30px]" data-name="Component 3">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="30" src={imgProperty1Ellipse112} width="30" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">©️Chonchol Ray ©️©️©️©️</p>
      </div>
    </div>
  );
}

function RatingContainer7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Rating Container">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" id="Ellipse 113" r="9.5" stroke="#484848" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] col-1 font-['Noto_Sans:Medium',sans-serif] font-medium h-[10.833px] leading-[1.5] ml-[3.33px] mt-[4.17px] relative row-1 text-[#484848] text-[14px] text-center w-[13.333px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        B
      </p>
    </div>
  );
}

function PercentageContainer7() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#b7dfb9] h-full relative rounded-[16px] shrink-0" data-name="Percentage Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">88.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreInfo7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Score Info">
      <RatingContainer7 />
      <PercentageContainer7 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo7 />
      <ScoreInfo7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
    </div>
  );
}

function MemberRows() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Member Rows">
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container3 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container7 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container11 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container15 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container19 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container23 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container27 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container31 />
          </div>
        </div>
      </div>
    </div>
  );
}

function MemberRowsContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Member Rows Container">
      <MemberRows />
    </div>
  );
}

function MemberList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Member List">
      <MemberListHeader />
      <MemberRowsContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SaveButtonIcon />
      <MemberList />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[104px] w-[375px]" data-name="Container">
      <UserInfoContainer />
      <ActivitySectionContainer />
      <Frame1 />
    </div>
  );
}

function TimeDate() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[128px]" data-name="Time & Date">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.25px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">9:30</p>
      </div>
    </div>
  );
}

function WiFiNetwork() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Wi-Fi Network">
      <div className="mr-[-2px] overflow-clip relative shrink-0 size-[16px]" data-name="Wifi">
        <div className="absolute inset-[18.5%_4.17%_16.67%_4.17%]" data-name="signal">
          <svg className="absolute block inset-0 size-full" fill="none" height="10.3733" preserveAspectRatio="none" viewBox="0 0 14.6667 10.3733" width="14.6667">
            <path d={svgPaths.p1317cc30} fill="black" id="signal" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Signal">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path d={svgPaths.p3e2b7700} fill="black" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="content-stretch flex gap-[2px] h-[52px] items-center relative shrink-0" data-name="Battery">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Battery">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.167px] left-1/2 top-1/2 w-[8.5px]" data-name="Base">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.1667" preserveAspectRatio="none" viewBox="0 0 8.5 14.1667" width="8.5">
            <path d={svgPaths.p1989c900} fill="black" id="Base" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Status Icons">
      <WiFiNetwork />
      <Battery />
    </div>
  );
}

function Camera() {
  return (
    <div className="-translate-x-1/2 absolute left-1/2 size-[24px] top-[8px]" data-name="Camera">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#2e2e2e] left-1/2 rounded-[100px] size-[24px] top-1/2" data-name="Camera" />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
        <div className="absolute inset-[20.06%_18.75%_20.01%_20.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.877px_-4.814px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgSwapVert}")` }} data-name="arrow_back">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.3839" preserveAspectRatio="none" viewBox="0 0 14.623 14.3839" width="14.623">
            <path d={svgPaths.p300e1440} fill="#484848" id="arrow_back" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function TrailingElements() {
  return <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[48px]" data-name="Trailing elements" />;
}

function JobHeaderCard() {
  return (
    <div className="absolute bottom-0 h-[1075px] left-1/2 pointer-events-none top-0">
      <div className="-translate-x-1/2 content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[375px]" data-name="Job header card">
        <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="Status">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
              <TimeDate />
              <StatusIcons />
              <Camera />
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="App bar">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
              <div className="relative shrink-0 size-[48px]" data-name="Leading icon">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <Content1 />
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute left-[56px] right-[56px] top-1/2" data-name="Text content">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                    <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      Subgroup
                    </p>
                  </div>
                </div>
              </div>
              <TrailingElements />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileStudyGroupStudentSubgroup() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Subgroup">
      <HeaderContainer />
      <Container />
      <JobHeaderCard />
    </div>
  );
}