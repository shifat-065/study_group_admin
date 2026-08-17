function InputTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Input</p>
      </div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="absolute bg-[#f4f6fa] content-stretch flex items-center left-[-4px] px-[4px] top-[-12px]" data-name="Label text container">
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Title
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer />
      <LabelTextContainer />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="State-layer">
      <div className="content-stretch flex items-start pl-[16px] py-[4px] relative size-full">
        <Content />
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-[12px] w-full" data-name="Text field">
      <div aria-hidden className="absolute border border-[#787878] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer />
    </div>
  );
}

function InputTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input text container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Input</p>
      </div>
    </div>
  );
}

function LabelTextContainer1() {
  return (
    <div className="absolute bg-[#f4f6fa] content-stretch flex items-center left-[-4px] px-[4px] top-[-12px]" data-name="Label text container">
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Description
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-start justify-center min-w-px py-[4px] relative" data-name="Content">
      <InputTextContainer1 />
      <LabelTextContainer1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="State-layer">
      <div className="content-stretch flex items-start pl-[16px] py-[4px] relative size-full">
        <Content1 />
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative rounded-[12px] w-full" data-name="Text field">
      <div aria-hidden className="absolute border border-[#787878] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <StateLayer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="h-[56px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <TextField />
        </div>
      </div>
      <div className="h-[200px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <TextField1 />
        </div>
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title & Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pt-[12px] px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[32px]">Report an issue</p>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Content">
      <TitleDescription />
    </div>
  );
}

function StateLayer2() {
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
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Submit</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Secondary button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content2 />
              </div>
            </div>
          </div>
          <button className="cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative" data-name="Primary button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content3 />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Actions">
      <Actions1 />
    </div>
  );
}

export default function BasicDialog() {
  return (
    <div className="bg-[#f4f6fa] content-stretch flex flex-col items-end overflow-clip relative rounded-[12px] size-full" data-name="Basic dialog">
      <TextContent />
      <Actions />
    </div>
  );
}