import svgPaths from "./svg-f4p4t0ff9m";
import { imgCampaign } from "./svg-gq3ig";
type ComponentProps = {
  className?: string;
  property1?: "campaign" | "celebration" | "person_add" | "person_cancel" | "person_remove";
};

function Component({ className, property1 = "campaign" }: ComponentProps) {
  return (
    <div className={className || "relative size-[24px]"}>
      {property1 === "campaign" && (
        <div className="absolute inset-[20.67%_11.86%_20.99%_11.86%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.847px_-4.961px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="campaign">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 18.3075 14" width="18.3075">
            <path d={svgPaths.p355d9980} fill="black" id="campaign" />
          </svg>
        </div>
      )}
      {property1 === "person_add" && (
        <div className="absolute inset-[19.55%_5.73%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="person_add">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 21.125 14.6155" width="21.125">
            <path d={svgPaths.p31e50200} fill="black" id="person_add" />
          </svg>
        </div>
      )}
      {property1 === "celebration" && (
        <div className="absolute inset-[10.34%_6.17%_14.15%_14.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.368px_-2.483px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="celebration">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.1201" preserveAspectRatio="none" viewBox="0 0 19.151 18.1201" width="19.151">
            <path d={svgPaths.p1b5ce800} fill="black" id="celebration" />
          </svg>
        </div>
      )}
      {property1 === "person_remove" && (
        <div className="absolute inset-[19.55%_10.18%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="person_remove">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 20.0578 14.6155" width="20.0578">
            <path d={svgPaths.pbb8220} fill="black" id="person_remove" />
          </svg>
        </div>
      )}
      {property1 === "person_cancel" && (
        <div className="absolute inset-[19.55%_6.93%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="person_cancel">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 20.8375 14.6155" width="20.8375">
            <path d={svgPaths.p17805400} fill="black" id="person_cancel" />
          </svg>
        </div>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Component className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">New Announcements</p>
      </div>
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Admin has posted a new announcement regarding the upcoming live exam schedule.</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header />
            <Body />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Component className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1441cc] text-[16px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">New Member Joined!</p>
      </div>
    </div>
  );
}

function BodyContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Welcome `}</span>
          <span className="leading-[20px] text-black">@JaneDoe</span>
          <span className="leading-[20px]">{` to the study group! Let's help them get started on their preparation.`}</span>
        </p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header1 />
            <Body1 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Component className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Goal Achieved!</p>
      </div>
    </div>
  );
}

function BodyContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">{`You've completed your study goal for the week! You have spent 15+ hours reading and attending quizzes. Keep it up!`}</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header2 />
            <Body2 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Component className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#d40000] text-[16px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Member Left the Group</p>
      </div>
    </div>
  );
}

function BodyContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">@AlexBrown has left the study group.</p>
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header3 />
            <Body3 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Component className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#d40000] text-[16px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Member Removed</p>
      </div>
    </div>
  );
}

function BodyContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">@JohnDoe has been removed from the group by the admin for violating group rules.</p>
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header4 />
            <Body4 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-[144px] w-[375px]" data-name="Container">
      <Frame4 />
      <Frame3 />
      <Frame1 />
      <Frame2 />
      <Frame />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <Component className="relative shrink-0 size-[24px]" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">New Announcements</p>
      </div>
    </div>
  );
}

function BodyContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Admin has posted a new announcement regarding the upcoming live exam schedule.</p>
      </div>
    </div>
  );
}

function Body5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header5 />
            <Body5 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Component 6">
        <div className="absolute inset-[19.55%_5.73%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="person_add">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 21.125 14.6155" width="21.125">
            <path d={svgPaths.p31e50200} fill="black" id="person_add" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">New Member Joined!</p>
      </div>
    </div>
  );
}

function BodyContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[20px]">{`Welcome `}</span>
          <span className="leading-[20px] text-black">@JaneDoe</span>
          <span className="leading-[20px]">{` to the study group! Let's help them get started on their preparation.`}</span>
        </p>
      </div>
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header6 />
            <Body6 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Component 6">
        <div className="absolute inset-[10.34%_6.17%_14.15%_14.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.368px_-2.483px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="celebration">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.1201" preserveAspectRatio="none" viewBox="0 0 19.151 18.1201" width="19.151">
            <path d={svgPaths.p1b5ce800} fill="black" id="celebration" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Goal Achieved!</p>
      </div>
    </div>
  );
}

function BodyContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">{`You've completed your study goal for the week! You have spent 15+ hours reading and attending quizzes. Keep it up!`}</p>
      </div>
    </div>
  );
}

function Body7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header7 />
            <Body7 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Component 6">
        <div className="absolute inset-[19.55%_10.18%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="person_remove">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 20.0578 14.6155" width="20.0578">
            <path d={svgPaths.pbb8220} fill="black" id="person_remove" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Member Left the Group</p>
      </div>
    </div>
  );
}

function BodyContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">@AlexBrown has left the study group.</p>
      </div>
    </div>
  );
}

function Body8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header8 />
            <Body8 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="Component 6">
        <div className="absolute inset-[19.55%_6.93%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-4.692px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="person_cancel">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 20.8375 14.6155" width="20.8375">
            <path d={svgPaths.p17805400} fill="black" id="person_cancel" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[16px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Member Removed</p>
      </div>
    </div>
  );
}

function BodyContainer9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Body Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#484848] text-[14px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">@JohnDoe has been removed from the group by the admin for violating group rules.</p>
      </div>
    </div>
  );
}

function Body9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Body">
      <BodyContainer9 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0">
      <div className="bg-[#f4f6fa] relative rounded-[12px] shrink-0 w-[343px]" data-name="Circular Card">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
            <Header9 />
            <Body9 />
            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[#484848] text-[10px] w-[319px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              <p className="leading-[16px]">24 May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-[144px] w-[375px]" data-name="Cards">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pl-[8px] pr-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Selected icon">
        <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="9.01875" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875" width="12.225">
            <path d={svgPaths.p1971e00} fill="black" id="icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">All</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Announcement</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Goals</p>
      </div>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Member Joinded</p>
      </div>
    </div>
  );
}

function StateLayer4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Member Left</p>
      </div>
    </div>
  );
}

function StateLayer5() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="state-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px]">Member Removed</p>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 overflow-x-auto overflow-y-clip px-[16px] top-[100px] w-[375px]" data-name="Tab Bar">
      <div className="bg-[#d6e4ff] h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer />
          </div>
        </div>
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer1 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer2 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer3 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer4 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="h-[32px] relative rounded-[8px] shrink-0" data-name="Filter chip">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <StateLayer5 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
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

function StateLayer6() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <div className="relative shrink-0 size-[24px]" data-name="arrow_back">
        <div className="absolute inset-[20.06%_18.75%_20.01%_20.32%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.877px_-4.814px] mask-size-[24px_24px]" style={{ maskImage: `url("${imgCampaign}")` }} data-name="arrow_back">
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
      <StateLayer6 />
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
                    Activity log
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

export default function MobileStudyGroupStudentActivityLog() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile/Study Group / Student / Activity log">
      <Container />
      <Cards />
      <TabBar />
      <JobHeaderCard />
    </div>
  );
}