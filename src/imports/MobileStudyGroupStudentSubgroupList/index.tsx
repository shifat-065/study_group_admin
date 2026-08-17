import svgPaths from "./svg-s537fgytb1";
import { imgArrowBack } from "./svg-kk70k";
type SubGroupNameProps = {
  className?: string;
  property1?: "A" | "B" | "C" | "D" | "E";
  property2?: "Sub_Group";
};

function SubGroupName({ className, property1 = "A", property2 = "Sub_Group" }: SubGroupNameProps) {
  return (
    <div className={className || "relative size-[40px]"}>
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <circle cx="20" cy="20" fill="#E6E6E6" id="Ellipse 113" r="20" />
      </svg>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[17.19%_17.19%_23.44%_17.19%] justify-center leading-[0] text-[#1d1b20] text-[22px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[1.5]">{property1 === "E" && property2 === "Sub_Group" ? "E" : property1 === "D" && property2 === "Sub_Group" ? "D" : property1 === "C" && property2 === "Sub_Group" ? "C" : property1 === "B" && property2 === "Sub_Group" ? "B" : "A"}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">My subgroup</p>
      </div>
    </div>
  );
}

function ChevronForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron_forward">
          <mask height="24" id="mask0_0_287" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_287)">
            <path d={svgPaths.p3ecf1680} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CaptainInfoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Captain Info Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="overflow-hidden text-ellipsis">
          <span className="leading-[24px]">{`Captain: `}</span>
          <span className="leading-[24px]">{`Atiqul Haque `}</span>
        </p>
      </div>
      <ChevronForward />
    </div>
  );
}

function MembersInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">103 members</p>
      </div>
    </div>
  );
}

function AttendeesInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Attendees Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">200 attended</p>
      </div>
    </div>
  );
}

function MemberContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Member Container">
      <MembersInfo />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">•</p>
      </div>
      <AttendeesInfo />
    </div>
  );
}

function InfoContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Info Container">
      <CaptainInfoContainer />
      <MemberContainer />
    </div>
  );
}

function ProfileContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Profile Container">
      <SubGroupName className="relative shrink-0 size-[50px]" />
      <InfoContainer />
    </div>
  );
}

function ProfileInfo1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Profile Info">
      <ProfileContainer />
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Profile Info">
      <ProfileInfo1 />
    </div>
  );
}

function GoalInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Goal Info">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Today’s goal
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        60.0%
      </p>
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute content-stretch flex inset-[0_21.18%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#264A34" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-0.95%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 215 4" width="215">
              <path d="M2 2H54.75H160.25H213" id="wave-increment" stroke="#264A34" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_78.82%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#b7dfb9] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[0.15px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#264a34] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
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

function GoalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Goal Container">
      <GoalInfo />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-full" data-name="User Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative size-full">
            <ProfileInfo />
            <GoalContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Other subgroups</p>
      </div>
    </div>
  );
}

function ChevronForward1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron_forward">
          <mask height="24" id="mask0_0_287" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_287)">
            <path d={svgPaths.p3ecf1680} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CaptainInfoContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Captain Info Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="overflow-hidden text-ellipsis">
          <span className="leading-[24px]">{`Captain: `}</span>
          <span className="leading-[24px]">Shajenur khatun</span>
        </p>
      </div>
      <ChevronForward1 />
    </div>
  );
}

function MembersInfo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">103 members</p>
      </div>
    </div>
  );
}

function AttendeesInfo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Attendees Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">200 attended</p>
      </div>
    </div>
  );
}

function MemberContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Member Container">
      <MembersInfo1 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">•</p>
      </div>
      <AttendeesInfo1 />
    </div>
  );
}

function InfoContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Info Container">
      <CaptainInfoContainer1 />
      <MemberContainer1 />
    </div>
  );
}

function ProfileContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Profile Container">
      <div className="relative shrink-0 size-[50px]" data-name="Sub Group Name">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <circle cx="25" cy="25" fill="#E6E6E6" id="Ellipse 113" r="25" />
        </svg>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[17.19%_17.19%_23.44%_17.19%] justify-center leading-[0] text-[#1d1b20] text-[22px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[1.5]">B</p>
        </div>
      </div>
      <InfoContainer1 />
    </div>
  );
}

function ProfileInfo3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Profile Info">
      <ProfileContainer1 />
    </div>
  );
}

function ProfileInfo2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Profile Info">
      <ProfileInfo3 />
    </div>
  );
}

