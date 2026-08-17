import svgPaths from "./svg-ttz5k4n74x";
import { imgCalendarClock, imgGroups, imgG27 } from "./svg-1mgla";
import imgGroupImage from "./6f2aba55d4a40244fc9e8910ff07f4bd4f53f07a.png";

function CalendarClock({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="calendar_clock">
      <div className="absolute inset-[9.94%_5.45%_6.25%_14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-2.385px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="calendar_clock">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.1152" preserveAspectRatio="none" viewBox="0 0 19.1923 20.1152" width="19.1923">
          <path d={svgPaths.p7963e00} fill="#484848" id="calendar_clock" />
        </svg>
      </div>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_back">
          <mask height="24" id="mask0_0_347" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_347)">
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

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Component 6">
        <div className="absolute inset-[20.67%_11.86%_20.99%_11.86%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.847px_-4.961px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="campaign">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 18.3075 14" width="18.3075">
            <path d={svgPaths.p355d9980} fill="black" id="campaign" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">New Announcements</p>
      </div>
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Live class on Bangladesh Affairs starts tomorrow at 8 PM</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer />
    </div>
  );
}

function GroupImage() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Group Image">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="60" src={imgGroupImage} width="60" />
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">The Winner</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#eaeef6] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">BCS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Status Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="error">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="error">
          <mask height="18" id="mask0_0_388" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_0_388)">
            <path d={svgPaths.pd8591f2} fill="#484848" id="error_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GroupAdmin() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Group Admin">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Subroto Howlader</p>
      </div>
      <Error />
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <StatusContainer />
      <GroupAdmin />
    </div>
  );
}

function MembersInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] mb-0 text-[12px] tracking-[0.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          1
        </p>
        <p className="leading-[16px] text-[12px]">Rank</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron_right">
          <mask height="20" id="mask0_0_384" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_384)">
            <path d={svgPaths.p2f35a000} fill="#484848" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stat Item">
      <MembersInfo />
      <ChevronRight />
    </div>
  );
}

function MembersInfo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] mb-0 text-[12px] tracking-[0.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          103
        </p>
        <p className="leading-[16px] text-[12px]">Members</p>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron_right">
          <mask height="20" id="mask0_0_384" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_384)">
            <path d={svgPaths.p2f35a000} fill="#484848" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Stat Item">
      <MembersInfo1 />
      <ChevronRight1 />
    </div>
  );
}

function SubgroupsInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Subgroups Info">
      <div className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] mb-0 text-[12px] tracking-[0.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          13
        </p>
        <p className="leading-[16px] text-[12px]">Subgroups</p>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron_right">
          <mask height="20" id="mask0_0_384" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_384)">
            <path d={svgPaths.p2f35a000} fill="#484848" id="chevron_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stat Item">
      <SubgroupsInfo />
      <ChevronRight2 />
    </div>
  );
}

function StatsContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Stats Container">
      <StatItem />
      <StatItem1 />
      <StatItem2 />
    </div>
  );
}

function TextSectionContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Section Container">
      <TitleContainer />
      <DetailsContainer />
      <StatsContainer />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Container">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative size-full">
        <GroupImage />
        <TextSectionContainer />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="groups">
        <div className="absolute inset-[30.45%_2.08%_25.88%_2.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.5px_-7.308px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgGroups}")` }} data-name="groups">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.73396" preserveAspectRatio="none" viewBox="0 0 19.1667 8.73396" width="19.1667">
            <path d={svgPaths.p28639a00} fill="white" id="groups" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Discussion</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px overflow-clip relative rounded-[100px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function G3() {
  return (
    <div className="absolute flex inset-[0_0_0.37%_0] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.8px_-4.8px] mask-size-[33.6px_33.6px] relative size-full" style={{ maskImage: `url("${imgG27}")` }} data-name="g27">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.9267" preserveAspectRatio="none" viewBox="0 0 20 19.9267" width="20">
            <g id="g27">
              <path d={svgPaths.p24c74f00} fill="#0866FF" id="path29" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function G4() {
  return (
    <div className="absolute flex inset-[18.51%_26.8%_0_27.61%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-11.427px_-9.242px] mask-size-[33.6px_33.6px] relative size-full" style={{ maskImage: `url("${imgG27}")` }} data-name="g31">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.2981" preserveAspectRatio="none" viewBox="0 0 9.11788 16.2981" width="9.11788">
            <g id="g31">
              <path d={svgPaths.p33eaff80} fill="white" id="path33" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function G2() {
  return (
    <div className="absolute contents inset-0" style={{ containerType: "size" }} data-name="g21">
      <G3 />
      <G4 />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[-20%]" style={{ containerType: "size" }} data-name="Clip path group">
      <G2 />
    </div>
  );
}

function G1() {
  return (
    <div className="absolute contents inset-[-20%]" style={{ containerType: "size" }} data-name="g19">
      <ClipPathGroup />
    </div>
  );
}

function G() {
  return (
    <div className="absolute contents inset-[-20%]" style={{ containerType: "size" }} data-name="g17">
      <G1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="facebook">
        <G />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Facebook Group</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer1 />
      </div>
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Buttons Container">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - outline">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SaveButtonIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Save Button Icon">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] relative size-full">
          <ButtonsContainer />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <CardContainer />
      <SaveButtonIcon />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="update">
        <div className="absolute inset-[14.58%_15.42%_14.58%_14.62%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.51px_-3.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgGroups}")` }} data-name="update">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.1667" preserveAspectRatio="none" viewBox="0 0 13.9904 14.1667" width="13.9904">
            <path d={svgPaths.p267221f0} fill="#1441CC" id="update" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1441cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Activity log</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function ActivitySectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Section Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[24px]">Group activties</p>
          </div>
          <div className="h-[48px] relative shrink-0" data-name="Button - text">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content2 />
              </div>
            </div>
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
          <mask height="20" id="mask0_0_364" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_364)">
            <path d={svgPaths.p1c848e00} fill="#787878" id="chevron_forward_2" />
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

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator />
      <TrackAndStop />
    </div>
  );
}

function TodaysGoalProgressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Today’s Goal Progress Container">
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

function TodaysGoalCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Today’s Goal Card">
      <TodaysGoalHeader />
      <TodaysGoalProgressContainer />
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
          <TodaysGoalCard />
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
          <mask height="20" id="mask0_0_364" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_364)">
            <path d={svgPaths.p1c848e00} fill="#787878" id="chevron_forward_2" />
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

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator1 />
      <TrackAndStop1 />
    </div>
  );
}

function MonthlyGoalProgressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Monthly Goal Progress Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">188 / 438</p>
      </div>
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function MonthlyGoalCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Monthly Goal Card">
      <MonthlyGoalHeader />
      <MonthlyGoalProgressContainer />
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
          <MonthlyGoalCard />
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

function SectionHeaderContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Section Header Container">
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Today’s activities
      </p>
    </div>
  );
}

function Timer() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="timer">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="timer">
          <mask height="20" id="mask0_0_320" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_320)">
            <path d={svgPaths.p61c3600} fill="#484848" id="timer_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TimerContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Timer Container">
      <Timer />
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        23h 59m 24s
      </p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <SectionHeaderContainer />
          <TimerContainer />
        </div>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Card Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        ডেইলি কুইজ [১৪০ দিনের রুটিনের অংশ]
      </p>
    </div>
  );
}

function Article() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="article">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="article">
          <mask height="16" id="mask0_0_355" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_355)">
            <path d={svgPaths.p29a99300} fill="#484848" id="article_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Article />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        60 marks
      </p>
    </div>
  );
}

function Alarm() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="alarm">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="alarm">
          <mask height="16" id="mask0_0_367" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_367)">
            <path d={svgPaths.p2bd72d80} fill="#484848" id="alarm_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Alarm />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        31 mins
      </p>
    </div>
  );
}

