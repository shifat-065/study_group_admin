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
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular','Noto_Sans_Bengali:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[28px]">গ্রুপের নিয়মাবলী</p>
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Regular','Noto_Sans_Bengali:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#484848] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[20px] mb-0">{`মেসেঞ্জার গ্রুপ একটিভের জন্য কার্যাবলি `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">★★LIVE MCQ Messenger গ্রুপের নির্দেশিকা★★</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{` গ্রুপে ব্যক্তিগত ও সমষ্টিগত কর্মকাণ্ডের কিছু নির্দেশনা দেওয়া হলো।   `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`(ক) ব্যক্তিগত কর্মকাণ্ডঃ  `}</p>
        <p className="leading-[20px] mb-0">{` `}</p>
        <p className="leading-[20px] mb-0">{`১) কারো ভুল-ভ্রান্তি শোধরানোর জন্য এমন কোন শব্দ বা বাক্য ব্যবহার করবো না যা অন্যের জন্য কষ্টদায়ক হয়। এখানে সবাই ক্যাডার হবার প্রত্যাশা নিয়ে এসেছি তাই সকলেরই উচিৎ হবে ক্যাডার সূলভ আচরণ করা। `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">২) গ্রুপে একটা মেসেজ দেওয়া মানে সকল মানুষের কাছে নোটিফিকেশন যাওয়া। তাই একটা মেসেজ দেওয়ার আগে অবশ্যই ভাববেন যে আপনার মেসেজটা কি উপকারে আসলো নাকি বিরক্তির কারণ হলো।</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`৩) "এক কথায় উত্তর যোগ্য" প্রশ্ন চেষ্টা করবেন অনেকগুলো জমিয়ে একত্রে একটা মেসেজে করার জন্য। যিনি/যারা উত্তর জানবেন আপনার একটা মেসেজের রিপ্লাইতেই উত্তর গুলো দিয়ে দিবেন। ধন্যবাদ, হাই, হ্যালো এসব না দিয়ে মেসেজের উপর একটা ইমোজি দিয়ে দিবেন। এতে করে সারাদিন টুং টাং মেসেজের ঝড় কিছুটা কমবে।`}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`৪) "এক কথায় উত্তর যোগ্য নয়" এমন ব্যক্তিগত প্রশ্ন প্রশ্ন প্রথমে গ্রুপে করবেন।`}</p>
        <p className="leading-[20px] mb-0">[নোটঃ বিষয়টি যদি অধিকাংশের জন্য প্রয়োজনীয় হয় তবে তা গ্রুপেই আলোচনা করবেন যেমন- স্টাডি প্ল্যান, আবেদন বা ফর্মফিলাপ সংক্রান্ত প্রশ্ন।]</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`৫) নতুনরা গ্রুপে এসেই মেসেজিং শুরু করবেন না। একটু সময় নিয়ে অবজার্ভ করুণ, ধীরে ধীরে এনগেজড হোন।  `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">৬) সার্বিক আলোচনা, প্রয়োজনীয় তথ্য এর জন্য একটা ফেসবুক গ্রুপে সবাই কে এড হতে হবে।</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">(খ) সামষ্টিক কর্মকাণ্ডঃ</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`১) LIVE MCQ পরিক্ষা অংশগ্রহণকারীদের প্রতিদিন সকাল ৯ টার মধ্যে Top 10 প্রকাশ করা হবে এবং ১০ টার পর থেকে পরদিন রাত ১ টা পর্যন্ত  উক্ত বিষয়ে ভালো করার জন্য একটি গাইডলাইন দিবেন (বা আপনি যেভাবে পড়েছেন তা জানাবেন)। এতে করে যারা ভালো করবেন তাদের ভালো করার প্রতি আরো আগ্রহ বৃদ্ধি পাবে এবং যারা খারাপ করবেন তারা সঠিক গাইডলাইন পাবেন।   `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`২) প্রত্যেককে প্রতিদিন  পরিক্ষায় অংশগ্রহণ করতে হবে। এটি বাধ্যতামূলক। এবং মাসের ২৫ তারিখ  ৬০% এর নিচে থাকা মেম্বার রিমুভ দেওয়া হবে।কারণ গ্রুপটি শুধু মাত্র LIVE MCQ পরিক্ষার্থীদের জন্য।আপনার কোন প্রবলেম থাকলে এডমিন প্যানেলকে জানাবেন। `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`৩) গ্রুপ পরিচালনা ও পড়াশোনায় একটিভ করতে রুটিন অনুসারে Top 10,  Man of The Day, গ্রুপের দায়িত্ব মেম্বার্সরা পালন করবেন। `}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`৪) টেলিগ্রাম গ্রুপে পিডিএফ মেটারিয়ালস রয়েছে। সেখান  মেটারিয়ালসের সুবিধা পাবেন।`}</p>
        <p className="leading-[20px]">​</p>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function ListItemListItem0Density() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="List item/List Item: 0 Density">
      <StateLayer />
    </div>
  );
}

function OptionItem() {
  return (
    <div className="content-stretch flex flex-col h-[554px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="Option Item">
      <ListItemListItem0Density />
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Options Container">
      <Container />
      <OptionItem />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative shrink-0" data-name="State-layer">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#484848] text-[16px] text-left tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        <p className="leading-[24px]">Close</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer1 />
      </div>
      <div aria-hidden className="absolute border border-[#c7c7c7] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Actions1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <button className="cursor-pointer flex-[1_0_0] min-w-px relative" data-name="Primary button">
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

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] size-full" data-name="Bottom Sheet">
      <Header />
      <OptionsContainer />
      <Actions />
    </div>
  );
}