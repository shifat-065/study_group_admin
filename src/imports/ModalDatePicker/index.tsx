import svgPaths from "./svg-uxouofzjw6";

function LabelAndDate() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-w-px relative text-black" data-name="Label and Date">
      <p className="font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Select month
      </p>
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal h-[40px] leading-[40px] relative shrink-0 text-[32px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        May 2026
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#c7c7c7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-end justify-center pb-[12px] pl-[24px] pr-[12px] pt-[16px] relative size-full">
          <LabelAndDate />
        </div>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip pl-[8px] pr-[4px] py-[10px] relative rounded-[100px] shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">2025</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.75" preserveAspectRatio="none" viewBox="0 0 7.5 3.75" width="7.5">
            <path d={svgPaths.pd8d170} fill="black" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="back arrow">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
            <path d={svgPaths.p1cc3a100} fill="black" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron_forward">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 7.4 12" width="7.4">
            <path d={svgPaths.p33166380} fill="black" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Controls">
      <div className="relative shrink-0 size-[48px]" data-name="Icon button - standard">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content />
          </div>
        </div>
      </div>
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

function LocalSelectionRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="Local Selection Row">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[4px] relative size-full">
          <div className="relative shrink-0" data-name=".Building Blocks/Menu button">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <StateLayer />
            </div>
          </div>
          <Controls />
        </div>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Jan</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer3 />
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Feb</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer4 />
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Mar</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer5 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container1 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer6() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Apr</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer6 />
    </div>
  );
}

function StateLayer7() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">May</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0" data-name="container">
      <StateLayer7 />
    </div>
  );
}

function StateLayer8() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Jun</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer8 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container3 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container4 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer9() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Jul</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer9 />
    </div>
  );
}

function StateLayer10() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Aug</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer10 />
    </div>
  );
}

function StateLayer11() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Sep</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer11 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container6 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container7 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer12() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Oct</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer12 />
    </div>
  );
}

function StateLayer13() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Nov</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer13 />
    </div>
  );
}

function StateLayer14() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Dec</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer14 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container9 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container10 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer15() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">2023</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer15 />
    </div>
  );
}

function StateLayer16() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">2023</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer16 />
    </div>
  );
}

function StateLayer17() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-center relative shrink-0 w-[72px]" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">2023</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="container">
      <StateLayer17 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-center min-h-px relative w-full" data-name="row">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container12 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container13 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name=".Building Blocks/Year">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Years() {
  return (
    <div className="absolute content-stretch flex flex-col h-[312px] items-center justify-center left-[24px] right-[24px] top-[8px]" data-name="Years">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function YearsContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-x-clip overflow-y-auto relative w-full" data-name="Years container">
      <Years />
    </div>
  );
}

function StateLayer18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1441cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Cancel</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer18 />
    </div>
  );
}

function StateLayer19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1441cc] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">OK</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Content">
      <StateLayer19 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="Button container">
      <div className="h-[48px] relative shrink-0" data-name="Button - text">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content2 />
          </div>
        </div>
      </div>
      <div className="h-[48px] relative shrink-0" data-name="Primary button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Local Actions">
      <div aria-hidden className="absolute border-[#c7c7c7] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center pb-[8px] pt-[4px] px-[12px] relative size-full">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

export default function ModalDatePicker() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] size-full" data-name="Modal date picker">
      <Header />
      <LocalSelectionRow />
      <YearsContainer />
      <LocalActions />
    </div>
  );
}