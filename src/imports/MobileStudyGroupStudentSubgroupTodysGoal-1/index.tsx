import svgPaths from "./svg-21ts69s773";
import { imgInfo } from "./svg-qcuq2";

function BuildingBlocksProgressIndicatorWidth4SegmentFlat({ className }: { className?: string }) {
  return (
    <div className={className || "h-[12px] relative w-[40px]"} data-name=".Building Blocks/Progress indicator/Width 4/Segment - flat">
      <div className="absolute inset-[6px_0]" data-name="wave-increment">
        <div className="absolute inset-[-2px_-5%]">
          <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 44 4" width="44">
            <path d="M2 2H12H32H42" id="wave-increment" stroke="#1441CC" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="arrow_back">
          <mask height="24" id="mask0_0_229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_229)">
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

function Column() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Column">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Live Exams</p>
      </div>
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

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Row">
      <Column />
      <div className="h-[24px] relative shrink-0" data-name="Component 2">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">303</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Column">
      <TextContainer />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Column2 />
    </div>
  );
}

function ActiveIndicator() {
  return (
    <div className="absolute content-stretch flex inset-[0_21.18%_0_0] items-start" data-name="Active indicator">
      <BuildingBlocksProgressIndicatorWidth4SegmentFlat className="h-[12px] relative shrink-0 w-[40px]" />
      <BuildingBlocksProgressIndicatorWidth4SegmentFlat className="flex-[1_0_0] h-[12px] min-w-px relative" />
    </div>
  );
}

function TrackAndStop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[0_0_0_78.82%] items-start pl-[6px]" data-name="track-and-stop">
      <div className="h-[12px] relative shrink-0 w-full" data-name="Track">
        <div className="-translate-y-1/2 absolute bg-[#d6e4ff] h-[4px] left-0 right-0 rounded-[2px] top-1/2" data-name="Track shape" />
      </div>
      <div className="-translate-y-1/2 absolute h-[8px] right-[0.15px] top-1/2 w-[6px]" data-name="Stop">
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

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Column">
      <Row1 />
      <div className="relative shrink-0 w-full" data-name="Linear-determinate progress indicator">
        <div className="content-stretch flex items-start relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Row">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#1441CC" id="Ellipse 124" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Attended:
      </p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Row">
      <Row3 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        150
      </p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Row">
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#D6E4FF" id="Ellipse 124" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Remaining:
      </p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Row">
      <Row5 />
      <p className="[word-break:break-word] font-['Noto_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        53
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Row2 />
      <Row4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
      <Row />
      <Column1 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1441cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">View attendance</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
      <Frame3 />
      <div className="h-[48px] relative shrink-0" data-name="Button - text">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative">
      <Frame5 />
    </div>
  );
}

function CircularCard() {
  return (
    <div className="bg-white content-stretch flex h-[192px] items-center pt-[12px] px-[12px] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
      <div aria-hidden className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame4 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card Content">
      <div className="flex flex-row items-center overflow-x-auto overflow-y-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <CircularCard />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="Card">
      <CardContent />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Card">
      <Card1 />
    </div>
  );
}

function StateLayer1() {
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer1 />
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
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">ফ্রি সাপ্তাহিক মডেল টেস্ট</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label />
          <DateIndicator />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">১৪০ দিনে ৪৭তম বিসিএস প্রস্তুতি</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight1 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label1 />
          <DateIndicator1 />
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

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight2 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label2 />
          <DateIndicator2 />
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

function Label3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">ব্যাংক নিয়োগ প্রস্তুতি - লং কোর্স</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight3 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label3 />
          <DateIndicator3 />
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

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">২০২২ সাল ভিত্তিক সিনিয়র অফিসার নিয়োগ প্রস্তুতি</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight4 />
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label4 />
          <DateIndicator4 />
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

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">ব্যাংক ডেইলি কুইজ</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight5 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label5 />
          <DateIndicator5 />
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

function Label6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[230px]" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-black text-ellipsis w-[230px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] overflow-hidden text-ellipsis">ব্যাংক মডেল টেস্ট [সাপ্তাহিক]</p>
      </div>
    </div>
  );
}

function KeyboardArrowRight6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_right">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="keyboard_arrow_right">
          <mask height="24" id="mask0_0_223" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_0_223)">
            <path d={svgPaths.p3ecf1680} fill="black" id="keyboard_arrow_right_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DateIndicator6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Date Indicator">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px] text-black">12/</span>
          <span className="leading-[20px]">20</span>
        </p>
      </div>
      <KeyboardArrowRight6 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[10px] relative size-full">
          <Label6 />
          <DateIndicator6 />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content2 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content7 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[343px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Content">
      <ExamHeader />
      <Frame1 />
    </div>
  );
}

function ListSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List Section">
      <SectionContent />
    </div>
  );
}

function ListContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="List Content">
      <ListSection />
    </div>
  );
}

function ListContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <ListContent />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 right-0 top-[104px]" data-name="Container">
      <Card />
      <ListContainer />
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

function StateLayer9() {
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

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer9 />
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
                    <Content9 />
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute left-[56px] right-[56px] top-1/2" data-name="Text content">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                    <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                      Today’s goal
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

export default function MobileStudyGroupStudentSubgroupTodysGoal() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Subgroup / Todys goal">
      <HeaderContainer />
      <Container />
      <JobHeaderCard />
    </div>
  );
}