function GoalInfo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Goal Info">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Today’s goal
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        50.5%
      </p>
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
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#665200" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-1.71%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 121 4" width="121">
              <path d="M2 2H31.25H89.75H119" id="wave-increment" stroke="#665200" strokeLinecap="round" strokeWidth="4" />
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
        <div className="-translate-y-1/2 absolute bg-[#f7dc6e] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[-0.03px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#665200] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
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

function GoalContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Goal Container">
      <GoalInfo1 />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ChevronForward2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron_forward">
          <mask height="24" id="mask0_0_287" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_287)">
            <path d={svgPaths.p3ecf1680} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CaptainInfoContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Captain Info Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">Captain: Anik Mahmud</p>
      </div>
      <ChevronForward2 />
    </div>
  );
}

function MembersInfo2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">103 members</p>
      </div>
    </div>
  );
}

function AttendeesInfo2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Attendees Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">200 attended</p>
      </div>
    </div>
  );
}

function MemberContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Member Container">
      <MembersInfo2 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">•</p>
      </div>
      <AttendeesInfo2 />
    </div>
  );
}

function InfoContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Info Container">
      <CaptainInfoContainer2 />
      <MemberContainer2 />
    </div>
  );
}

function ProfileContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Profile Container">
      <div className="relative shrink-0 size-[50px]" data-name="Sub Group Name">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <circle cx="25" cy="25" fill="#E6E6E6" id="Ellipse 113" r="25" />
        </svg>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[17.19%_17.19%_23.44%_17.19%] justify-center leading-[0] text-[#1d1b20] text-[22px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[1.5]">C</p>
        </div>
      </div>
      <InfoContainer2 />
    </div>
  );
}

function ProfileInfo5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Profile Info">
      <ProfileContainer2 />
    </div>
  );
}

function ProfileInfo4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Profile Info">
      <ProfileInfo5 />
    </div>
  );
}

function GoalInfo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Goal Info">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Today’s goal
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        20.0%
      </p>
    </div>
  );
}

function ActiveIndicator2() {
  return (
    <div className="absolute content-stretch flex inset-[0_80.3%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#FF3232" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-8.7%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 27 4" width="27">
              <path d="M2 2H7.75H19.25H25" id="wave-increment" stroke="#FF3232" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_19.7%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#fff5f5] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[-0.21px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#ff3232] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator2 />
      <TrackAndStop2 />
    </div>
  );
}

function GoalContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Goal Container">
      <GoalInfo2 />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function ChevronForward3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron_forward">
          <mask height="24" id="mask0_0_287" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_287)">
            <path d={svgPaths.p3ecf1680} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CaptainInfoContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Captain Info Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">Captain: 🙉🙊🙈মেহেজাবীন নুসরাত স্মৃতি✨</p>
      </div>
      <ChevronForward3 />
    </div>
  );
}

function MembersInfo3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">103 members</p>
      </div>
    </div>
  );
}

function AttendeesInfo3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Attendees Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">200 attended</p>
      </div>
    </div>
  );
}

function MemberContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Member Container">
      <MembersInfo3 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">•</p>
      </div>
      <AttendeesInfo3 />
    </div>
  );
}

function InfoContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Info Container">
      <CaptainInfoContainer3 />
      <MemberContainer3 />
    </div>
  );
}

function ProfileContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Profile Container">
      <div className="relative shrink-0 size-[50px]" data-name="Sub Group Name">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <circle cx="25" cy="25" fill="#E6E6E6" id="Ellipse 113" r="25" />
        </svg>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[17.19%_17.19%_23.44%_17.19%] justify-center leading-[0] text-[#1d1b20] text-[22px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[1.5]">D</p>
        </div>
      </div>
      <InfoContainer3 />
    </div>
  );
}

function ProfileInfo7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Profile Info">
      <ProfileContainer3 />
    </div>
  );
}

function ProfileInfo6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Profile Info">
      <ProfileInfo7 />
    </div>
  );
}

function GoalInfo3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Goal Info">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Today’s goal
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        85.0%
      </p>
    </div>
  );
}

function ActiveIndicator3() {
  return (
    <div className="absolute content-stretch flex inset-[0_21.18%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#264A34" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-0.95%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 215 4" width="215">
              <path d="M2 2H54.75H160.25H213" id="wave-increment" stroke="#264A34" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_78.82%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#b7dfb9] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[0.15px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#264a34] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator3 />
      <TrackAndStop3 />
    </div>
  );
}

function GoalContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Goal Container">
      <GoalInfo3 />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function ChevronForward4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_forward">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="chevron_forward">
          <mask height="24" id="mask0_0_287" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_287)">
            <path d={svgPaths.p3ecf1680} fill="#484848" id="chevron_forward_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CaptainInfoContainer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Captain Info Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px] overflow-hidden text-ellipsis">{`Captain: অর্থহীন জীবন `}</p>
      </div>
      <ChevronForward4 />
    </div>
  );
}

function MembersInfo4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Members Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">103 members</p>
      </div>
    </div>
  );
}

function AttendeesInfo4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Attendees Info">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">200 attended</p>
      </div>
    </div>
  );
}

function MemberContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Member Container">
      <MembersInfo4 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">•</p>
      </div>
      <AttendeesInfo4 />
    </div>
  );
}

function InfoContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Info Container">
      <CaptainInfoContainer4 />
      <MemberContainer4 />
    </div>
  );
}

function ProfileContainer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Profile Container">
      <div className="relative shrink-0 size-[50px]" data-name="Sub Group Name">
        <svg className="absolute block inset-0 size-full" fill="none" height="50" preserveAspectRatio="none" viewBox="0 0 50 50" width="50">
          <circle cx="25" cy="25" fill="#E6E6E6" id="Ellipse 113" r="25" />
        </svg>
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium inset-[17.19%_17.19%_23.44%_17.19%] justify-center leading-[0] text-[#1d1b20] text-[22px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          <p className="leading-[1.5]">E</p>
        </div>
      </div>
      <InfoContainer4 />
    </div>
  );
}

function ProfileInfo9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Profile Info">
      <ProfileContainer4 />
    </div>
  );
}

function ProfileInfo8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Profile Info">
      <ProfileInfo9 />
    </div>
  );
}

function GoalInfo4() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Noto_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[20px] relative shrink-0 text-[14px] text-black w-full whitespace-nowrap" data-name="Goal Info">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Today’s goal
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        70.0%
      </p>
    </div>
  );
}

function ActiveIndicator4() {
  return (
    <div className="absolute content-stretch flex inset-[0_21.18%_0_0] items-start" data-name="Active indicator">
      <div className="h-[12px] relative shrink-0 w-[40px]" data-name="Segment - start">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-5%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
              <path d="M2 2H12H32H42" id="wave-increment" stroke="#264A34" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Segment">
        <div className="absolute inset-[6px_0]" data-name="wave-increment">
          <div className="absolute inset-[-2px_-0.95%]">
            <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 215 4" width="215">
              <path d="M2 2H54.75H160.25H213" id="wave-increment" stroke="#264A34" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackAndStop4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_78.82%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#b7dfb9] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[0.15px] top-1/2 w-[6px]" data-name="Stop">
        <div className="-translate-y-1/2 absolute bg-[#264a34] right-0 rounded-[26px] size-[4px] top-1/2" data-name="Stop shape" />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-w-px relative" data-name="Container">
      <ActiveIndicator4 />
      <TrackAndStop4 />
    </div>
  );
}

function GoalContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Goal Container">
      <GoalInfo4 />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-full" data-name="User Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative size-full">
            <ProfileInfo2 />
            <GoalContainer1 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-full" data-name="User Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative size-full">
            <ProfileInfo4 />
            <GoalContainer2 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-full" data-name="User Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative size-full">
            <ProfileInfo6 />
            <GoalContainer3 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-full" data-name="User Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center p-[12px] relative size-full">
            <ProfileInfo8 />
            <GoalContainer4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] top-[104px] w-[375px]" data-name="Container">
      <Frame />
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

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
        <div className="absolute inset-[20.06%_18.75%_20.01%_20.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.877px_-4.814px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgArrowBack}")` }} data-name="arrow_back">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.3839" preserveAspectRatio="none" viewBox="0 0 14.623 14.3839" width="14.623">
            <path d={svgPaths.p300e1440} fill="#484848" id="arrow_back" />
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

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="sort">
        <div className="absolute inset-[12.01%_20.1%_12.01%_20.06%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.814px_-2.882px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgArrowBack}")` }} data-name="swap_vert">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.2365" preserveAspectRatio="none" viewBox="0 0 14.3615 18.2365" width="14.3615">
            <path d={svgPaths.p39d90700} fill="#484848" id="swap_vert" />
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
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <div className="relative shrink-0 size-[48px]" data-name="Trailing action 1">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content1 />
          </div>
        </div>
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
                  <Content />
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute left-[56px] right-[56px] top-1/2" data-name="Text content">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    Subgroups (9)
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

export default function MobileStudyGroupStudentSubgroupList() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Subgroup list">
      <Container />
      <JobHeaderCard />
    </div>
  );
}