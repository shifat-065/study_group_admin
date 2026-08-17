import imgProperty11 from "./e226a3284ee6d3d19f8bfc84628342e3bf30338e.png";
import svgPaths from "./svg-4reilnelkj";
import { imgArrowBack } from "./svg-che82";
type GroupImageProps = {
  className?: string;
  property1?: "1";
};

function GroupImage({ className, property1 = "1" }: GroupImageProps) {
  return (
    <div className={className || "relative size-[40px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" height="40" src={imgProperty11} width="40" />
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
      <div className="relative shrink-0 size-[24px]" data-name="error">
        <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgArrowBack}")` }} data-name="error">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
            <path d={svgPaths.p2bf916d0} fill="#484848" id="error" />
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

function HeaderCard() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header card">
      <div className="bg-white h-[40px] relative shrink-0 w-full" data-name="Cutout punch hole">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
            <TimeDate />
            <StatusIcons />
            <Camera />
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Configuration">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[4px] relative size-full">
            <button className="cursor-pointer relative shrink-0 size-[48px]" data-name="Leading icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Content />
                </div>
              </div>
            </button>
            <div className="-translate-y-1/2 absolute left-[56px] right-[56px] top-1/2" data-name="Text content">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                  <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[28px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                    Study group
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

function BannerInfoIcon() {
  return (
    <div className="relative shrink-0 size-[43px]" data-name="Banner Info Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="43" preserveAspectRatio="none" viewBox="0 0 43 43" width="43">
        <g id="Banner Info Icon">
          <circle cx="21.5" cy="21.5" fill="#FEF9E7" id="Ellipse 174" r="21.5" />
          <g id="percent_discount">
            <mask height="24" id="mask0_0_250" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="9" y="9">
              <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" x="9" y="9" />
            </mask>
            <g mask="url(#mask0_0_250)">
              <path d={svgPaths.p283e1100} fill="#784A00" id="percent_discount_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function BannerDescriptionContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Banner description container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#484848] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Get 5% discount on all packages
      </p>
    </div>
  );
}

function BannerContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Banner Content">
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Discount
      </p>
      <BannerDescriptionContainer />
    </div>
  );
}

function BannerInfoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Banner Info Container">
      <BannerInfoIcon />
      <BannerContent />
    </div>
  );
}

function BannerInfoIcon1() {
  return (
    <div className="relative shrink-0 size-[43px]" data-name="Banner Info Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="43" preserveAspectRatio="none" viewBox="0 0 43 43" width="43">
        <g id="Banner Info Icon">
          <circle cx="21.5" cy="21.5" fill="#85D6FF" id="Ellipse 174" opacity="0.25" r="21.5" />
          <g id="person_raised_hand">
            <mask height="24" id="mask0_0_236" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="9" y="9">
              <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" x="9" y="9" />
            </mask>
            <g mask="url(#mask0_0_236)">
              <path d={svgPaths.p2e052f00} fill="#185A7A" id="person_raised_hand_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function BannerDescriptionContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Banner description container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#484848] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Get instant support from fellow group members
      </p>
    </div>
  );
}

function BannerContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Banner Content">
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-[153px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Support
      </p>
      <BannerDescriptionContainer1 />
    </div>
  );
}

function BannerInfoContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Banner Info Container">
      <BannerInfoIcon1 />
      <BannerContent1 />
    </div>
  );
}

function BannerInfoIcon2() {
  return (
    <div className="relative shrink-0 size-[43px]" data-name="Banner Info Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="43" preserveAspectRatio="none" viewBox="0 0 43 43" width="43">
        <g id="Banner Info Icon">
          <circle cx="21.5" cy="21.5" fill="#B7DFB9" id="Ellipse 174" opacity="0.25" r="21.5" />
          <g id="potted_plant">
            <mask height="24" id="mask0_0_219" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="9" y="9">
              <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" x="9" y="9" />
            </mask>
            <g mask="url(#mask0_0_219)">
              <path d={svgPaths.p34943c00} fill="#264A34" id="potted_plant_2" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function BannerDescriptionContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Banner description container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[16px] min-w-px relative text-[#484848] text-[12px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Push yourself up to the mark
      </p>
    </div>
  );
}

function BannerContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Banner Content">
      <p className="[word-break:break-word] font-['Noto_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-[153px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        Grow together
      </p>
      <BannerDescriptionContainer2 />
    </div>
  );
}

function BannerInfoContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Banner Info Container">
      <BannerInfoIcon2 />
      <BannerContent2 />
    </div>
  );
}

