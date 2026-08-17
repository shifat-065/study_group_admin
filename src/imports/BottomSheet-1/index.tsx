import svgPaths from "./svg-pqml7a0tpc";
import { imgNotifications } from "./svg-osveg";

function HorizontalMiddleInset({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[320px]"} data-name="Horizontal/Middle-inset">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 288 1" width="288">
                <line id="Divider" stroke="#C7C5CE" x2="288" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notifications({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="notifications">
      <div className="absolute inset-[10.42%_18.75%_9.62%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-2.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgNotifications}")` }} data-name="notifications">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.1923" preserveAspectRatio="none" viewBox="0 0 15 19.1923" width="15">
          <path d={svgPaths.p3b858e00} fill="#484848" id="notifications" />
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <div className="bg-[#787878] h-[4px] relative rounded-[100px] shrink-0 w-[32px]" data-name="Drag handle" />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[28px]">Group Settings</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function LeadingElement() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="gavel">
        <div className="absolute inset-[13.72%_11.08%_13.54%_16.91%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.058px_-3.293px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgNotifications}")` }} data-name="gavel">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.457" preserveAspectRatio="none" viewBox="0 0 17.2819 17.457" width="17.2819">
            <path d={svgPaths.p1fc45e00} fill="black" id="gavel" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Group rules</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement />
          <Content />
        </div>
      </div>
    </div>
  );
}

function LeadingElement1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading element">
      <div className="relative shrink-0 size-[24px]" data-name="report">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgNotifications}")` }} data-name="report">
          <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
            <path d={svgPaths.pde3b180} fill="black" id="report" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-left w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Report issue</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <LeadingElement1 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function ContactCaptainRow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact captain row">
      <div className="bg-white h-[56px] min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] relative size-full">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer />
          </div>
        </div>
      </div>
      <button className="bg-white cursor-pointer h-[56px] min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] relative size-full">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer1 />
          </div>
        </div>
      </button>
    </div>
  );
}

function TrailingElement() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Trailing element">
      <Notifications className="relative shrink-0 size-[24px]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Group notification</p>
      </div>
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="relative rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2" data-name="Target">
      <StateLayer3 />
    </div>
  );
}

function Handle() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Handle">
      <Target />
    </div>
  );
}

function LeadingElement2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Leading element">
      <div className="bg-[#1441cc] h-[32px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end px-[4px] py-[2px] relative size-full">
            <Handle />
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <TrailingElement />
          <Content2 />
          <LeadingElement2 />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center min-h-[56px] relative shrink-0 w-[360px]" data-name="List item/List Item: 0 Density">
      <StateLayer2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#d40000] text-[16px] text-left w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Leave group</p>
      </div>
    </div>
  );
}

function TrailingElement1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Trailing element">
      <div className="relative shrink-0 size-[24px]" data-name="exit_to_app">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgNotifications}")` }} data-name="exit_to_app">
          <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
            <path d={svgPaths.p1359ea00} fill="#D40000" id="exit_to_app" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <Content3 />
          <TrailingElement1 />
        </div>
      </div>
    </div>
  );
}

function ContactCaptain() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Contact captain">
      <ContactCaptainRow />
      <HorizontalMiddleInset className="relative shrink-0 w-full" />
      <ListItemListItem0Density />
      <HorizontalMiddleInset className="relative shrink-0 w-full" />
      <button className="bg-white cursor-pointer h-[56px] min-h-[56px] relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
        <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] relative size-full">
            <div className="absolute inset-0" data-name="state-layer overlay" />
            <StateLayer4 />
          </div>
        </div>
      </button>
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Options Container">
      <Container />
      <ContactCaptain />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-[16px] relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] size-full" data-name="Bottom Sheet">
      <Header />
      <OptionsContainer />
    </div>
  );
}