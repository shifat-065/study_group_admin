import imgProperty1Ellipse112 from "./a68e0a32978f88c65caa2aea22892b339fe53573.png";
import imgProperty1Ellipse117 from "./b759178af7543422272281b77c85c81861c56942.png";
import imgProperty1Ellipse116 from "./11b954048b5dc7432eb87232e5dd2733075dc342.png";
import imgProperty1Ellipse113 from "./81aae6c1266594d2676a8d3ec929a471cf60420b.png";
import imgProperty1Ellipse114 from "./c08d867c923e3a0ba6df2762252945ba80af95ca.png";
import svgPaths from "./svg-bso85x8rxs";
import { imgSwapVert } from "./svg-k6urm";

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

function MemberTextAndStatus() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Member Text and Status">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black tracking-[0.1px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Total members (82/100)</p>
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

function MemberTextAndStatusContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Member Text and Status Container">
      <MemberTextAndStatus />
    </div>
  );
}

function MemberInfoContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Member Info Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <MemberTextAndStatusContainer />
        </div>
      </div>
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

function MemberInfo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Member Info">
      <MemberInfoContainer />
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

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo />
      <ScoreInfo />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
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

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo1 />
      <ScoreInfo1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
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

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo2 />
      <ScoreInfo2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
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

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo3 />
      <ScoreInfo3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container15 />
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

function Container20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo4 />
      <ScoreInfo4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
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

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo5 />
      <ScoreInfo5 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
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

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo6 />
      <ScoreInfo6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
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

function Container32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <UserInfo7 />
      <ScoreInfo7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function MemberRows() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Member Rows">
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container1 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container5 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container9 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container13 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container17 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container21 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container25 />
          </div>
        </div>
      </div>
      <HorizontalFullWidth className="relative shrink-0 w-full" />
      <div className="bg-white relative shrink-0 w-[343px]" data-name="Member Row">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center py-[12px] relative size-full">
            <Container29 />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Member List">
      <MemberRowsContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[88px] w-[375px]" data-name="Container">
      <MemberInfo />
      <MemberList />
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
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
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
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="Icon">
        <div className="absolute inset-[14.1%_15.49%_15.55%_14.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.404px_-3.385px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgSwapVert}")` }} data-name="search">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.8825" preserveAspectRatio="none" viewBox="0 0 16.8778 16.8825" width="16.8778">
            <path d={svgPaths.p1c70700} fill="#484848" id="search" />
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

function TrailingElements() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-end overflow-clip relative shrink-0" data-name="Trailing elements">
      <div className="relative shrink-0 size-[48px]" data-name="Trailing action 2">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content2 />
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
      <div className="relative shrink-0 w-full" data-name="App bar">
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
                    Group members
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

export default function MobileStudyGroupStudentGroupMembers() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Group members">
      <Container />
      <JobHeaderCard />
    </div>
  );
}