function BannerAppAdd() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start py-[12px] relative rounded-[16px] shrink-0 w-[343px]" data-name="banner/app_add">
      <BannerInfoContainer />
      <BannerInfoContainer1 />
      <BannerInfoContainer2 />
    </div>
  );
}

function BannerContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Banner container">
      <div className="flex flex-col justify-center overflow-x-auto overflow-y-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative size-full">
          <BannerAppAdd />
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[16px] pr-[8px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">All groups</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Trailing icon">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.75" preserveAspectRatio="none" viewBox="0 0 7.5 3.75" width="7.5">
            <path d={svgPaths.pd8d170} fill="#484848" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SaveButtonIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Save Button Icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[24px]">Available Groups</p>
          </div>
          <div className="bg-white h-[32px] relative rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] shrink-0" data-name="Filter chip">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <StateLayer2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TagContainer() {
  return (
    <div className="bg-[#b7dfb9] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">30%</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <GroupImage className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">The Winner</p>
      </div>
      <TagContainer />
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

function Trophy() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trophy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trophy">
          <mask height="20" id="mask0_0_229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_229)">
            <path d={svgPaths.p27255700} fill="#484848" id="trophy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badge">
      <Trophy />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">64 members</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame />
          </div>
        </div>
      </div>
      <Badge />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">•</p>
      </div>
      <Badge1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Subroto Howlader</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Metadata />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Container2 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function TagContainer1() {
  return (
    <div className="bg-[#b7dfb9] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">80%</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <GroupImage className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Optics</p>
      </div>
      <TagContainer1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#eaeef6] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">Bank</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trophy1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trophy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trophy">
          <mask height="20" id="mask0_0_229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_229)">
            <path d={svgPaths.p27255700} fill="#484848" id="trophy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badge">
      <Trophy1 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">220 members</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
      <Badge2 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">•</p>
      </div>
      <Badge3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

function Metadata1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: ডেভিড বেকহাম</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Metadata1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Container9 />
      <Container13 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function TagContainer2() {
  return (
    <div className="bg-[#b7dfb9] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">60%</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <GroupImage className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Jupiter</p>
      </div>
      <TagContainer2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#eaeef6] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">DP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trophy2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trophy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trophy">
          <mask height="20" id="mask0_0_229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_229)">
            <path d={svgPaths.p27255700} fill="#484848" id="trophy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badge">
      <Trophy2 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Badge5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">103 members</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame2 />
          </div>
        </div>
      </div>
      <Badge4 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">•</p>
      </div>
      <Badge5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Metadata2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Md Mehedi Hasan</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Metadata2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Container16 />
      <Container20 />
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

function TagContainer3() {
  return (
    <div className="bg-[#b7dfb9] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">90%</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <GroupImage className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Quantum</p>
      </div>
      <TagContainer3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#eaeef6] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">NTRCA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trophy3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trophy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trophy">
          <mask height="20" id="mask0_0_229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_229)">
            <path d={svgPaths.p27255700} fill="#484848" id="trophy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badge">
      <Trophy3 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">73 members</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame3 />
          </div>
        </div>
      </div>
      <Badge6 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">•</p>
      </div>
      <Badge7 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
    </div>
  );
}

function Metadata3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Mohammad Amin</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Metadata3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Container23 />
      <Container27 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function TagContainer4() {
  return (
    <div className="bg-[#b7dfb9] content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#264a34] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">63%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <GroupImage className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[14px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Samurai</p>
      </div>
      <TagContainer4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#eaeef6] h-[20px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            <p className="leading-[16px]">BAR / BJS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Trophy4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trophy">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trophy">
          <mask height="20" id="mask0_0_229" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_0_229)">
            <path d={svgPaths.p27255700} fill="#484848" id="trophy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Badge">
      <Trophy4 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">132 members</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="h-[24px] relative shrink-0" data-name="Component 1">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-center relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
      <Badge8 />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">•</p>
      </div>
      <Badge9 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Metadata4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[16px]">Admin: Imam Hasan</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Metadata4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Container30 />
      <Container34 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function GroupCards() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Group Cards">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Group Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Group Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container7 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Group Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container14 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Group Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container21 />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Group Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center p-[12px] relative size-full">
            <Container28 />
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="Group Container">
      <GroupCards />
    </div>
  );
}

function GroupList() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative shrink-0 w-[375px]" data-name="Group List">
      <GroupContainer />
    </div>
  );
}

function GroupsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Groups Section">
      <SaveButtonIcon />
      <GroupList />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[708px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Main Container">
      <BannerContainer />
      <GroupsSection />
    </div>
  );
}

export default function StudyGroup() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Study group">
      <HeaderCard />
      <MainContainer />
    </div>
  );
}