function CardSubtitle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Subtitle">
      <SubtitleSection />
      <SubtitleSection1 />
    </div>
  );
}

function CardSubtitleContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Subtitle Container">
      <CardSubtitle />
    </div>
  );
}

function CardHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <CardTitle />
      <CardSubtitleContainer />
    </div>
  );
}

function DesignServices() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="design_services">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="design_services">
          <mask height="24" id="mask0_0_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_370)">
            <path d={svgPaths.p2385f600} fill="#1C1B1F" id="design_services_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_right">
          <mask height="24" id="mask0_0_375" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_375)">
            <path d={svgPaths.p20ba9eb0} fill="black" id="arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="bg-[#ffdbca] content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[16px] shrink-0" data-name="Action Button">
      <DesignServices />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#310] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Study materials (11)</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function PictureAsPdf() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="picture_as_pdf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="picture_as_pdf">
          <mask height="20" id="mask0_0_398" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_398)">
            <path d={svgPaths.p5f7a300} fill="black" id="picture_as_pdf_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Group">
      <PictureAsPdf />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Footer">
      <ActionButton />
      <IconGroup />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">প্র্যাকটিস কুইজ</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer3 />
      </div>
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px]">লাইভ পরীক্ষা দিন</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer4 />
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - outline">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - tonal">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card">
      <CardHeader1 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Card Content">
      <CardHeader />
      <p className="[word-break:break-word] font-['Noto_Sans:Regular','Noto_Sans_Bengali:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#484848] text-[0px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <span className="leading-[20px] text-[14px]">বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন ১টি ১৮-২০তম গ্রেডের রিয়েল জবের পরীক্ষার ...</span>
        <span className="font-['Roboto:Medium','Noto_Sans_Bengali:Regular',sans-serif] font-medium leading-[20px] text-[14px] text-black tracking-[0.25px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          See more
        </span>
      </p>
      <CardFooter />
      <Card1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f4f6fa] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[16px] px-[16px] relative size-full">
        <CardContent />
      </div>
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Status Icon">
      <div className="bg-[#f7dc6e] relative rounded-[8px] shrink-0" data-name="Status Icon Container">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#665200] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">OMR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Card Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[24px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        গত মাসের সমস্ত বিষয়বস্তু এবং পরীক্ষার প্রশ্নগুলোর উপর ভিত্তি করে একটি সারসংক্ষেপ পরীক্ষা।
      </p>
      <StatusIcon />
    </div>
  );
}

function Article1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="article">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="article">
          <mask height="16" id="mask0_0_355" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_355)">
            <path d={svgPaths.p29a99300} fill="#484848" id="article_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Article1 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        60 marks
      </p>
    </div>
  );
}

function Alarm1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="alarm">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="alarm">
          <mask height="16" id="mask0_0_367" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_367)">
            <path d={svgPaths.p2bd72d80} fill="#484848" id="alarm_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Alarm1 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        31 mins
      </p>
    </div>
  );
}

function CardSubtitle1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Subtitle">
      <SubtitleSection2 />
      <SubtitleSection3 />
    </div>
  );
}

function CardSubtitleContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Subtitle Container">
      <CardSubtitle1 />
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <CardTitle1 />
      <CardSubtitleContainer1 />
    </div>
  );
}

function DesignServices1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="design_services">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="design_services">
          <mask height="24" id="mask0_0_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_370)">
            <path d={svgPaths.p2385f600} fill="#1C1B1F" id="design_services_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_right">
          <mask height="24" id="mask0_0_375" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_375)">
            <path d={svgPaths.p20ba9eb0} fill="black" id="arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionButton1() {
  return (
    <div className="bg-[#ffdbca] content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[16px] shrink-0" data-name="Action Button">
      <DesignServices1 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#310] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Study materials (11)</p>
      </div>
      <ArrowRight1 />
    </div>
  );
}

