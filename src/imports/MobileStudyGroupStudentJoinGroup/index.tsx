import svgPaths from "./svg-dvkzowjxk8";
import imgGroupImage from "./6f2aba55d4a40244fc9e8910ff07f4bd4f53f07a.png";
import { imgPersonAdd, imgInfo } from "./svg-1b79l";

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

function GroupImage() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Group Image">
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="60" src={imgGroupImage} width="60" />
    </div>
  );
}

function GroupName() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0 w-full" data-name="Group Name">
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

function GroupInfoMeta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Group Info Meta">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Feb 2026</p>
      </div>
    </div>
  );
}

function Error() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="error">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="error">
          <mask height="18" id="mask0_0_210" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_0_210)">
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

function GroupMeta() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Group Meta">
      <GroupInfoMeta />
      <GroupAdmin />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px] mb-0 text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          103
        </p>
        <p className="leading-[16px] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          Members
        </p>
      </div>
    </div>
  );
}

function MemberStats() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Member Stats">
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px] mb-0 text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          13
        </p>
        <p className="leading-[16px] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          Subgroups
        </p>
      </div>
    </div>
  );
}

function SubgroupStats() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Subgroup Stats">
      <Text1 />
    </div>
  );
}

function GroupSummary() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Group Summary">
      <div className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px] mb-0 text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          1
        </p>
        <p className="leading-[16px] text-[#484848] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          Rank
        </p>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        •
      </p>
      <MemberStats />
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        •
      </p>
      <SubgroupStats />
    </div>
  );
}

function GroupDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Group Details">
      <GroupName />
      <GroupMeta />
      <GroupSummary />
    </div>
  );
}

function GroupHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Group Header">
      <div className="content-stretch flex gap-[12px] items-start px-[16px] relative size-full">
        <GroupImage />
        <GroupDetails />
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="add">
        <div className="absolute inset-[19.55%_5.73%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgPersonAdd}")` }} data-name="person_add">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.1796" preserveAspectRatio="none" viewBox="0 0 17.6042 12.1796" width="17.6042">
            <path d={svgPaths.p38b19380} fill="white" id="person_add" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Join Group</p>
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

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="error">
        <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgPersonAdd}")` }} data-name="error">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.8333" preserveAspectRatio="none" viewBox="0 0 15.8333 15.8333" width="15.8333">
            <path d={svgPaths.pf741880} fill="#484848" id="error" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">গ্রুপের নিয়মাবলী</p>
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

function JoinGroupButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Join Group Button">
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button - outline">
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
          <JoinGroupButton />
        </div>
      </div>
    </div>
  );
}

function GroupInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Group Info">
      <GroupHeader />
      <SaveButtonIcon />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">% of goal reached, by month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MonthsContainer() {
  return (
    <div className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[16px] relative shrink-0 text-[#484848] text-[10px] text-center w-full" data-name="Months Container">
      <p className="col-1 justify-self-stretch leading-[0] relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <span className="leading-[16px] text-black">12/</span>
        <span className="leading-[16px]">20</span>
      </p>
      <p className="col-2 justify-self-stretch leading-[0] relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <span className="leading-[16px] text-black">4/</span>
        <span className="leading-[16px]">16</span>
      </p>
      <p className="col-3 justify-self-stretch leading-[0] relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <span className="leading-[16px] text-black">13/</span>
        <span className="leading-[16px]">22</span>
      </p>
      <p className="col-4 justify-self-stretch leading-[0] relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <span className="leading-[16px] text-black">28/</span>
        <span className="leading-[16px]">31</span>
      </p>
      <p className="col-5 justify-self-stretch leading-[0] relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <span className="leading-[16px] text-black">6/</span>
        <span className="leading-[16px]">15</span>
      </p>
      <p className="col-6 justify-self-stretch leading-[16px] relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        22/40
      </p>
    </div>
  );
}

function BarsContainer() {
  return (
    <div className="gap-x-[4px] grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[131px] relative shrink-0 w-full" data-name="Bars Container">
      <div className="bg-[#eaeef6] col-2 h-[131px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-1 self-start shrink-0" data-name="Bar" />
      <div className="bg-[#eaeef6] col-3 h-[131px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-1 self-start shrink-0" data-name="Bar" />
      <div className="bg-[#eaeef6] col-4 h-[131px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-1 self-start shrink-0" data-name="Bar" />
      <div className="bg-[#eaeef6] col-5 h-[131px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-1 self-start shrink-0" data-name="Bar" />
      <div className="bg-[#eaeef6] col-6 h-[131px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-1 self-start shrink-0" data-name="Bar" />
      <div className="bg-[red] col-2 h-[22px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-2 self-end shrink-0" data-name="Bar" />
      <div className="bg-[#eed202] col-5 h-[51px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-2 self-end shrink-0" data-name="Bar" />
      <div className="bg-[#eed202] col-6 h-[79px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-2 self-end shrink-0" data-name="Bar" />
      <div className="bg-[#eed202] col-3 justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-2 self-stretch shrink-0" data-name="Bar" />
      <div className="bg-[green] col-4 h-[121px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-2 self-end shrink-0" data-name="Bar" />
      <div className="bg-[#eaeef6] col-1 h-[131px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-1 self-start shrink-0" data-name="Bar" />
      <div className="bg-[green] col-1 h-[110px] justify-self-stretch relative rounded-tl-[8px] rounded-tr-[8px] row-2 self-end shrink-0" data-name="Bar" />
    </div>
  );
}

