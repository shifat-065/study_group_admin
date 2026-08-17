import svgPaths from "./svg-npjyrr8ymv";
import { imgEmojiEvents, imgEmojiEvents1, imgSwapVert, imgCalendarMonth } from "./svg-5p890";
import imgGroupImage from "./6f2aba55d4a40244fc9e8910ff07f4bd4f53f07a.png";
type LavelProps = {
  className?: string;
  property1?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
};

function Lavel({ className, property1 = "1" }: LavelProps) {
  const is1 = property1 === "1";
  const is5Or4Or3Or2 = ["5", "4", "3", "2"].includes(property1);
  const is8Or7Or6Or5Or4Or3Or2 = ["8", "7", "6", "5", "4", "3", "2"].includes(property1);
  return (
    <div className={className || "relative size-[50px]"}>
      {is8Or7Or6Or5Or4Or3Or2 && (
        <>
          <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
            <g id="award_star">
              <mask height="50" id={is5Or4Or3Or2 ? "mask0_0_314" : "mask0_0_323"} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
                <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
              </mask>
              <g mask={is5Or4Or3Or2 ? "url(#mask0_0_314)" : "url(#mask0_0_323)"}>
                <g id="award_star_2">
                  <path clipRule="evenodd" d={svgPaths.p28c02580} fill={is5Or4Or3Or2 ? "#F7DC6E" : "#9E9E9E"} fillRule="evenodd" />
                  <path d={svgPaths.p1721c500} fill={is5Or4Or3Or2 ? "#F7DC6E" : "#9E9E9E"} />
                </g>
              </g>
            </g>
          </svg>
          <div className={`[word-break:break-word] absolute flex flex-col font-["Noto_Sans:SemiBold",sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[16px] text-center ${is5Or4Or3Or2 ? "text-[#665200]" : "text-black"}`} style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[24px]">{property1 === "2" ? "2" : property1 === "3" ? "3" : property1 === "4" ? "4" : property1 === "5" ? "5" : property1 === "6" ? "6" : property1 === "7" ? "7" : property1 === "8" ? "8" : ""}</p>
          </div>
        </>
      )}
      {is1 && (
        <>
          <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[50px_50px]" style={{ maskImage: `url("${imgEmojiEvents}")` }} data-name="emoji_events">
            <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
              <g id="emoji_events">
                <path d={svgPaths.p70aaf40} fill="#F7DC6E" />
                <path d={svgPaths.p3f25a3c0} fill="#F7DC6E" />
              </g>
            </svg>
          </div>
          <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-[0_22.22%_27.78%_22.22%] justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-11.111px_0px] mask-size-[50px_50px] text-[#665200] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100', maskImage: `url("${imgEmojiEvents}")` }}>
            <p className="leading-[24px]">1</p>
          </div>
        </>
      )}
    </div>
  );
}

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

function Frame() {
  return (
    <div className="bg-[#0c5fff] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">Open to Join</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoHeader() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Info Header">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">The Winner</p>
      </div>
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
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

function CreatedDateContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Created Date Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame1 />
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
          <mask height="18" id="mask0_0_302" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="#D9D9D9" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_0_302)">
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

function InfoDetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Info Details Container">
      <CreatedDateContainer />
      <GroupAdmin />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <InfoHeader />
      <InfoDetailsContainer />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <GroupImage />
      <InfoContainer />
    </div>
  );
}

function Achievement() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Achievement">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[40px_40px]" style={{ maskImage: `url("${imgEmojiEvents1}")` }} data-name="emoji_events">
        <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
          <g id="emoji_events">
            <path d={svgPaths.p17929100} fill="#F7DC6E" />
            <path d={svgPaths.pf931700} fill="#F7DC6E" />
          </g>
        </svg>
      </div>
      <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[0_22.22%_27.78%_22.22%] justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.889px_0px] mask-size-[40px_40px] text-[#665200] text-[16px] text-center tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100', maskImage: `url("${imgEmojiEvents1}")` }}>
        <p className="leading-[24px]">1</p>
      </div>
    </div>
  );
}

function RankContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Rank Container">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-black tracking-[0.15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        #1 of 15
      </p>
    </div>
  );
}

function GroupPointsValueContainer() {
  return (
    <div className="bg-[green] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Group Points Value Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">789.6 GP</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <RankContainer />
      <GroupPointsValueContainer />
    </div>
  );
}

function RankInfoContainer() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-name="Rank Info Container">
        <Frame20 />
      </div>
    </div>
  );
}

function AchievementContainer() {
  return (
    <div className="bg-[#f4f6fa] relative rounded-[8px] shrink-0 w-full" data-name="Achievement Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative size-full">
          <Achievement />
          <RankInfoContainer />
        </div>
      </div>
    </div>
  );
}

function TotalMembersContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Total Members Container">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        103
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#787878] text-[12px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Members
      </p>
    </div>
  );
}

function AttendanceContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px relative whitespace-nowrap" data-name="Attendance Container">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        90.5%
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#484848] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Attendance
      </p>
    </div>
  );
}

function ExamsAssignedContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Exams Assigned Container">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        66
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#787878] text-[12px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Exams
      </p>
    </div>
  );
}

function AdminRatingsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-w-px relative whitespace-nowrap" data-name="Admin Ratings Container">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        93.7%
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#787878] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Rating
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start relative shrink-0 text-center w-full">
      <TotalMembersContainer />
      <AttendanceContainer />
      <ExamsAssignedContainer />
      <AdminRatingsContainer />
    </div>
  );
}

function AdditionalInfoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Additional Info Container">
      <Frame22 />
    </div>
  );
}

function MemberInfoContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[12px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Member Info Container">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame21 />
      <AchievementContainer />
      <AdditionalInfoContainer />
    </div>
  );
}

function MemberInfo() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[375px]" data-name="Member Info">
      <MemberInfoContainer />
    </div>
  );
}

function Frame29() {
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

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">155</p>
      </div>
      <Row1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[143.5px]">
      <Row />
      <Frame27 />
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

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">1221</p>
      </div>
      <Row3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[143.5px]">
      <Row2 />
      <Frame28 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[12px] h-full items-center relative shrink-0">
        <Frame23 />
        <HorizontalFullWidth className="flex h-full items-center justify-center relative shrink-0 w-px" />
        <Frame24 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-col gap-[8px] items-start py-[12px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Content Container">
      <Frame29 />
      <CardExamGraphLast60Days />
      <Legends />
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <Frame25 />
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

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="sort">
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

function SaveButtonIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Save Button Icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[24px]">Leaderboard</p>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="Icon button - standard">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Candid</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
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

function MetadataContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame3 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer />
      <AdminContainer />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer />
      <DetailsContainer />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <Lavel className="relative shrink-0 size-[50px]" />
      <InfoContainer1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Alpha</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer1 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
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

function MetadataContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer1 />
      <AdminContainer1 />
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer1 />
      <DetailsContainer1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_314)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#F7DC6E" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#F7DC6E" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#665200] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">2</p>
        </div>
      </div>
      <InfoContainer2 />
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

function TitleContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Focused</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer2 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
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

function MetadataContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame7 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer2 />
      <AdminContainer2 />
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer2 />
      <DetailsContainer2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_314)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#F7DC6E" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#F7DC6E" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#665200] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">3</p>
        </div>
      </div>
      <InfoContainer3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function TitleContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Innovative</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer3 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
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

function MetadataContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame9 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer3 />
      <AdminContainer3 />
    </div>
  );
}

function InfoContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer3 />
      <DetailsContainer3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_314)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#F7DC6E" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#F7DC6E" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#665200] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">4</p>
        </div>
      </div>
      <InfoContainer4 />
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

function TitleContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Collaborative</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer4 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
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

function MetadataContainer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame11 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer4 />
      <AdminContainer4 />
    </div>
  );
}

function InfoContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer4 />
      <DetailsContainer4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_314" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_314)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#F7DC6E" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#F7DC6E" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#665200] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">5</p>
        </div>
      </div>
      <InfoContainer5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function TitleContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Dynamic</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer5 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
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

function MetadataContainer5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame13 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer5 />
      <AdminContainer5 />
    </div>
  );
}

function InfoContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer5 />
      <DetailsContainer5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_327" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_327)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#B4B2A9" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#B4B2A9" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#2c2c2a] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">6</p>
        </div>
      </div>
      <InfoContainer6 />
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

function TitleContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Static</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer6 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
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

function MetadataContainer6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame15 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer6 />
      <AdminContainer6 />
    </div>
  );
}

function InfoContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer6 />
      <DetailsContainer6 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_327" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_327)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#B4B2A9" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#B4B2A9" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#2c2c2a] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">7</p>
        </div>
      </div>
      <InfoContainer7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function TitleContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Interactive</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#b7dfb9] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#264a34] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">654.2 GP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Container">
      <TitleContainer7 />
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
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

function MetadataContainer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Metadata Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame17 />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Created: 1 Jul 2026</p>
      </div>
    </div>
  );
}

function AdminContainer7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Admin Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mehedi Shammi</p>
      </div>
    </div>
  );
}

function DetailsContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Details Container">
      <MetadataContainer7 />
      <AdminContainer7 />
    </div>
  );
}

function InfoContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Info Container">
      <HeaderContainer7 />
      <DetailsContainer7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[50px]" data-name="lavel">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <g id="award_star">
            <mask height="50" id="mask0_0_327" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="50" x="0" y="0">
              <rect fill="#D9D9D9" height="50" id="Bounding box" width="50" />
            </mask>
            <g mask="url(#mask0_0_327)">
              <g id="award_star_2">
                <path clipRule="evenodd" d={svgPaths.p28c02580} fill="#B4B2A9" fillRule="evenodd" />
                <path d={svgPaths.p1721c500} fill="#B4B2A9" />
              </g>
            </g>
          </g>
        </svg>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[#2c2c2a] text-[16px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[24px]">8</p>
        </div>
      </div>
      <InfoContainer8 />
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

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container1 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container3 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div aria-hidden className="absolute border border-[#1441cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container5 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container7 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container9 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container11 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container13 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame18 />
    </div>
  );
}

function CardContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Card Container">
      <SaveButtonIcon />
      <Frame19 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-0 top-[104px] w-[375px]" data-name="Container">
      <MemberInfo />
      <GraphContainer />
      <CardContainer />
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

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">July</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Trailing icon">
        <div className="absolute inset-[9.94%_14.58%_10.42%_14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-2.385px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCalendarMonth}")` }} data-name="calendar_month">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.3364" preserveAspectRatio="none" viewBox="0 0 12.75 14.3364" width="12.75">
            <path d={svgPaths.p19f86400} fill="#484848" id="calendar_month" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TrailingElements() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <div className="relative rounded-[8px] shrink-0" data-name="Trailing action 1">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer2 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
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
                  <Content1 />
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute left-[56px] right-[56px] top-1/2" data-name="Text content">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    Group Rank
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

export default function MobileStudyGroupStudentGroupRank() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Group rank">
      <Container />
      <JobHeaderCard />
    </div>
  );
}