function PictureAsPdf1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="picture_as_pdf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="picture_as_pdf">
          <mask height="20" id="mask0_0_398" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_398)">
            <path d={svgPaths.p5f7a300} fill="black" id="picture_as_pdf_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGroup1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Group">
      <PictureAsPdf1 />
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Footer">
      <ActionButton1 />
      <IconGroup1 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">প্র্যাকটিস কুইজ</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer5 />
      </div>
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px]">লাইভ পরীক্ষা দিন</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer6 />
    </div>
  );
}

function CardHeader3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - outline">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - tonal">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card">
      <CardHeader3 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Card Content">
      <CardHeader2 />
      <p className="[word-break:break-word] font-['Noto_Sans:Regular','Noto_Sans_Bengali:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#484848] text-[14px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        গত মাসের সমস্ত বিষয়বস্তু এবং পরীক্ষার প্রশ্নগুলোর উপর ভিত্তি করে একটি সারসংক্ষেপ পরীক্ষা।
      </p>
      <CardFooter1 />
      <Card3 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f4f6fa] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[16px] px-[16px] relative size-full">
        <CardContent1 />
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Card Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        সাল শেষের মূল্যায়ন [১৪০ দিনের রুটিনের অংশ]
      </p>
    </div>
  );
}

function Article2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="article">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="article">
          <mask height="16" id="mask0_0_355" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_355)">
            <path d={svgPaths.p29a99300} fill="#484848" id="article_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Article2 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        60 marks
      </p>
    </div>
  );
}

function Alarm2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="alarm">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="alarm">
          <mask height="16" id="mask0_0_367" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_367)">
            <path d={svgPaths.p2bd72d80} fill="#484848" id="alarm_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Alarm2 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        31 mins
      </p>
    </div>
  );
}

function CardSubtitle2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Subtitle">
      <SubtitleSection4 />
      <SubtitleSection5 />
    </div>
  );
}

function CardSubtitleContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Subtitle Container">
      <CardSubtitle2 />
    </div>
  );
}

function CardHeader4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <CardTitle2 />
      <CardSubtitleContainer2 />
    </div>
  );
}

function DesignServices2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="design_services">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="design_services">
          <mask height="24" id="mask0_0_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_370)">
            <path d={svgPaths.p2385f600} fill="#1C1B1F" id="design_services_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_right">
          <mask height="24" id="mask0_0_375" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_375)">
            <path d={svgPaths.p20ba9eb0} fill="black" id="arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionButton2() {
  return (
    <div className="bg-[#ffdbca] content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[16px] shrink-0" data-name="Action Button">
      <DesignServices2 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#310] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Study materials (11)</p>
      </div>
      <ArrowRight2 />
    </div>
  );
}

function PictureAsPdf2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="picture_as_pdf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="picture_as_pdf">
          <mask height="20" id="mask0_0_398" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_398)">
            <path d={svgPaths.p5f7a300} fill="black" id="picture_as_pdf_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGroup2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Group">
      <PictureAsPdf2 />
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Footer">
      <ActionButton2 />
      <IconGroup2 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px]">লাইভ পরীক্ষা দিন</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function CardHeader5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Card Header">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - tonal">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card">
      <CardHeader5 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Card Content">
      <CardHeader4 />
      <p className="[word-break:break-word] font-['Noto_Sans:Regular','Noto_Sans_Bengali:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#484848] text-[14px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        বিগত ১৪০ দিনের সমস্ত বিষয়বস্তু ও পরীক্ষার প্রশ্নের উপর একটি সমন্বিত মূল্যায়ন।
      </p>
      <CardFooter2 />
      <Card5 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#f4f6fa] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[16px] px-[16px] relative size-full">
        <CardContent2 />
      </div>
    </div>
  );
}

function StatusIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Status Icon">
      <div className="bg-[#f7dc6e] relative rounded-[8px] shrink-0" data-name="Status Icon Container">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#665200] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">OMR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Card Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium leading-[24px] min-w-px relative text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        সপ্তাহিক প্র্যাকটিস [১৪০ দিনের রুটিনের অংশ]
      </p>
      <StatusIcon1 />
    </div>
  );
}

function Article3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="article">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="article">
          <mask height="16" id="mask0_0_355" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_355)">
            <path d={svgPaths.p29a99300} fill="#484848" id="article_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Article3 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        60 marks
      </p>
    </div>
  );
}

function Alarm3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="alarm">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="alarm">
          <mask height="16" id="mask0_0_367" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_0_367)">
            <path d={svgPaths.p2bd72d80} fill="#484848" id="alarm_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SubtitleSection7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtitle Section">
      <Alarm3 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        31 mins
      </p>
    </div>
  );
}

function CardSubtitle3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Subtitle">
      <SubtitleSection6 />
      <SubtitleSection7 />
    </div>
  );
}

function CardSubtitleContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Subtitle Container">
      <CardSubtitle3 />
    </div>
  );
}

function CardHeader6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <CardTitle3 />
      <CardSubtitleContainer3 />
    </div>
  );
}

function DesignServices3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="design_services">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="design_services">
          <mask height="24" id="mask0_0_370" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_370)">
            <path d={svgPaths.p2385f600} fill="#1C1B1F" id="design_services_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_right">
          <mask height="24" id="mask0_0_375" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_375)">
            <path d={svgPaths.p20ba9eb0} fill="black" id="arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ActionButton3() {
  return (
    <div className="bg-[#ffdbca] content-stretch flex gap-[8px] items-center p-[4px] relative rounded-[16px] shrink-0" data-name="Action Button">
      <DesignServices3 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#310] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Study materials (11)</p>
      </div>
      <ArrowRight3 />
    </div>
  );
}

function PictureAsPdf3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="picture_as_pdf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="picture_as_pdf">
          <mask height="20" id="mask0_0_398" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_398)">
            <path d={svgPaths.p5f7a300} fill="black" id="picture_as_pdf_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconGroup3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon Group">
      <PictureAsPdf3 />
    </div>
  );
}

function CardFooter3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Card Footer">
      <ActionButton3 />
      <IconGroup3 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">প্র্যাকটিস কুইজ</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer8 />
      </div>
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px]">লাইভ পরীক্ষা দিন</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function CardHeader7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Card Header">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - outline">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content8 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Toggle button - tonal">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card">
      <CardHeader7 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Card Content">
      <CardHeader6 />
      <p className="[word-break:break-word] font-['Noto_Sans:Regular','Noto_Sans_Bengali:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#484848] text-[14px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        সপ্তাহের সমস্ত বিষয়বস্তু নিয়ে প্রস্তুতি এবং পরীক্ষার প্রশ্নের অনুশীলন।
      </p>
      <CardFooter3 />
      <Card7 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#f4f6fa] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[16px] px-[16px] relative size-full">
        <CardContent3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Card />
      <Card2 />
      <Card4 />
      <Card6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionHeader />
      <Frame4 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <CalendarClock className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Routine</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="archive">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="archive">
          <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
            <path d={svgPaths.p3213fd00} fill="#484848" id="archive" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Archive</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button with icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content10 />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button with icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content11 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="verified">
        <div className="absolute inset-[9.86%_8.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.96px_-2.367px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="verified">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.2665" preserveAspectRatio="none" viewBox="0 0 20.0805 19.2665" width="20.0805">
            <path d={svgPaths.p73c1d80} fill="#484848" id="verified" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Result</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer12 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="military_tech">
        <div className="absolute inset-[9.54%_29.97%_14.85%_29.97%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7.192px_-2.289px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="military_tech">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.1463" preserveAspectRatio="none" viewBox="0 0 9.6155 18.1463" width="9.6155">
            <path d={svgPaths.p111a4d00} fill="#484848" id="military_tech" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Merit List</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer13 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button with icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content12 />
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button with icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content13 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="info">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
            <path d={svgPaths.p3e27cc90} fill="#484848" id="info" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer14 />
    </div>
  );
}

function ExamHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Exam Header">
      <p className="[word-break:break-word] font-['Noto_Sans:Medium','Noto_Sans_Bengali:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        বাধ্যতামূলক পরিক্ষাসমুহ
      </p>
      <div className="relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[red] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="chip">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="white" id="Ellipse 173" r="3" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Live</p>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">ফ্রি সাপ্তাহিক মডেল টেস্ট</p>
          </div>
          <Chip />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer15 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">১৪০ দিনে ৪৭তম বিসিএস প্রস্তুতি</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer16 />
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[red] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="chip">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="white" id="Ellipse 173" r="3" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Live</p>
      </div>
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা</p>
          </div>
          <Chip1 />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer17 />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">ব্যাংক নিয়োগ প্রস্তুতি - লং কোর্স</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer18 />
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[red] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="chip">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="white" id="Ellipse 173" r="3" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Live</p>
      </div>
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">২০২২ সাল ভিত্তিক সিনিয়র অফিসার নিয়োগ প্রস্তুতি</p>
          </div>
          <Chip2 />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer19 />
    </div>
  );
}

function StateLayer20() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">ব্যাংক ডেইলি কুইজ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer20 />
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[red] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="chip">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
          <circle cx="3" cy="3" fill="white" id="Ellipse 173" r="3" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Live</p>
      </div>
    </div>
  );
}

function StateLayer21() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px] overflow-hidden text-ellipsis">ব্যাংক মডেল টেস্ট [সাপ্তাহিক]</p>
          </div>
          <Chip3 />
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer21 />
    </div>
  );
}

function ExamButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Exam Buttons">
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content15 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content16 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content17 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 1">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content18 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 2">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content19 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content20 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExamItemContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[343px]" data-name="Exam Item Container">
      <ExamButtons />
    </div>
  );
}

function ExamItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Exam Items">
      <ExamItemContainer />
    </div>
  );
}

function ExamList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Exam List">
      <ExamHeader />
      <ExamItems />
    </div>
  );
}

function MandatoryExamsCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="Mandatory Exams Card">
      <ExamList />
    </div>
  );
}

function MandatoryExamsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mandatory Exams Section">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <MandatoryExamsCard />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[88px] w-[375px]" data-name="Container">
      <div className="bg-[#ffa366] relative shrink-0 w-full" data-name="User Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <Header />
            <Body />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#78360b] text-[10px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
      <Container1 />
      <ActivitySectionContainer />
      <Container4 />
      <Frame3 />
      <MandatoryExamsSection />
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

function StateLayer22() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
        <div className="absolute inset-[20.06%_18.75%_20.01%_20.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.877px_-4.814px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="arrow_back">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.3839" preserveAspectRatio="none" viewBox="0 0 14.623 14.3839" width="14.623">
            <path d={svgPaths.p300e1440} fill="#484848" id="arrow_back" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer22 />
    </div>
  );
}

function StateLayer23() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[19.71%_43.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.5px_-4.731px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarClock}")` }} data-name="more_vert">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.5385" preserveAspectRatio="none" viewBox="0 0 3 14.5385" width="3">
            <path d={svgPaths.p2a1bd980} fill="#484848" id="more_vert" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer23 />
    </div>
  );
}

function TrailingElements() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <div className="relative shrink-0 size-[48px]" data-name="Trailing action 1">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function JobHeaderCard() {
  return (
    <div className="absolute bottom-0 h-[2611px] left-1/2 pointer-events-none top-0">
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
                    <Content22 />
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute left-[56px] right-[56px] top-1/2" data-name="Text content">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                    <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      Study Group
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

export default function MobileStudyGroupStudentOnBording() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / On bording">
      <HeaderContainer />
      <Container />
      <JobHeaderCard />
    </div>
  );
}