function MonthsContainer1() {
  return (
    <div className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[16px] leading-[16px] relative shrink-0 text-[#484848] text-[10px] text-center w-full" data-name="Months Container">
      <p className="col-1 justify-self-stretch relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Jan
      </p>
      <p className="col-2 justify-self-stretch relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Feb
      </p>
      <p className="col-3 justify-self-stretch relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Mar
      </p>
      <p className="col-4 justify-self-stretch relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Apr
      </p>
      <p className="col-5 justify-self-stretch relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        May
      </p>
      <p className="col-6 justify-self-stretch relative row-1 self-start shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Jun
      </p>
    </div>
  );
}

function Graph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Graph">
      <MonthsContainer />
      <BarsContainer />
      <MonthsContainer1 />
    </div>
  );
}

function Graph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Graph">
      <Graph2 />
    </div>
  );
}

function Graph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Graph">
      <Graph1 />
    </div>
  );
}

function CardExamGraphLast60Days() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="card/exam_graph/last_60_days">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Graph />
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <div className="bg-[green] relative rounded-[4px] shrink-0 size-[10px]" />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>{`>=75%`}</p>
    </div>
  );
}

function LineLegends() {
  return (
    <div className="content-center flex flex-wrap items-center justify-center overflow-clip relative shrink-0" data-name="LineLegends">
      <Legend />
    </div>
  );
}

function Legend1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <div className="bg-[#eed202] relative rounded-[4px] shrink-0 size-[10px]" />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        40-74%
      </p>
    </div>
  );
}

function LineLegends1() {
  return (
    <div className="content-center flex flex-wrap items-center justify-center overflow-clip relative shrink-0" data-name="LineLegends">
      <Legend1 />
    </div>
  );
}

function Legend2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative shrink-0" data-name="Legend">
      <div className="bg-[red] relative rounded-[4px] shrink-0 size-[10px]" />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>{`<40%`}</p>
    </div>
  );
}

function LineLegends2() {
  return (
    <div className="content-center flex flex-wrap items-center justify-center overflow-clip relative shrink-0" data-name="LineLegends">
      <Legend2 />
    </div>
  );
}

function Legends() {
  return (
    <div className="relative shrink-0 w-full" data-name="Legends">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-start flex flex-wrap gap-[0px_8px] items-start px-[12px] relative size-full">
          <LineLegends />
          <LineLegends1 />
          <LineLegends2 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Total exams</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <Column />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">75.5% avg. attendance</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <Column1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">155</p>
      </div>
      <Row1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[143.5px]">
      <Row />
      <Frame5 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Monthly goal</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <Column2 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">75.5% achievement ratio</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
      <Column3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">1221</p>
      </div>
      <Row3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[143.5px]">
      <Row2 />
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0">
        <Frame1 />
        <HorizontalFullWidth className="flex h-full items-center justify-center relative shrink-0 w-px" />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-col gap-[8px] items-start py-[12px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Content Container">
      <Frame7 />
      <CardExamGraphLast60Days />
      <Legends />
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <Frame3 />
    </div>
  );
}

function GraphContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-x-auto overflow-y-clip px-[16px] relative shrink-0 w-[375px]" data-name="Graph Container">
      <ContentContainer />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgInfo}")` }} data-name="info">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
            <path d={svgPaths.p3e27cc90} fill="#484848" id="info" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
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
            <Content2 />
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

function StateLayer3() {
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

function Content3() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
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

function Content4() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer4 />
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

function StateLayer5() {
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

function Content5() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer5 />
    </div>
  );
}

function StateLayer6() {
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

function Content6() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer6 />
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

function StateLayer7() {
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

function Content7() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
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

function Content8() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer8 />
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

function StateLayer9() {
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

function Content9() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer9 />
    </div>
  );
}

function ExamButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Exam Buttons">
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 1">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 2">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content7 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 3">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content8 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-full" data-name="Button 4">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Content9 />
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

function MandatoryExamsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mandatory Exams Section">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <ExamList />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[104px] w-[375px]" data-name="Container">
      <GroupInfo />
      <GraphContainer />
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

function StateLayer10() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
        <div className="absolute inset-[20.06%_18.75%_20.01%_20.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.877px_-4.814px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgInfo}")` }} data-name="arrow_back">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.3839" preserveAspectRatio="none" viewBox="0 0 14.623 14.3839" width="14.623">
            <path d={svgPaths.p300e1440} fill="#484848" id="arrow_back" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer10 />
    </div>
  );
}

function TrailingElements() {
  return <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 size-[48px]" data-name="Trailing elements" />;
}

function JobHeaderCard() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[375px]" data-name="Job header card">
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
                  <Content10 />
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
  );
}

export default function MobileStudyGroupStudentJoinGroup() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Join Group">
      <Container />
      <JobHeaderCard />
    </div>
  );
}