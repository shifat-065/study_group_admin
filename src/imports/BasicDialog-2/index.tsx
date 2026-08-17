import svgPaths from "./svg-ou8qv0fxt4";
import { imgExitToApp } from "./svg-ihnay";

function TitleDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title & Description">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal gap-[16px] items-start leading-[0] pt-[12px] px-[12px] relative size-full">
          <div className="flex flex-col justify-center relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[32px]">Leave this study group?</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#484848] text-[14px] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[20px]">Are you sure you want to leave? You will miss out on daily goals, quizzes, and live updates.</p>
          </div>
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

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgExitToApp}")` }} data-name="exit_to_app">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.1667" preserveAspectRatio="none" viewBox="0 0 14.1667 14.1667" width="14.1667">
            <path d={svgPaths.p16b5a400} fill="#D40000" id="exit_to_app" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d40000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Leave</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Stay</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-[#1441cc] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px overflow-clip relative rounded-[8px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <div className="flex-[1_0_0] h-[48px] min-w-px relative" data-name="Button - text">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content />
              </div>
            </div>
          </div>
          <button className="cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative" data-name="Primary button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Content1 />
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
    <div className="bg-[#f4f6fa] relative rounded-[12px] size-full" data-name="Basic dialog">
      <div className="flex flex-col items-end max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end max-w-[inherit] min-w-[inherit] relative size-full">
          <TextContent />
          <Actions />
        </div>
      </div>
    </div>
  );
}