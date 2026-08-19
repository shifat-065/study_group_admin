import { useState, useEffect, useRef } from "react";
import { imgCalendarMonth, imgEmojiEvents, imgEmojiEvents1 } from "@/imports/MobileStudyGroupStudentGroupRank/svg-5p890";
import svgRankPaths from "@/imports/MobileStudyGroupStudentGroupRank/svg-npjyrr8ymv";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, ChevronDown, Check, Info,
  UserPlus, Search, ArrowUpDown, ChevronRight,
  ThumbsUp, MessageCircle, Share2, Send, Globe, MoreHorizontal, ImageIcon, Star, User, Users,
  CalendarDays, Archive, ClipboardCheck, Trophy, Megaphone, Settings, Layers, FileText, Gavel, Download, Copy, Pencil, X, Gift, Wallet, Landmark, UserMinus, Shield, Bell, Trash2, MoreVertical,
  Filter, Calendar, CheckCircle2, XCircle, Clock, BookOpen, Award, PlaySquare, FileSpreadsheet, Sparkles, ExternalLink, BarChart3,
  type LucideIcon,
} from "lucide-react";
import { clsx } from "clsx";

// ── Asset imports ─────────────────────────────────────────────────────────────
import imgGroupIcon from "@/imports/MobileStudyGroupStudentJoinGroup/6f2aba55d4a40244fc9e8910ff07f4bd4f53f07a.png";
import imgMemberIcon from "@/imports/MobileStudyGroupStudentOnBording/6f2aba55d4a40244fc9e8910ff07f4bd4f53f07a.png";
import svgMember from "@/imports/MobileStudyGroupStudentOnBording/svg-ttz5k4n74x";
import svgBottomSheetPaths from "@/imports/BottomSheet-1/svg-pqml7a0tpc";
import { imgNotifications as imgBottomSheetMask } from "@/imports/BottomSheet-1/svg-osveg";
import svgLeavePaths from "@/imports/BasicDialog-2/svg-ou8qv0fxt4";
import { imgExitToApp } from "@/imports/BasicDialog-2/svg-ihnay";
import svgActivityPaths from "@/imports/MobileStudyGroupStudentActivityLog/svg-f4p4t0ff9m";
import { imgCampaign } from "@/imports/MobileStudyGroupStudentActivityLog/svg-gq3ig";
import { imgSwapVert as imgMemberMask } from "@/imports/MobileStudyGroupStudentGroupMembers/svg-k6urm";
import subgroupSvgPaths from "@/imports/MobileStudyGroupStudentSubgroupList/svg-s537fgytb1";
import subgroupDetailSvgPaths from "@/imports/MobileStudyGroupStudentSubgroup/svg-346517hzha";
import goalSvgPaths from "@/imports/MobileStudyGroupStudentSubgroupTodysGoal-1/svg-21ts69s773";

// ── Types ─────────────────────────────────────────────────────────────────────

type Screen = "activity" | "rank" | "members" | "subgroups" | "subgroupDetail" | "todayGoal" | "monthlyGoal" | "examAttendanceMembers" | "memberAttendance" | "monthlyGoalExamDetail" | "discussion" | "facebookGroup" | "examPage" | "quickLinkPage" | "adminHome" | "adminPanel" | "adminComingSoon" | "adminMyGroup" | "adminJoiningRequests" | "adminAnnouncement" | "adminMembersHub" | "adminZoneMembers" | "adminExamCustomisation" | "adminGroupSettings" | "adminGroupRules" | "adminGroupRulesView" | "adminCreateSubgroup";

interface Group {
  id: number;
  name: string;
  category: string;
  rank: number;
  members: number;
  maxMembers: number;
  admin: string;
  adminRating: number;
  discount: number;
  subgroups: number;
  createdDate: string;
  totalExams: number;
  avgAttendance: number;
  monthlyGoal: number;
}

// Shared red/yellow/green scale for every percentage-based indicator in the app
// (<40 red, 40-74 yellow, ≥75 green) — bar charts and pill-shaped chips alike, so
// the same percentage always reads as the same color no matter where it shows up.
const GOAL_BAR_COLOR = { green: "bg-[#6fcf73]", yellow: "bg-[#ffc94a]", red: "bg-[#eb5757]" } as const;
function goalBarColor(pct: number) {
  return pct >= 75 ? GOAL_BAR_COLOR.green : pct >= 40 ? GOAL_BAR_COLOR.yellow : GOAL_BAR_COLOR.red;
}

const PCT_CHIP_BG = { green: "#6fcf73", yellow: "#ffc94a", red: "#eb5757" } as const;
const PCT_CHIP_TEXT = "#1a1a1a";
function pctChipStyle(pct: number): { bg: string; text: string } {
  const bg = pct >= 75 ? PCT_CHIP_BG.green : pct >= 40 ? PCT_CHIP_BG.yellow : PCT_CHIP_BG.red;
  return { bg, text: PCT_CHIP_TEXT };
}

// ── Data ──────────────────────────────────────────────────────────────────────

const GROUPS: Group[] = [
  { id: 1, name: "The Winner", category: "BCS", rank: 1, members: 64, maxMembers: 100, admin: "Subroto Howlader", adminRating: 4.5, discount: 30, subgroups: 8, createdDate: "1 Feb 2026", totalExams: 155, avgAttendance: 75.5, monthlyGoal: 1221 },
  { id: 2, name: "Optics", category: "Bank", rank: 2, members: 220, maxMembers: 300, admin: "ডেভিড বেকহাম", adminRating: 4.2, discount: 80, subgroups: 13, createdDate: "15 Mar 2026", totalExams: 203, avgAttendance: 68.2, monthlyGoal: 980 },
  { id: 3, name: "Jupiter", category: "DP", rank: 3, members: 103, maxMembers: 150, admin: "Md Mehedi Hasan", adminRating: 4.8, discount: 60, subgroups: 6, createdDate: "10 Jan 2026", totalExams: 89, avgAttendance: 71.0, monthlyGoal: 650 },
  { id: 4, name: "Quantum", category: "NTRCA", rank: 4, members: 73, maxMembers: 100, admin: "Mohammad Amin", adminRating: 4.0, discount: 90, subgroups: 5, createdDate: "20 Apr 2026", totalExams: 112, avgAttendance: 82.3, monthlyGoal: 720 },
  { id: 5, name: "Samurai", category: "BAR / BJS", rank: 5, members: 132, maxMembers: 200, admin: "Imam Hasan", adminRating: 4.6, discount: 63, subgroups: 10, createdDate: "5 May 2026", totalExams: 178, avgAttendance: 77.8, monthlyGoal: 1100 },
  { id: 6, name: "Phoenix", category: "BCS", rank: 6, members: 89, maxMembers: 120, admin: "Rahman Ali", adminRating: 3.9, discount: 45, subgroups: 7, createdDate: "1 Jun 2026", totalExams: 134, avgAttendance: 65.4, monthlyGoal: 890 },
  { id: 7, name: "Zenith", category: "Bank", rank: 7, members: 156, maxMembers: 200, admin: "Farida Begum", adminRating: 4.3, discount: 55, subgroups: 9, createdDate: "22 Mar 2026", totalExams: 167, avgAttendance: 59.8, monthlyGoal: 850 },
  { id: 8, name: "Atlas", category: "DP", rank: 8, members: 47, maxMembers: 80, admin: "Karim Uddin", adminRating: 4.1, discount: 25, subgroups: 4, createdDate: "8 Feb 2026", totalExams: 67, avgAttendance: 78.9, monthlyGoal: 480 },
  { id: 9, name: "Vertex", category: "NTRCA", rank: 9, members: 58, maxMembers: 100, admin: "Nasrin Akter", adminRating: 4.7, discount: 70, subgroups: 5, createdDate: "14 Apr 2026", totalExams: 93, avgAttendance: 72.1, monthlyGoal: 610 },
  { id: 10, name: "Apex", category: "BAR / BJS", rank: 10, members: 40, maxMembers: 60, admin: "Barrister Zafar", adminRating: 3.8, discount: 50, subgroups: 4, createdDate: "3 Jul 2026", totalExams: 82, avgAttendance: 85.0, monthlyGoal: 560 },
];

const EXAMS: Record<string, Array<{ name: string; isLive: boolean }>> = {
  BCS: [
    { name: "ফ্রি সাপ্তাহিক মডেল টেস্ট", isLive: true },
    { name: "১৪০ দিনে ৪৭তম বিসিএস প্রস্তুতি", isLive: false },
    { name: "গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা", isLive: true },
    { name: "ব্যাংক নিয়োগ প্রস্তুতি - লং কোর্স", isLive: false },
    { name: "২০২২ সাল ভিত্তিক সিনিয়র অফিসার নিয়োগ প্রস্তুতি", isLive: true },
    { name: "ব্যাংক ডেইলি কুইজ", isLive: false },
    { name: "মাসিক মডেল টেস্ট [পরিপূর্ণ সিলেবাস]", isLive: true },
  ],
  Bank: [
    { name: "Bank Job Preparation - 1st Phase", isLive: false },
    { name: "Combined 8 Banks Senior Officer Preparation", isLive: true },
    { name: "Bank Daily Quiz", isLive: false },
    { name: "Bank Model Test [Preliminary]", isLive: true },
    { name: "Math and Mental Ability Practice Exam", isLive: false },
    { name: "English Grammar Live Exam", isLive: true },
    { name: "General Banking Current Affairs Quiz", isLive: false },
  ],
  DP: [
    { name: "Constable Preliminary Mock Exam", isLive: true },
    { name: "Departmental Written Exam Live", isLive: false },
    { name: "Bangla and English Grammar Quiz", isLive: true },
    { name: "Full Written Exam Practice", isLive: false },
    { name: "Math Current Affairs Solution", isLive: false },
    { name: "Physical and General Knowledge Live Exam", isLive: true },
    { name: "Bengali Country Introduction Quiz", isLive: false },
  ],
  NTRCA: [
    { name: "NTRCA Model Test [Preliminary]", isLive: true },
    { name: "Subject-Based Live Exam", isLive: false },
    { name: "Education Policy and Teaching Method Quiz", isLive: true },
    { name: "Bangla Literature and Grammar", isLive: false },
    { name: "Pedagogy and General Studies Practice Exam", isLive: false },
    { name: "General Written Exam Live", isLive: true },
    { name: "Physical Written Exam Live Exam", isLive: false },
  ],
  "BAR / BJS": [
    { name: "Bar Council Preliminary Mock Exam", isLive: true },
    { name: "Judiciary Written Preparation Practice Exam", isLive: false },
    { name: "Constitution Law Quiz", isLive: true },
    { name: "Companies Act Practice Exam", isLive: false },
    { name: "Property Law Live Exam", isLive: true },
    { name: "Contract and Tort Law Live", isLive: false },
    { name: "Criminal Law Quiz", isLive: true },
  ],
};

// ── Shared UI primitives ──────────────────────────────────────────────────────

function AppHeader({ title, onBack, trailing }: { title: string; onBack: () => void; trailing?: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-between px-1 h-12 bg-white shrink-0 border-b border-gray-100">
      <button
        onClick={onBack}
        className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
      >
        <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
      </button>
      <p className="absolute left-14 right-28 font-['Noto_Sans',sans-serif] text-[18px] font-medium text-black leading-7 truncate">
        {title}
      </p>
      <div className="flex items-center justify-end pr-3 min-w-12 h-12 shrink-0">
        {trailing}
      </div>
    </div>
  );
}

// Generic placeholder for a member/user profile photo — used everywhere a member list or
// post feed would otherwise show a picture, since no real avatar photos are available yet.
// Distinct background colors so avatars read as different people at a glance, instead of
// every member sharing the same generic gray silhouette.
const AVATAR_PALETTE = ["#f97316", "#eab308", "#22c55e", "#14b8a6", "#3b82f6", "#6366f1", "#a855f7", "#ec4899", "#ef4444", "#0ea5e9"];

function MemberAvatar({ size = 30, className, style, name }: { size?: number; className?: string; style?: React.CSSProperties; name?: string }) {
  if (!name) {
    return (
      <div
        className={clsx("rounded-full shrink-0 bg-[#e6e6e6] flex items-center justify-center overflow-hidden", className)}
        style={{ width: size, height: size, ...style }}
      >
        <User className="text-[#9a9a9a]" style={{ width: size * 0.58, height: size * 0.58 }} strokeWidth={1.75} />
      </div>
    );
  }
  const trimmed = name.trim();
  const initial = /[a-zA-Z]/.test(trimmed[0] ?? "") ? trimmed[0].toUpperCase() : (trimmed[0] ?? "?");
  const hash = trimmed.split("").reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 0);
  const bg = AVATAR_PALETTE[hash % AVATAR_PALETTE.length];
  return (
    <div
      className={clsx("rounded-full shrink-0 flex items-center justify-center overflow-hidden", className)}
      style={{ width: size, height: size, backgroundColor: bg, ...style }}
    >
      <span className="font-['Noto_Sans',sans-serif] font-medium text-white leading-none" style={{ fontSize: size * 0.44 }}>{initial}</span>
    </div>
  );
}

// Generic placeholder for a group photo — used everywhere a group icon or cover
// would otherwise show a picture, since no real group photos are available yet.
function GroupAvatar({ size = 30, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={clsx("rounded-full shrink-0 bg-[#e6e6e6] flex items-center justify-center overflow-hidden", className)}
      style={{ width: size, height: size, ...style }}
    >
      <Users className="text-[#9a9a9a]" style={{ width: size * 0.58, height: size * 0.58 }} strokeWidth={1.75} />
    </div>
  );
}

// Distinct conic-gradient combos so each group reads as visually different at a glance,
// instead of every group showing the same generic gray placeholder icon.
const GROUP_LOGO_PALETTES: Array<[string, string, string]> = [
  ["#4285f4", "#fbbc05", "#34a853"],
  ["#ef4444", "#f97316", "#eab308"],
  ["#8b5cf6", "#ec4899", "#f43f5e"],
  ["#06b6d4", "#3b82f6", "#6366f1"],
  ["#10b981", "#14b8a6", "#0ea5e9"],
  ["#f59e0b", "#d97706", "#b45309"],
  ["#a855f7", "#d946ef", "#ec4899"],
  ["#22c55e", "#84cc16", "#eab308"],
  ["#f43f5e", "#fb7185", "#fda4af"],
  ["#0ea5e9", "#38bdf8", "#7dd3fc"],
];

function GroupLogo({ size = 40, seed = 0 }: { size?: number; seed?: number | string }) {
  const hash = typeof seed === "string"
    ? seed.split("").reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 0)
    : seed;
  const [a, b, c] = GROUP_LOGO_PALETTES[hash % GROUP_LOGO_PALETTES.length];
  return (
    <div
      className="rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${a} 0deg 130deg, ${b} 130deg 245deg, ${c} 245deg 360deg)`,
      }}
    />
  );
}

// Bottom-anchored confirmation toast, e.g. after publishing an announcement. Stays
// mounted across screen transitions since it's rendered outside the screen AnimatePresence.
function Snackbar({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="absolute left-4 right-4 bottom-4 z-[60] bg-[#2e2e2e] rounded-[8px] px-4 py-3.5 flex items-center shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)]"
    >
      <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-5">{message}</span>
    </motion.div>
  );
}

function LiveChip() {
  return (
    <div className="bg-red-500 flex gap-1 items-center justify-center px-2 rounded-lg shrink-0">
      <div className="size-1.5 rounded-full bg-white" />
      <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-white leading-4">Live</span>
    </div>
  );
}

// ── Screen 2: Group Detail ────────────────────────────────────────────────────

const MANDATORY_EXAMS_INFO_TEXT = `বাধ্যতামূলক পরীক্ষাসমূহ হলো গ্রুপের নিয়ম অনুযায়ী প্রতিটি সদস্যের জন্য অংশগ্রহণ করা আবশ্যক এমন পরীক্ষার তালিকা।

কেন এই পরীক্ষাগুলো বাধ্যতামূলক?

• নিয়মিত অনুশীলনের মাধ্যমে প্রস্তুতির ধারাবাহিকতা বজায় রাখা
• নিজের অগ্রগতি ও দুর্বলতা সঠিকভাবে যাচাই করা
• গ্রুপ র‍্যাংকিং ও মাসিক লক্ষ্যমাত্রায় (Goal) অবদান রাখা
• এডমিন ও অন্যান্য সদস্যদের সাথে প্রস্তুতির ধারাবাহিকতা বজায় রাখা

যেসব পরীক্ষার পাশে "Live" ব্যাজ দেখা যাচ্ছে, সেগুলো এখন চলমান রয়েছে এবং সরাসরি অংশগ্রহণ করা যাবে। বাকি পরীক্ষাগুলো নির্ধারিত সময়ে যুক্ত হবে। গ্রুপ নিয়মাবলীতে উল্লিখিত ন্যূনতম অংশগ্রহণের শর্ত পূরণ করতে নিয়মিত এই পরীক্ষাগুলোতে অংশ নেওয়ার চেষ্টা করুন।`;

function MandatoryExamsInfoBottomSheet({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-white rounded-[16px] flex flex-col overflow-hidden max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Title */}
        <div className="px-[16px] pt-[20px] shrink-0">
          <p
            className="font-['Noto_Sans',sans-serif] font-normal text-[20px] leading-[28px] text-black"
            style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
          >
            বাধ্যতামূলক পরীক্ষাসমূহ
          </p>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto mt-[12px]">
          <div className="px-[16px] py-[8px]">
            <p
              className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848] whitespace-pre-wrap"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              {MANDATORY_EXAMS_INFO_TEXT}
            </p>
          </div>
        </div>

        {/* Close button */}
        <div className="shrink-0 flex gap-[8px] items-center p-[12px]">
          <button
            onClick={onClose}
            className="flex-1 h-[48px] rounded-[8px] border border-[#c7c7c7] flex items-center justify-center"
          >
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#484848]"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              Close
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function AdminDetailsBottomSheet({
  name,
  rating,
  since,
  onClose,
}: {
  name: string;
  rating: number;
  since: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex flex-col items-center p-[16px] shrink-0">
          <div className="bg-[#787878] h-[4px] rounded-[100px] w-[32px]" />
        </div>

        {/* Title */}
        <div className="px-[16px] pb-[16px] shrink-0">
          <p
            className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black"
            style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
          >
            Admin Details
          </p>
        </div>

        <div className="border-t border-[#e3e3e3]" />

        {/* Admin row */}
        <div className="flex items-center gap-3 p-[16px]">
          <img src={imgGroupIcon} alt="" className="size-[56px] rounded-full shrink-0 object-cover" />
          <div className="flex flex-col gap-1 min-w-0">
            <p
              className="font-['Noto_Sans',sans-serif] font-medium text-[18px] text-black leading-[26px] truncate"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              {name}
            </p>
            <div className="flex items-center gap-1.5">
              <Star className="size-4 text-[#f5c518] fill-[#f5c518] shrink-0" />
              <span className="font-['Noto_Sans',sans-serif] font-semibold text-[14px] text-black leading-[20px]">
                {rating.toFixed(1)}
              </span>
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#787878] leading-[20px]">
                Admin since: {since}
              </span>
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="shrink-0 p-[12px]">
          <button
            onClick={onClose}
            className="w-full h-[56px] rounded-[100px] border border-[#c7c7c7] flex items-center justify-center"
          >
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] tracking-[0.15px] text-[#484848]"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              Close
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

const RULES_TEXT = `মেসেঞ্জার গ্রুপ একটিভের জন্য কার্যাবলি

★★LIVE MCQ Messenger গ্রুপের নির্দেশিকা★★

 গ্রুপে ব্যক্তিগত ও সমষ্টিগত কর্মকাণ্ডের কিছু নির্দেশনা দেওয়া হলো।

(ক) ব্যক্তিগত কর্মকাণ্ডঃ

১) কারো ভুল-ভ্রান্তি শোধরানোর জন্য এমন কোন শব্দ বা বাক্য ব্যবহার করবো না যা অন্যের জন্য কষ্টদায়ক হয়। এখানে সবাই ক্যাডার হবার প্রত্যাশা নিয়ে এসেছি তাই সকলেরই উচিৎ হবে ক্যাডার সূলভ আচরণ করা।

২) গ্রুপে একটা মেসেজ দেওয়া মানে সকল মানুষের কাছে নোটিফিকেশন যাওয়া। তাই একটা মেসেজ দেওয়ার আগে অবশ্যই ভাববেন যে আপনার মেসেজটা কি উপকারে আসলো নাকি বিরক্তির কারণ হলো।

৩) "এক কথায় উত্তর যোগ্য" প্রশ্ন চেষ্টা করবেন অনেকগুলো জমিয়ে একত্রে একটা মেসেজে করার জন্য। যিনি/যারা উত্তর জানবেন আপনার একটা মেসেজের রিপ্লাইতেই উত্তর গুলো দিয়ে দিবেন। ধন্যবাদ, হাই, হ্যালো এসব না দিয়ে মেসেজের উপর একটা ইমোজি দিয়ে দিবেন। এতে করে সারাদিন টুং টাং মেসেজের ঝড় কিছুটা কমবে।

৪) "এক কথায় উত্তর যোগ্য নয়" এমন ব্যক্তিগত প্রশ্ন প্রথমে গ্রুপে করবেন।
[নোটঃ বিষয়টি যদি অধিকাংশের জন্য প্রয়োজনীয় হয় তবে তা গ্রুপেই আলোচনা করবেন যেমন- স্টাডি প্ল্যান, আবেদন বা ফর্মফিলাপ সংক্রান্ত প্রশ্ন।]

৫) নতুনরা গ্রুপে এসেই মেসেজিং শুরু করবেন না। একটু সময় নিয়ে অবজার্ভ করুণ, ধীরে ধীরে এনগেজড হোন।`;
function GroupRulesBottomSheet({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex flex-col items-center p-[16px] shrink-0">
          <div className="bg-[#787878] h-[4px] rounded-[100px] w-[32px]" />
        </div>

        {/* Title */}
        <div className="px-[16px] pb-[16px] shrink-0">
          <p
            className="font-['Noto_Sans',sans-serif] font-normal text-[18px] leading-[28px] text-black"
            style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
          >
            গ্রুপের নিয়মাবলী
          </p>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto mt-[24px]">
          <div className="bg-white px-[16px] py-[8px]">
            <p
              className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848] whitespace-pre-wrap"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              {RULES_TEXT}
            </p>
          </div>
        </div>

        {/* Close button */}
        <div className="shrink-0 p-[12px]">
          <button
            onClick={onClose}
            className="w-full h-[56px] rounded-[100px] border border-[#c7c7c7] flex items-center justify-center"
          >
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] tracking-[0.15px] text-[#484848]"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              Close
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 375, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -375, opacity: 0 }),
};
const slideTrans = { type: "tween" as const, duration: 0.28, ease: "easeInOut" as const };

// ── Screen 4: Group Member (accepted) ─────────────────────────────────────────

const MEMBER_EXAMS = [
  { title: "ডেইলি কুইজ [১৪০ দিনের রুটিনের অংশ]", marks: 60, mins: 31, isLive: false, desc: "বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন ১টি ১৮-২০তম গ্রেডের রিয়েল জবের পরীক্ষার প্রশ্ন নিয়ে তৈরি।" },
  { title: "গত মাসের সমস্ত বিষয়বস্তু এবং পরীক্ষার প্রশ্নগুলোর উপর ভিত্তি করে একটি সারসংক্ষেপ পরীক্ষা।", marks: 60, mins: 31, isLive: true, desc: "গত মাসের সমস্ত বিষয়বস্তু এবং পরীক্ষার প্রশ্নগুলোর উপর ভিত্তি করে একটি সারসংক্ষেপ পরীক্ষা।", badge: "OMR" },
  { title: "সাল শেষের মূল্যায়ন [১৪০ দিনের রুটিনের অংশ]", marks: 60, mins: 31, isLive: false, desc: "সম্পূর্ণ সিলেবাস কভার করে বার্ষিক মূল্যায়ন পরীক্ষা।" },
  { title: "মাসিক মডেল টেস্ট [পরিপূর্ণ সিলেবাস]", marks: 80, mins: 45, isLive: true, desc: "পুরো সিলেবাস অনুযায়ী মাসিক মডেল টেস্ট।" },
];

// Same { name, isLive } shape as EXAMS, so both lists work interchangeably as an ExamPageScreen examList.
const MANDATORY_EXAMS: Array<{ name: string; isLive: boolean }> = [
  { name: "ফ্রি সাপ্তাহিক মডেল টেস্ট", isLive: true },
  { name: "১৪০ দিনে ৪৭তম বিসিএস প্রস্তুতি", isLive: false },
  { name: "গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা", isLive: true },
  { name: "ব্যাংক নিয়োগ প্রস্তুতি - লং কোর্স", isLive: false },
  { name: "২০২২ সাল ভিত্তিক সিনিয়র অফিসার নিয়োগ প্রস্তুতি", isLive: true },
  { name: "ব্যাংক ডেইলি কুইজ", isLive: false },
  { name: "মাসিক মডেল টেস্ট [পরিপূর্ণ সিলেবাস]", isLive: true },
];

const QUICK_LINKS: Array<{ id: string; label: string; Icon: LucideIcon }> = [
  { id: "routine", label: "Routine", Icon: CalendarDays },
  { id: "archive", label: "Archive", Icon: Archive },
  { id: "result", label: "Result", Icon: ClipboardCheck },
  { id: "meritList", label: "Merit List", Icon: Trophy },
];

type QuickLink = typeof QUICK_LINKS[number];

// Quick-link tiles shown at the bottom of the study group screen, and again on every
// exam's page so the same shortcuts are always within reach.
function ExamQuickLinks({ onSelect }: { onSelect: (link: QuickLink) => void }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {QUICK_LINKS.map(link => (
        <button
          key={link.id}
          onClick={() => onSelect(link)}
          className="h-14 bg-[#f4f6fa] rounded-[12px] flex items-center justify-center gap-2 active:opacity-70 transition-opacity"
        >
          <link.Icon className="size-5 text-[#484848]" strokeWidth={1.75} />
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]">{link.label}</span>
        </button>
      ))}
    </div>
  );
}

// Rows shown on the Admin panel hub. Destinations without a real screen yet fall back to
// AdminComingSoonScreen so every row stays tappable instead of dead-ending silently.
const ADMIN_PANEL_ITEMS: Array<{ id: string; label: string; Icon: LucideIcon; screen: "adminMembersHub" | "subgroups" | "adminJoiningRequests" | "adminAnnouncement" | "adminExamCustomisation" | "adminGroupSettings" | "adminGroupRules" | "adminComingSoon" }> = [
  { id: "joining", label: "Joining requested", Icon: UserPlus, screen: "adminJoiningRequests" },
  { id: "announcements", label: "Announcements", Icon: Megaphone, screen: "adminAnnouncement" },
  { id: "members", label: "Members", Icon: Users, screen: "adminMembersHub" },
  { id: "subgroups", label: "Subgroups", Icon: Layers, screen: "subgroups" },
  { id: "examCustomisation", label: "Exam Customisation", Icon: FileText, screen: "adminExamCustomisation" },
  { id: "groupSettings", label: "Group Settings", Icon: Settings, screen: "adminGroupSettings" },
  { id: "groupRules", label: "Edit Group Rules", Icon: Gavel, screen: "adminGroupRules" },
];

interface ResultExamItem {
  id: string;
  title: string;
  marks: number;
  mins: number;
  desc: string;
  studyMaterialsCount?: number;
  hasSlideshow?: boolean;
  hasPdf?: boolean;
  dateStr?: string;
  score: number;
  rank: number;
  totalParticipants: number;
  correctAnswers: number;
  wrongAnswers: number;
  negativeMarks: number;
  timeSpent: string;
}

const RESULT_EXAMS: ResultExamItem[] = [
  {
    id: "res-1",
    title: "ডেইলি কুইজ [১৪০ দিনের রুটিনের অংশ]",
    marks: 60,
    mins: 31,
    desc: "বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন ১টি ১৮-২০তম গ্রেডের রিয়েল জবের পরীক্ষার প্রশ্নের উপর লাইভ পরীক্ষা। বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন...",
    studyMaterialsCount: 8,
    hasSlideshow: true,
    hasPdf: true,
    score: 52.5,
    rank: 4,
    totalParticipants: 120,
    correctAnswers: 54,
    wrongAnswers: 6,
    negativeMarks: 1.5,
    timeSpent: "22m 15s",
  },
  {
    id: "res-2",
    title: "মাসিক রিভিউ [১৪০ দিনের রুটিনের অংশ]",
    marks: 60,
    mins: 31,
    desc: "গত মাসের সমস্ত বিষয়বস্তু এবং পরীক্ষার প্রশ্নগুলোর উপর ভিত্তি করে একটি সারসংক্ষেপ পরীক্ষা।",
    studyMaterialsCount: 11,
    hasSlideshow: false,
    hasPdf: true,
    dateStr: "Sunday 12 Dec 2025",
    score: 48.0,
    rank: 12,
    totalParticipants: 115,
    correctAnswers: 50,
    wrongAnswers: 8,
    negativeMarks: 2.0,
    timeSpent: "25m 40s",
  },
  {
    id: "res-3",
    title: "সাল শেষের মূল্যায়ন [১৪০ দিনের রুটিনের অংশ]",
    marks: 60,
    mins: 31,
    desc: "বিগত ১৪০ দিনের সমস্ত বিষয়বস্তু ও পরীক্ষার প্রশ্নের উপর একটি সমন্বিত মূল্যায়ন।",
    studyMaterialsCount: 5,
    hasSlideshow: true,
    hasPdf: false,
    score: 55.0,
    rank: 2,
    totalParticipants: 128,
    correctAnswers: 56,
    wrongAnswers: 4,
    negativeMarks: 1.0,
    timeSpent: "28m 00s",
  },
  {
    id: "res-4",
    title: "সপ্তাহিক প্র্যাকটিস [১৪০ দিনের রুটিনের অংশ]",
    marks: 60,
    mins: 31,
    desc: "সপ্তাহের সমস্ত বিষয়বস্তু নিয়ে প্রস্তুতি এবং পরীক্ষার প্রশ্নের অনুশীলন।",
    studyMaterialsCount: 6,
    hasSlideshow: true,
    hasPdf: true,
    score: 44.5,
    rank: 18,
    totalParticipants: 110,
    correctAnswers: 47,
    wrongAnswers: 10,
    negativeMarks: 2.5,
    timeSpent: "21m 05s",
  },
];

// High-fidelity Result Screen matching Mobile/Study Group / Admin / Result Figma design (Demo)
function ResultScreen({ onBack }: { onBack: () => void }) {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      {/* Header */}
      <AppHeader
        title="Result"
        onBack={onBack}
        trailing={
          <div className="flex items-center gap-1">
            <div className="size-10 flex items-center justify-center">
              <CalendarDays className="size-5 text-[#484848]" strokeWidth={1.75} />
            </div>
            <div className="size-10 flex items-center justify-center">
              <Filter className="size-5 text-[#484848]" strokeWidth={1.75} />
            </div>
          </div>
        }
      />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-10">
        <div className="flex flex-col">
          {/* Card 1: ডেইলি কুইজ [১৪০ দিনের রুটিনের অংশ] */}
          <div className="bg-white px-4 pt-4 pb-4 flex flex-col gap-4 border-b border-[#e6e6e6]">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] text-black tracking-[0.15px]">
                ডেইলি কুইজ [১৪০ দিনের রুটিনের অংশ]
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#484848]">
                  <FileText className="size-4 text-[#484848]" />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px] text-[#484848]">
                    60 marks
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#484848]">
                  <Clock className="size-4 text-[#484848]" />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px] text-[#484848]">
                    31 mins
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Noto_Sans',sans-serif] text-[14px] text-[#484848] leading-[20px]">
              {expandedCards["res-1"] ? (
                <>
                  বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন ১টি ১৮-২০তম গ্রেডের রিয়েল জবের পরীক্ষার প্রশ্নের উপর লাইভ পরীক্ষা। বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন বিষয় ভিত্তিক গুরুত্বপূর্ণ প্রশ্নের অনুশীলন।
                  <button
                    onClick={() => toggleExpand("res-1")}
                    className="font-medium text-black ml-1 font-['Roboto',sans-serif]"
                  >
                    See less
                  </button>
                </>
              ) : (
                <>
                  বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন ১টি ১৮-২০তম গ্রেডের রিয়েল জবের পরীক্ষার প্রশ্নের উপর লাইভ পরীক্ষা বিগত সালগুলোতে অনুষ্ঠিত হওয়া যেকোন...{" "}
                  <button
                    onClick={() => toggleExpand("res-1")}
                    className="font-medium text-black font-['Roboto',sans-serif]"
                  >
                    See more
                  </button>
                </>
              )}
            </p>

            {/* Card Footer Actions (display only) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px] font-['Noto_Sans',sans-serif] font-medium text-black">
                <Pencil className="size-4 text-[#1441cc]" />
                <span>Study materials (8)</span>
                <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#1441cc] ml-0.5" />
              </div>
              <div className="flex items-center gap-2.5">
                {RESULT_EXAMS[0].hasSlideshow && <PlaySquare className="size-5 text-[#484848]" strokeWidth={1.5} />}
                {RESULT_EXAMS[0].hasPdf && <FileSpreadsheet className="size-5 text-[#484848]" />}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="h-[48px] border border-[#c7c7c7] bg-white rounded-[8px] flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848]">
                উত্তরপত্র
              </div>
              <div className="h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white">
                মার্কশিট
              </div>
            </div>
          </div>

          <div className="bg-white px-4 pt-4 pb-4 flex flex-col gap-4 border-b border-[#e6e6e6]">
            <div className="flex flex-col gap-2">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] text-black tracking-[0.15px]">
                মাসিক রিভিউ [১৪০ দিনের রুটিনের অংশ]
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#484848]">
                  <FileText className="size-4 text-[#484848]" />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px] text-[#484848]">
                    60 marks
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#484848]">
                  <Clock className="size-4 text-[#484848]" />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px] text-[#484848]">
                    31 mins
                  </span>
                </div>
              </div>
            </div>

            <p className="font-['Noto_Sans',sans-serif] text-[14px] text-[#484848] leading-[20px]">
              গত মাসের সমস্ত বিষয়বস্তু এবং পরীক্ষার প্রশ্নগুলোর উপর ভিত্তি করে একটি সারসংক্ষেপ পরীক্ষা
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px] font-['Noto_Sans',sans-serif] font-medium text-black">
                <Pencil className="size-4 text-[#1441cc]" />
                <span>Study materials (11)</span>
                <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#1441cc] ml-0.5" />
              </div>
              <div className="flex items-center gap-2.5">
                {RESULT_EXAMS[1].hasPdf && <FileSpreadsheet className="size-5 text-[#484848]" />}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="h-[48px] border border-[#c7c7c7] bg-white rounded-[8px] flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848]">
                উত্তরপত্র
              </div>
              <div className="h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white">
                মার্কশিট
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-white">
            <div className="flex-1 h-px bg-[#e6e6e6]" />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] whitespace-nowrap">
              Sunday 12 Dec 2025
            </span>
            <div className="flex-1 h-px bg-[#e6e6e6]" />
          </div>

          <div className="bg-white px-4 pt-4 pb-4 flex flex-col gap-4 border-b border-[#e6e6e6]">
            <div className="flex flex-col gap-2">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] text-black tracking-[0.15px]">
                সাল শেষের মূল্যায়ন [১৪০ দিনের রুটিনের অংশ]
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[#484848]">
                  <FileText className="size-4 text-[#484848]" />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px] text-[#484848]">
                    60 marks
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#484848]">
                  <Clock className="size-4 text-[#484848]" />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px] text-[#484848]">
                    31 mins
                  </span>
                </div>
              </div>
            </div>

            <p className="font-['Noto_Sans',sans-serif] text-[14px] text-[#484848] leading-[20px]">
              বিগত ১৪০ দিনের সমস্ত বিষয়বস্তু ও পরীক্ষার প্রশ্নের উপর একটি সমন্বিত মূল্যায়ন
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[14px] font-['Noto_Sans',sans-serif] font-medium text-black">
                <Pencil className="size-4 text-[#1441cc]" />
                <span>Study materials (5)</span>
                <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-[#1441cc] ml-0.5" />
              </div>
              <div className="flex items-center gap-2.5">
                {RESULT_EXAMS[2].hasSlideshow && <PlaySquare className="size-5 text-[#484848]" strokeWidth={1.5} />}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="h-[48px] border border-[#c7c7c7] bg-white rounded-[8px] flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848]">
                উত্তরপত্র
              </div>
              <div className="h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white">
                মার্কশিট
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MeritListEntry {
  rank: number;
  name: string;
  marks: number;
  isCurrentUser?: boolean;
}

const MERIT_LIST: MeritListEntry[] = [
  { rank: 1, name: "Sumaiya", marks: 35.20 },
  { rank: 2, name: "Fatima Al-Farsi", marks: 33.10 },
  { rank: 3, name: "Rafiq Islam", marks: 32.00 },
  { rank: 4, name: "Sadia Rahman", marks: 31.60 },
  { rank: 5, name: "Md Jahidul Islam Shifat", marks: 27.80, isCurrentUser: true },
  { rank: 6, name: "Maria Gonzalez", marks: 26.40 },
  { rank: 7, name: "Arif Hossain", marks: 22.90 },
];

function MeritListScreen({ onBack }: { onBack: () => void }) {
  const currentUser = MERIT_LIST.find(entry => entry.isCurrentUser);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch) searchInputRef.current?.focus();
  }, [showSearch]);

  const closeSearch = () => {
    setShowSearch(false);
    setSearchQuery("");
  };

  const filteredList = MERIT_LIST.filter(entry =>
    entry.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {showSearch ? (
        <div className="flex items-center gap-2 px-1 h-12 bg-white shrink-0 border-b border-gray-100">
          <button
            onClick={closeSearch}
            className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <input
            ref={searchInputRef}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="flex-1 min-w-0 font-['Noto_Sans',sans-serif] text-[18px] font-medium text-black placeholder:text-[#a3a3a3] placeholder:font-normal outline-none bg-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
            >
              <X className="size-5 text-[#484848]" />
            </button>
          )}
        </div>
      ) : (
        <AppHeader
          title="Merit List"
          onBack={onBack}
          trailing={
            <button
              onClick={() => setShowSearch(true)}
              className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            >
              <Search className="size-5 text-black" strokeWidth={1.75} />
            </button>
          }
        />
      )}
      <div className="flex-1 overflow-y-auto pb-6">
        {!showSearch && currentUser && (
          <div className="mx-4 mt-4 p-3 bg-[#f4f6fa] rounded-[12px] flex items-center gap-3">
            <img src={imgMemberIcon} alt="" className="size-12 rounded-full shrink-0 object-cover" />
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <p className="font-['Noto_Sans',sans-serif] font-semibold text-[15px] text-black truncate">
                {currentUser.name}
              </p>
              <div className="flex items-center gap-3 text-[12px] text-[#484848] font-['Noto_Sans',sans-serif]">
                <span className="flex items-center gap-1">
                  <BarChart3 className="size-3.5" />
                  Level 5
                </span>
                <span className="flex items-center gap-1">
                  <Award className="size-3.5" />
                  160 Points
                </span>
              </div>
              <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-medium font-['Noto_Sans',sans-serif]">
                Passed
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between px-4 pt-5 pb-2 text-[12px] font-medium text-[#787878] font-['Noto_Sans',sans-serif]">
          <div className="flex items-center gap-6">
            <span className="w-6">SL</span>
            <span>Name</span>
          </div>
          <span>Marks</span>
        </div>

        <div className="flex flex-col">
          {filteredList.map(entry => (
            <div
              key={entry.rank}
              className={clsx(
                "flex items-center justify-between px-4 py-3 border-b border-[#f0f0f0]",
                entry.isCurrentUser && "bg-emerald-50"
              )}
            >
              <div className="flex items-center gap-6">
                <span className="w-6 font-['Noto_Sans',sans-serif] text-[14px] text-[#484848]">{entry.rank}</span>
                <span
                  className={clsx(
                    "font-['Noto_Sans',sans-serif] text-[14px]",
                    entry.isCurrentUser ? "font-semibold text-black" : "text-black"
                  )}
                >
                  {entry.name}
                </span>
              </div>
              <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black">{entry.marks.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Shared empty state for Routine / Archive pages, with full ResultScreen for Result page and
// MeritListScreen for the Merit List page
function QuickLinkPageScreen({ link, onBack }: { link: QuickLink; onBack: () => void }) {
  if (link.id === "result") {
    return <ResultScreen onBack={onBack} />;
  }
  if (link.id === "meritList") {
    return <MeritListScreen onBack={onBack} />;
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title={link.label} onBack={onBack} />
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 -mt-12">
        <div className="size-16 rounded-full bg-[#f4f6fa] flex items-center justify-center">
          <link.Icon className="size-7 text-[#787878]" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            No data right now
          </p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#787878] leading-[20px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Exams will be added very soon.
          </p>
        </div>
      </div>
    </div>
  );
}

// Placeholder screen for Admin panel destinations that don't have a built-out screen yet.
function AdminComingSoonScreen({ title, icon: Icon, onBack }: { title: string; icon: LucideIcon; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title={title} onBack={onBack} />
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 -mt-12">
        <div className="size-16 rounded-full bg-[#f4f6fa] flex items-center justify-center">
          <Icon className="size-7 text-[#787878]" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Coming soon
          </p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#787878] leading-[20px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            This admin tool is still being built.
          </p>
        </div>
      </div>
    </div>
  );
}

function ArticleIcon() {
  return (
    <svg className="size-4 shrink-0" fill="none" viewBox="0 0 16 16">
      <mask id="m-article" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" height="16">
        <rect fill="#D9D9D9" width="16" height="16" />
      </mask>
      <g mask="url(#m-article)">
        <path d={svgMember.p29a99300} fill="#484848" />
      </g>
    </svg>
  );
}

function AlarmIcon() {
  return (
    <svg className="size-4 shrink-0" fill="none" viewBox="0 0 16 16">
      <mask id="m-alarm" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" height="16">
        <rect fill="#D9D9D9" width="16" height="16" />
      </mask>
      <g mask="url(#m-alarm)">
        <path d={svgMember.p2bd72d80} fill="#484848" />
      </g>
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <mask id="m-timer" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" height="20">
        <rect fill="#D9D9D9" width="20" height="20" />
      </mask>
      <g mask="url(#m-timer)">
        <path d={svgMember.p61c3600} fill="#484848" />
      </g>
    </svg>
  );
}

function ActivityCard({ exam, onSelectQuickLink }: { exam?: typeof MEMBER_EXAMS[0]; onSelectQuickLink?: (link: QuickLink) => void }) {
  if (!exam) return null;
  return (
    <div className="bg-[#f4f6fa] rounded-[16px] w-full px-4 pt-4 pb-3 flex flex-col gap-[18px]">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <p
            className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] text-black tracking-[0.15px]"
            style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
          >
            {exam.title}
          </p>
          {"badge" in exam && exam.badge && (
            <div className="bg-[#f7dc6e] rounded-[8px] px-2 h-[20px] flex items-center shrink-0">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#665200] leading-[16px]">{exam.badge}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ArticleIcon />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]">{exam.marks} marks</span>
          </div>
          <div className="flex items-center gap-1">
            <AlarmIcon />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]">{exam.mins} mins</span>
          </div>
        </div>
      </div>
      {/* Description */}
      <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        {exam.desc}
      </p>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onSelectQuickLink?.({ id: "studyMaterials", label: "Study materials", Icon: FileText })}
          className="bg-[#ffdbca] flex items-center gap-2 p-1 pr-2 rounded-[16px] active:opacity-70 transition-opacity"
        >
          <svg className="size-6 shrink-0" fill="none" viewBox="0 0 24 24">
            <mask id="m-design" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" height="24">
              <rect fill="#D9D9D9" width="24" height="24" />
            </mask>
            <g mask="url(#m-design)">
              <path d={svgMember.p2385f600} fill="#1C1B1F" />
            </g>
          </svg>
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#310] leading-[20px] whitespace-nowrap">Study materials (11)</span>
          <svg className="size-6 shrink-0" fill="none" viewBox="0 0 24 24">
            <mask id="m-arrow-r" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" height="24">
              <rect fill="#D9D9D9" width="24" height="24" />
            </mask>
            <g mask="url(#m-arrow-r)">
              <path d={svgMember.p20ba9eb0} fill="black" />
            </g>
          </svg>
        </button>
        <svg className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
          <mask id="m-pdf" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" height="20">
            <rect fill="#D9D9D9" width="20" height="20" />
          </mask>
          <g mask="url(#m-pdf)">
            <path d={svgMember.p5f7a300} fill="black" />
          </g>
        </svg>
      </div>
      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onSelectQuickLink?.({ id: "practiceQuiz", label: "প্র্যাকটিস কুইজ", Icon: ClipboardCheck })}
          className="flex-1 h-12 rounded-[8px] border border-[#c7c7c7] flex items-center justify-center active:bg-gray-50 transition-colors"
        >
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>প্র্যাকটিস কুইজ</span>
        </button>
        {exam.isLive && (
          <button className="flex-1 h-12 bg-[#1441cc] rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>লাইভ পরীক্ষা দিন</span>
          </button>
        )}
      </div>
    </div>
  );
}

function GoalProgressBar({ value, total }: { value: number; total: number }) {
  const pct = Math.min(100, (value / total) * 100);
  return (
    <div className="relative w-full h-[4px] bg-[#d6e4ff] rounded-[2px]">
      <div className="absolute left-0 top-0 h-full bg-[#1441cc] rounded-[2px]" style={{ width: `${pct}%` }} />
    </div>
  );
}

// ── Screen 5: Activity Log ────────────────────────────────────────────────────

type ActivityType = "announcement" | "member_joined" | "goal" | "member_left" | "member_removed";

interface ActivityItem {
  id: number;
  type: ActivityType;
  title: string;
  body: React.ReactNode;
  date: string;
}

const ACTIVITY_DATA: ActivityItem[] = [
  { id: 1, type: "announcement", title: "New Announcements", body: "Admin has posted a new announcement regarding the upcoming live exam schedule.", date: "24 May 2026" },
  { id: 2, type: "member_joined", title: "New Member Joined!", body: <>Welcome <span className="font-['Noto_Sans',sans-serif] text-black">@JaneDoe</span> to the study group! {"Let's"} help them get started on their preparation.</>, date: "24 May 2026" },
  { id: 3, type: "goal", title: "Goal Achieved!", body: "You've completed your study goal for the week! You have spent 15+ hours reading and attending quizzes. Keep it up!", date: "24 May 2026" },
  { id: 4, type: "member_left", title: "Member Left the Group", body: "@AlexBrown has left the study group.", date: "24 May 2026" },
  { id: 5, type: "member_removed", title: "Member Removed", body: "@JohnDoe has been removed from the group by the admin for violating group rules.", date: "24 May 2026" },
];

const ACTIVITY_FILTERS: { label: string; type: ActivityType | null }[] = [
  { label: "All", type: null },
  { label: "Announcement", type: "announcement" },
  { label: "Goals", type: "goal" },
  { label: "Member Joined", type: "member_joined" },
  { label: "Member Left", type: "member_left" },
  { label: "Member Removed", type: "member_removed" },
];

const ACTIVITY_TITLE_COLOR: Record<ActivityType, string> = {
  announcement: "text-black",
  member_joined: "text-[#1441cc]",
  goal: "text-black",
  member_left: "text-[#d40000]",
  member_removed: "text-[#d40000]",
};

function ActivityIcon({ type }: { type: ActivityType }) {
  if (type === "announcement") {
    return (
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-[20.67%_11.86%_20.99%_11.86%] mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url("${imgCampaign}")`, maskPosition: "-2.847px -4.961px", maskSize: "24px 24px" }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 18.3075 14" width="18.3075">
            <path d={svgActivityPaths.p355d9980} fill="black" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "member_joined") {
    return (
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-[19.55%_5.73%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url("${imgCampaign}")`, maskPosition: "-1.5px -4.692px", maskSize: "24px 24px" }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 21.125 14.6155" width="21.125">
            <path d={svgActivityPaths.p31e50200} fill="black" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "goal") {
    return (
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-[10.34%_6.17%_14.15%_14.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url("${imgCampaign}")`, maskPosition: "-3.368px -2.483px", maskSize: "24px 24px" }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="18.1201" preserveAspectRatio="none" viewBox="0 0 19.151 18.1201" width="19.151">
            <path d={svgActivityPaths.p1b5ce800} fill="black" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "member_left") {
    return (
      <div className="relative shrink-0 size-[24px]">
        <div className="absolute inset-[19.55%_10.18%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url("${imgCampaign}")`, maskPosition: "-1.5px -4.692px", maskSize: "24px 24px" }}>
          <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 20.0578 14.6155" width="20.0578">
            <path d={svgActivityPaths.pbb8220} fill="black" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute inset-[19.55%_6.93%_19.55%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat" style={{ maskImage: `url("${imgCampaign}")`, maskPosition: "-1.5px -4.692px", maskSize: "24px 24px" }}>
        <svg className="absolute block inset-0 size-full" fill="none" height="14.6155" preserveAspectRatio="none" viewBox="0 0 20.8375 14.6155" width="20.8375">
          <path d={svgActivityPaths.p17805400} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function ActivityLogCard({ item }: { item: ActivityItem }) {
  return (
    <div className="bg-[#f4f6fa] rounded-[12px] w-full p-[12px] flex flex-col gap-[12px]">
      {/* Header */}
      <div className="flex gap-[8px] items-center w-full">
        <ActivityIcon type={item.type} />
        <p className={clsx("flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] min-w-0", ACTIVITY_TITLE_COLOR[item.type])} style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
          {item.title}
        </p>
      </div>
      {/* Body */}
      <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848] w-full" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        {item.body}
      </p>
      {/* Date */}
      <p className="font-['Noto_Sans',sans-serif] font-medium text-[10px] leading-[16px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        {item.date}
      </p>
    </div>
  );
}

function ActivityLogScreen({ onBack }: { onBack: () => void }) {
  const [activeFilter, setActiveFilter] = useState<ActivityType | null>(null);

  const filtered = activeFilter === null
    ? ACTIVITY_DATA
    : ACTIVITY_DATA.filter(a => a.type === activeFilter);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* App bar */}
      <AppHeader title="Activity log" onBack={onBack} />

      {/* Filter chips */}
      <div className="flex gap-[4px] items-center overflow-x-auto px-[16px] py-[8px] shrink-0" style={{ scrollbarWidth: "none" }}>
        {ACTIVITY_FILTERS.map(({ label, type }) => {
          const isSelected = activeFilter === type;
          return (
            <button
              key={label}
              onClick={() => setActiveFilter(type)}
              className={clsx(
                "h-[32px] rounded-[8px] flex items-center gap-[8px] shrink-0 transition-colors",
                isSelected ? "bg-[#d6e4ff] pl-[8px] pr-[16px]" : "border border-[#c7c7c7] px-[16px]",
              )}
            >
              {isSelected && (
                <div className="overflow-clip relative shrink-0 size-[18px]">
                  <svg className="absolute inset-0 block size-full" fill="none" viewBox="0 0 12.225 9.01875">
                    <path d={svgActivityPaths.p1971e00} fill="black" />
                  </svg>
                </div>
              )}
              <span className={clsx(
                "font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap",
                isSelected ? "text-black" : "text-[#484848]",
              )} style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Card list */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-[8px] px-[16px] pt-[8px] pb-8">
          <AnimatePresence mode="popLayout">
            {filtered.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.16 }}
              >
                <ActivityLogCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-['Noto_Sans',sans-serif] text-sm text-[#484848]">No activity for this filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LeaveGroupDialog({
  onLeave,
  onStay,
}: {
  onLeave: () => void;
  onStay: () => void;
}) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden"
      >
        {/* Text content */}
        <div className="pt-[12px] px-[12px] flex flex-col gap-[16px]">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Leave this study group?
          </p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Are you sure you want to leave? You will miss out on daily goals, quizzes, and live updates.
          </p>
        </div>
        {/* Actions */}
        <div className="flex gap-[8px] items-center p-[12px]">
          {/* Leave — text button with red exit icon */}
          <button
            onClick={onLeave}
            className="flex-1 h-[48px] rounded-[8px] flex items-center justify-center gap-[8px]"
          >
            <div className="relative shrink-0 size-[20px]">
              <div
                className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                style={{ maskImage: `url("${imgExitToApp}")`, maskPosition: "-3.5px -3.5px", maskSize: "24px 24px" }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" height="14.1667" preserveAspectRatio="none" viewBox="0 0 14.1667 14.1667" width="14.1667">
                  <path d={svgLeavePaths.p16b5a400} fill="#D40000" />
                </svg>
              </div>
            </div>
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#d40000] leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Leave
            </span>
          </button>
          {/* Stay — filled blue button */}
          <button
            onClick={onStay}
            className="flex-1 h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Stay
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function ReportIssueDialog({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden"
      >
        {/* Title + fields */}
        <div className="pt-[12px] px-[12px] flex flex-col gap-[16px]">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Report an issue
          </p>
          <div className="flex flex-col gap-[16px]">
            {/* Title field */}
            <div className="relative h-[56px]">
              <div className="absolute inset-0 border border-[#787878] rounded-[12px] pointer-events-none" />
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="absolute inset-0 w-full h-full px-[16px] bg-transparent font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black outline-none rounded-[12px]"
                style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
              />
              <span className="absolute -top-[10px] left-[12px] bg-[#f4f6fa] px-[4px] font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]">
                Title
              </span>
            </div>
            {/* Description field */}
            <div className="relative h-[200px]">
              <div className="absolute inset-0 border border-[#787878] rounded-[12px] pointer-events-none" />
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="absolute inset-0 w-full h-full px-[16px] pt-[12px] bg-transparent font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black outline-none rounded-[12px] resize-none"
                style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
              />
              <span className="absolute -top-[10px] left-[12px] bg-[#f4f6fa] px-[4px] font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]">
                Description
              </span>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-[8px] items-center p-[12px]">
          <button
            onClick={onClose}
            className="flex-1 h-[48px] rounded-[8px] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc] leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Cancel
            </span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Submit
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Header kebab menu for the admin's own Study Group screen — swaps "Report issue" for
// "Admin panel" compared to the member's GroupSettingsSheet, and skips straight there.
function AdminGroupSettingsSheet({
  onClose,
  onAdminPanel,
  onGroupRules,
}: {
  onClose: () => void;
  onAdminPanel: () => void;
  onGroupRules: () => void;
}) {
  const [notifOn, setNotifOn] = useState(true);
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>

        <div className="px-4 shrink-0">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[18px] leading-[28px] text-black" style={ns}>Group Settings</p>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col w-full">
            <button
              onClick={() => { onClose(); setTimeout(onAdminPanel, 50); }}
              className="bg-white h-14 min-h-[56px] w-full flex items-center px-4 gap-4 active:bg-gray-50 transition-colors"
            >
              <Shield className="size-6 text-black shrink-0" strokeWidth={1.5} />
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6" style={ns}>Admin panel</span>
            </button>
            <button
              onClick={() => { onClose(); setTimeout(onGroupRules, 50); }}
              className="bg-white h-14 min-h-[56px] w-full flex items-center px-4 gap-4 active:bg-gray-50 transition-colors"
            >
              <Gavel className="size-6 text-black shrink-0" strokeWidth={1.5} />
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6" style={ns}>Group rules</span>
            </button>
          </div>

          <div className="px-4"><div className="h-px bg-[#C7C5CE]" /></div>

          <div className="bg-white h-14 min-h-[56px] w-full flex items-center px-4 gap-4">
            <Bell className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
            <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6" style={ns}>Group notification</span>
            <button
              onClick={() => setNotifOn(v => !v)}
              className={clsx("relative h-8 w-[52px] rounded-full transition-colors duration-200 shrink-0", notifOn ? "bg-[#1441cc]" : "bg-[#787878]")}
            >
              <motion.div
                className="absolute top-[2px] bg-white rounded-full size-7 shadow-sm"
                animate={{ left: notifOn ? "22px" : "2px" }}
                transition={{ type: "tween", duration: 0.18 }}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Kebab menu on the announcement banner itself — Edit routes to the real announcement
// composer; Share/Delete are single-announcement demo actions with no list to affect.
function DeleteAnnouncementDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden"
      >
        <div className="pt-[12px] px-[12px] pb-0 flex flex-col gap-[16px]">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Delete this announcement?
          </p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            This will remove the announcement for all group members. This action can't be undone.
          </p>
        </div>
        <div className="flex gap-[8px] items-center p-[12px]">
          <button onClick={onConfirm} className="flex-1 h-[48px] rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#d40000]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Delete
            </span>
          </button>
          <button onClick={onCancel} className="flex-1 h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Cancel
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function AnnouncementActionsSheet({ onClose, onEdit, onDelete }: { onClose: () => void; onEdit: () => void; onDelete: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => { onClose(); setTimeout(onEdit, 50); }}
            className="h-14 flex items-center gap-4 px-4 active:bg-gray-50 transition-colors text-left"
          >
            <Pencil className="size-6 text-black shrink-0" strokeWidth={1.5} />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6" style={ns}>Edit</span>
          </button>
          <button onClick={onClose} className="h-14 flex items-center gap-4 px-4 active:bg-gray-50 transition-colors text-left">
            <Share2 className="size-6 text-black shrink-0" strokeWidth={1.5} />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6" style={ns}>Share</span>
          </button>
          <div className="px-4"><div className="h-px bg-[#C7C5CE]" /></div>
          <button
            onClick={() => { onClose(); onDelete(); }}
            className="h-14 flex items-center gap-4 px-4 active:bg-gray-50 transition-colors text-left"
          >
            <Trash2 className="size-6 text-[#d40000] shrink-0" strokeWidth={1.5} />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#d40000] leading-6" style={ns}>Delete</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GroupSettingsSheet({
  onClose,
  onGroupRules,
  onReportIssue,
  onLeaveGroup,
}: {
  onClose: () => void;
  onGroupRules: () => void;
  onReportIssue: () => void;
  onLeaveGroup: () => void;
}) {
  const [notifOn, setNotifOn] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-[16px]"
        onClick={e => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="flex flex-col items-center p-[16px] shrink-0">
          <div className="bg-[#787878] h-[4px] rounded-[100px] w-[32px]" />
        </div>

        {/* Title */}
        <div className="px-[16px] shrink-0">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[18px] leading-[28px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Group Settings
          </p>
        </div>

        <div className="flex flex-col gap-[16px] mt-[24px]">
          {/* Top action rows */}
          <div className="flex flex-col w-full">
            {/* Group rules */}
            <button
              onClick={() => { onClose(); setTimeout(onGroupRules, 50); }}
              className="bg-white h-[56px] min-h-[56px] w-full flex items-center px-[16px] gap-[16px] active:bg-gray-50 transition-colors"
            >
              <div className="relative shrink-0 size-[24px]">
                <div
                  className="absolute inset-[13.72%_11.08%_13.54%_16.91%] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                  style={{ maskImage: `url("${imgBottomSheetMask}")`, maskPosition: "-4.058px -3.293px", maskSize: "24px 24px" }}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" height="17.457" preserveAspectRatio="none" viewBox="0 0 17.2819 17.457" width="17.2819">
                    <path d={svgBottomSheetPaths.p1fc45e00} fill="black" />
                  </svg>
                </div>
              </div>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Group rules</span>
            </button>

            {/* Report issue */}
            <button
              onClick={() => { onClose(); setTimeout(onReportIssue, 50); }}
              className="bg-white h-[56px] min-h-[56px] w-full flex items-center px-[16px] gap-[16px] active:bg-gray-50 transition-colors"
            >
              <div className="relative shrink-0 size-[24px]">
                <div
                  className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                  style={{ maskImage: `url("${imgBottomSheetMask}")`, maskPosition: "-3.5px -3.5px", maskSize: "24px 24px" }}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                    <path d={svgBottomSheetPaths.pde3b180} fill="black" />
                  </svg>
                </div>
              </div>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Report issue</span>
            </button>
          </div>

          {/* Divider */}
          <div className="px-[16px]"><div className="h-px bg-[#C7C5CE]" /></div>

          {/* Group notification toggle */}
          <div className="bg-white h-[56px] min-h-[56px] w-full flex items-center px-[16px] gap-[16px]">
            <div className="relative shrink-0 size-[24px]">
              <div
                className="absolute inset-[10.42%_18.75%_9.62%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                style={{ maskImage: `url("${imgBottomSheetMask}")`, maskPosition: "-4.5px -2.5px", maskSize: "24px 24px" }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" height="19.1923" preserveAspectRatio="none" viewBox="0 0 15 19.1923" width="15">
                  <path d={svgBottomSheetPaths.p3b858e00} fill="#484848" />
                </svg>
              </div>
            </div>
            <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Group notification</span>
            <button
              onClick={() => setNotifOn(v => !v)}
              className={clsx(
                "relative h-[32px] w-[52px] rounded-[100px] transition-colors duration-200 shrink-0",
                notifOn ? "bg-[#1441cc]" : "bg-[#787878]"
              )}
            >
              <motion.div
                className="absolute top-[2px] bg-white rounded-full size-[28px] shadow-sm"
                animate={{ left: notifOn ? "22px" : "2px" }}
                transition={{ type: "tween", duration: 0.18 }}
              />
            </button>
          </div>

          {/* Divider */}
          <div className="px-[16px]"><div className="h-px bg-[#C7C5CE]" /></div>

          {/* Leave group */}
          <button
            onClick={() => { onClose(); setTimeout(onLeaveGroup, 300); }}
            className="bg-white h-[56px] min-h-[56px] w-full flex items-center px-[16px] gap-[16px] active:bg-gray-50 transition-colors"
          >
            <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#d40000] leading-[24px] text-left" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Leave group</span>
            <div className="relative shrink-0 size-[24px]">
              <div
                className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                style={{ maskImage: `url("${imgBottomSheetMask}")`, maskPosition: "-3.5px -3.5px", maskSize: "24px 24px" }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgBottomSheetPaths.p1359ea00} fill="#D40000" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GroupMemberScreen({ group, onBack, onActivityLog, onRank, onMembers, onSubgroups, onTodayGoal, onMonthlyGoal, onDiscussion, onFacebookGroup, onSelectExam, onSelectQuickLink, isAdmin, onAdminPanel, onEditAnnouncement, onDeleteAnnouncement, onViewGroupRules, announcement, todayGoal, monthlyGoal }: { group: Group; onBack: () => void; onActivityLog: () => void; onRank: () => void; onMembers: () => void; onSubgroups: () => void; onTodayGoal: () => void; onMonthlyGoal: () => void; onDiscussion: () => void; onFacebookGroup: () => void; onSelectExam: (examName: string, isLive: boolean) => void; onSelectQuickLink: (link: QuickLink) => void; isAdmin?: boolean; onAdminPanel?: () => void; onEditAnnouncement?: () => void; onDeleteAnnouncement?: () => void; onViewGroupRules?: () => void; announcement: { title: string; body: string; date: string }; todayGoal: GoalDetailOverride; monthlyGoal: GoalDetailOverride }) {
  const [showSettings, setShowSettings] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
  const [showExamsInfo, setShowExamsInfo] = useState(false);
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [showAnnouncementActions, setShowAnnouncementActions] = useState(false);
  const [showDeleteAnnouncement, setShowDeleteAnnouncement] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence mode="wait">
        {showSettings && (
          isAdmin ? (
            <AdminGroupSettingsSheet
              onClose={() => setShowSettings(false)}
              onAdminPanel={() => onAdminPanel?.()}
              onGroupRules={() => onViewGroupRules?.()}
            />
          ) : (
            <GroupSettingsSheet
              onClose={() => setShowSettings(false)}
              onGroupRules={() => setShowRules(true)}
              onReportIssue={() => setShowReport(true)}
              onLeaveGroup={() => setShowLeaveConfirm(true)}
            />
          )
        )}
        {showAnnouncementActions && (
          <AnnouncementActionsSheet
            onClose={() => setShowAnnouncementActions(false)}
            onEdit={() => onEditAnnouncement?.()}
            onDelete={() => setShowDeleteAnnouncement(true)}
          />
        )}
        {showDeleteAnnouncement && (
          <DeleteAnnouncementDialog
            onCancel={() => setShowDeleteAnnouncement(false)}
            onConfirm={() => { setShowDeleteAnnouncement(false); onDeleteAnnouncement?.(); }}
          />
        )}
        {showRules && (
          <GroupRulesBottomSheet onClose={() => setShowRules(false)} />
        )}
        {showReport && (
          <ReportIssueDialog onClose={() => setShowReport(false)} />
        )}
        {showLeaveConfirm && (
          <LeaveGroupDialog
            onLeave={onBack}
            onStay={() => setShowLeaveConfirm(false)}
          />
        )}
        {showExamsInfo && (
          <MandatoryExamsInfoBottomSheet onClose={() => setShowExamsInfo(false)} />
        )}
        {showAdminDetails && (
          <AdminDetailsBottomSheet
            name={group.admin}
            rating={group.adminRating}
            since={group.createdDate}
            onClose={() => setShowAdminDetails(false)}
          />
        )}
      </AnimatePresence>

      {/* App bar */}
      <div className="bg-white shrink-0">
        <div className="flex items-center justify-between px-1 h-12">
          <button
            onClick={onBack}
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <p className="absolute left-14 right-14 font-['Noto_Sans',sans-serif] text-[18px] font-normal text-black leading-7 truncate pointer-events-none">
            Study Group
          </p>
          <button
            onClick={() => setShowSettings(true)}
            aria-label="Group settings"
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24">
              <mask id="m-more" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" height="24">
                <rect fill="#D9D9D9" width="24" height="24" />
              </mask>
              <g mask="url(#m-more)">
                <path d={svgMember.p2a1bd980} fill="#484848" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Announcement banner */}
        {announcement.title && (
          <div className="bg-[#ffa366] px-4 py-3 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <svg className="size-6 shrink-0" fill="none" viewBox="0 0 20 16">
                <path d={svgMember.p355d9980} fill="black" />
              </svg>
              <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                {announcement.title}
              </span>
              {isAdmin && (
                <button
                  onClick={() => setShowAnnouncementActions(true)}
                  aria-label="Announcement actions"
                  className="size-6 flex items-center justify-center shrink-0 active:opacity-70 transition-opacity"
                >
                  <svg className="size-6" fill="none" viewBox="0 0 24 24">
                    <mask id="m-more-announcement" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" height="24">
                      <rect fill="#D9D9D9" width="24" height="24" />
                    </mask>
                    <g mask="url(#m-more-announcement)">
                      <path d={svgMember.p2a1bd980} fill="black" />
                    </g>
                  </svg>
                </button>
              )}
            </div>
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              {announcement.body}
            </p>
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#78360b] leading-[16px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              {announcement.date}
            </p>
          </div>
        )}

        {/* Group info card */}
        <div className="flex flex-col gap-4 px-4 py-4">
          <div className="flex gap-3 items-start">
            <GroupLogo size={60} seed={group.id} />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]">{group.name}</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="bg-[#eaeef6] rounded-[4px] px-2 h-5 flex items-center">
                    <span className="font-['Noto_Sans',sans-serif] text-[10px] font-medium text-[#484848]">{group.category}</span>
                  </div>
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#484848]">Created: {group.createdDate}</span>
                </div>
                <button onClick={() => setShowAdminDetails(true)} className="flex items-center gap-1 active:opacity-70 transition-opacity">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848]">Admin: {group.admin}</span>
                  <Info className="size-[18px] text-[#484848]" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={onRank} className="text-left active:opacity-60 transition-opacity">
                  <p className="font-['Noto_Sans',sans-serif] font-semibold text-[12px] text-black leading-[16px]">{group.rank}</p>
                  <p className="font-['Noto_Sans',sans-serif] text-[12px] text-black leading-[16px]">Rank</p>
                </button>
                <span className="text-[#484848] text-[12px]">›</span>
                <button onClick={onMembers} className="text-left active:opacity-60 transition-opacity">
                  <p className="font-['Noto_Sans',sans-serif] font-semibold text-[12px] text-black leading-[16px]">{group.members}</p>
                  <p className="font-['Noto_Sans',sans-serif] text-[12px] text-black leading-[16px]">Members</p>
                </button>
                <span className="text-[#484848] text-[12px]">›</span>
                <button onClick={onSubgroups} className="text-left active:opacity-60 transition-opacity">
                  <p className="font-['Noto_Sans',sans-serif] font-semibold text-[12px] text-black leading-[16px]">{group.subgroups}</p>
                  <p className="font-['Noto_Sans',sans-serif] text-[12px] text-black leading-[16px]">Subgroups</p>
                </button>
                <span className="text-[#484848] text-[12px]">›</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={onDiscussion}
              className="flex-1 h-12 bg-[#1441cc] rounded-full flex items-center justify-center gap-2 active:opacity-90 transition-opacity"
            >
              <svg className="size-5" fill="none" viewBox="0 0 20 9">
                <path d={svgMember.p28639a00} fill="white" />
              </svg>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-[20px]">Discussion</span>
            </button>
            <button
              onClick={onFacebookGroup}
              className="flex-1 h-12 rounded-full border border-[#c7c7c7] flex items-center justify-center gap-2 active:bg-gray-50 transition-colors"
            >
              <svg className="size-5 shrink-0" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" rx="8" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  fill="#0866FF"
                />
              </svg>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-[20px]">Facebook Group</span>
            </button>
          </div>
        </div>

        {/* Group activities */}
        <div className="flex flex-col gap-4 pb-4">
          <div className="flex items-center justify-between px-4">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Group activities
            </span>
            <button onClick={onActivityLog} className="flex items-center gap-2 px-4 py-2 rounded-full active:opacity-70 transition-opacity">
              <svg className="size-5" fill="none" viewBox="0 0 14 15">
                <path d={svgMember.p267221f0} fill="#1441CC" />
              </svg>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc] leading-[20px]">Activity log</span>
            </button>
          </div>

          {/* Goal cards */}
          <div className="flex gap-2 px-4">
            {/* Today's Goal */}
            <button
              onClick={onTodayGoal}
              className="flex-1 bg-white rounded-[12px] border border-[#e3e3e3] p-2 flex flex-col gap-3 text-left active:opacity-70 transition-opacity"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]">Today's Goal</span>
                <ChevronDown className="size-5 text-[#787878] -rotate-90" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-[16px]">{todayGoal.attended} / {todayGoal.bigCount}</span>
                <GoalProgressBar value={todayGoal.attended} total={todayGoal.bigCount} />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]">Today's Attendance</span>
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-black leading-[16px]">{todayGoal.goalPct.toFixed(0)}%</span>
              </div>
            </button>
            {/* Monthly Goal */}
            <button
              onClick={onMonthlyGoal}
              className="flex-1 bg-white rounded-[12px] border border-[#e3e3e3] p-2 flex flex-col gap-3 text-left active:opacity-70 transition-opacity"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]">Monthly Goal</span>
                <ChevronDown className="size-5 text-[#787878] -rotate-90" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-[16px]">{monthlyGoal.attended} / {monthlyGoal.bigCount}</span>
                <GoalProgressBar value={monthlyGoal.attended} total={monthlyGoal.bigCount} />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]">Monthly Attendance</span>
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-black leading-[16px]">{monthlyGoal.goalPct.toFixed(0)}%</span>
              </div>
            </button>
          </div>
        </div>

        {/* Today's activities */}
        <div className="flex flex-col gap-4 px-4 pb-4">
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px]">Today's activities</span>
            <div className="flex items-center gap-1">
              <TimerIcon />
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]">23h 59m 24s</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {MEMBER_EXAMS.map((exam, i) => <ActivityCard key={i} exam={exam} onSelectQuickLink={onSelectQuickLink} />)}
          </div>
        </div>

        {/* Bottom tiles */}
        <div className="px-4 pb-4">
          <ExamQuickLinks onSelect={onSelectQuickLink} />
        </div>

        {/* Mandatory exams */}
        <div className="px-4 pb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              বাধ্যতামূলক পরীক্ষাসমূহ
            </span>
            <button
              onClick={() => setShowExamsInfo(true)}
              className="size-6 flex items-center justify-center shrink-0"
            >
              <Info className="size-[19px] text-[#484848]" strokeWidth={1.75} />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {MANDATORY_EXAMS.map((exam, i) => (
              <button
                key={i}
                onClick={() => onSelectExam(exam.name, exam.isLive)}
                className="h-12 bg-[#f4f6fa] rounded-[8px] flex items-center px-4 gap-2 text-left active:opacity-70 transition-opacity"
              >
                <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px] truncate" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                  {exam.name}
                </span>
                {exam.isLive && (
                  <div className="bg-red-500 flex items-center gap-1 px-2 rounded-[8px] shrink-0">
                    <div className="size-[6px] rounded-full bg-white" />
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-white leading-[16px]">Live</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Screen: Admin Panel ────────────────────────────────────────────────────────

function AdminPanelScreen({
  group,
  onBack,
  onSelectItem,
  onMyGroup,
  onAddMember,
}: {
  group: Group;
  onBack: () => void;
  onSelectItem: (item: typeof ADMIN_PANEL_ITEMS[number]) => void;
  onMyGroup: () => void;
  onAddMember: () => void;
}) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title="Admin Panel" onBack={onBack} />

      <div className="flex-1 overflow-y-auto">
        {/* Group summary row */}
        <button
          onClick={onMyGroup}
          className="w-full flex items-center gap-4 px-4 py-2 h-[72px] active:bg-gray-50 transition-colors text-left"
        >
          <GroupLogo size={56} seed={group.id} />
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] truncate" style={ns}>
              {group.name}
            </p>
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-[20px] truncate" style={ns}>
              {group.category} • Rank #{group.rank}/{GROUPS.length} • {(group.monthlyGoal * 0.65).toFixed(1)} GP
            </p>
          </div>
          <ChevronRight className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
        </button>

        {/* Joining requested — first row gets the 72px "supporting text" treatment, rest are 56px */}
        <button
          onClick={() => onSelectItem(ADMIN_PANEL_ITEMS[0])}
          className="w-full flex items-center gap-4 px-4 py-2 h-[72px] active:bg-gray-50 transition-colors text-left"
        >
          <UserPlus className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={ns}>
              Joining requested
            </p>
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-[20px]" style={ns}>
              {JOINING_REQUESTS.length} pending • needs your review
            </p>
          </div>
          <ChevronRight className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
        </button>

        {/* Remaining rows, with a trailing count/status where Figma shows one */}
        {([
          { item: ADMIN_PANEL_ITEMS[1], trailing: "Non active" },
          { item: ADMIN_PANEL_ITEMS[2], trailing: `${group.members} total` },
          { item: ADMIN_PANEL_ITEMS[3], trailing: `${group.subgroups} groups` },
          { item: ADMIN_PANEL_ITEMS[4], trailing: "4 categories" },
          { item: ADMIN_PANEL_ITEMS[5], trailing: null },
          { item: ADMIN_PANEL_ITEMS[6], trailing: null },
        ] as const).map(({ item, trailing }) => (
          <button
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="w-full flex items-center gap-4 px-4 py-2 h-[56px] active:bg-gray-50 transition-colors text-left"
          >
            <item.Icon className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
            <span className="flex-1 min-w-0 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] truncate" style={ns}>
              {item.label}
            </span>
            {trailing && (
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#484848] leading-[16px] shrink-0" style={ns}>
                {trailing}
              </span>
            )}
            <ChevronRight className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
          </button>
        ))}
      </div>

      {/* Sticky bottom CTA */}
      <div className="shrink-0 p-3">
        <button
          onClick={onAddMember}
          className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center gap-2 active:opacity-90 transition-opacity"
        >
          <UserPlus className="size-6 text-white" strokeWidth={1.5} />
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]" style={ns}>
            Add new member
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Screen: Admin / Announcement ────────────────────────────────────────────────

function AnnouncementField({ label, value, onChange, multiline }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  const Comp = multiline ? "textarea" : "input";
  return (
    <div className={clsx("relative", multiline ? "h-[200px]" : "h-[56px]")}>
      <div className="absolute inset-0 border border-[#787878] rounded-[12px] pointer-events-none" />
      <Comp
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value)}
        className={clsx(
          "absolute inset-0 w-full h-full pl-4 pr-12 bg-transparent font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black outline-none rounded-[12px]",
          multiline && "pt-3 resize-none",
        )}
        style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
      />
      <span className="absolute -top-[10px] left-3 bg-white px-1 font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-4">
        {label}
      </span>
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label={`Clear ${label}`}
          className="absolute right-1 top-3 size-10 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
        >
          <XCircle className="size-5 text-[#484848]" strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}

function AdminAnnouncementScreen({ initialTitle = "", initialDescription = "", onBack, onCancel, onUpdate }: { initialTitle?: string; initialDescription?: string; onBack: () => void; onCancel: () => void; onUpdate: (title: string, description: string) => void }) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const canUpdate = title.trim() !== "" && description.trim() !== "";

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title="Announcement" onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-4 pt-6 flex flex-col gap-4">
        <AnnouncementField label="Title" value={title} onChange={setTitle} />
        <AnnouncementField label="Description" value={description} onChange={setDescription} multiline />
      </div>

      <div className="shrink-0 flex items-center gap-3 p-3">
        <button onClick={onCancel} className="px-6 h-12 rounded-full border border-[#c7c7c7] flex items-center justify-center active:bg-gray-50 transition-colors">
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#484848]">Cancel</span>
        </button>
        <button
          disabled={!canUpdate}
          onClick={() => onUpdate(title, description)}
          className={clsx(
            "flex-1 h-12 rounded-full flex items-center justify-center transition-colors",
            canUpdate ? "bg-[#1441cc] active:opacity-90" : "bg-black/10 cursor-not-allowed",
          )}
        >
          <span className={clsx("font-['Noto_Sans',sans-serif] font-medium text-[16px] tracking-[0.15px]", canUpdate ? "text-white" : "text-black opacity-38")}>
            Update
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Screen: Admin / Group Rules ─────────────────────────────────────────────────

const DEFAULT_ADMIN_GROUP_RULES_TEXT = "সকল সদস্যের জন্য অংশগ্রহণ বাধ্যতামূলক। মানবণ্টন: ৫০, সময়: ৩০ মিনিট। পরীক্ষা শেষে সমাধান শেয়ার করা হবে। নিয়মিত অংশগ্রহণ আপনার অ্যাটেনডেন্স স্কোরে যুক্ত হবে।";

function AdminGroupRulesScreen({ onBack, onSave }: { onBack: () => void; onSave: () => void }) {
  const [rules, setRules] = useState(DEFAULT_ADMIN_GROUP_RULES_TEXT);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title="Group rules" onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-4 pt-6">
        <AnnouncementField label="Edit group rules" value={rules} onChange={setRules} multiline />
      </div>

      <div className="shrink-0 p-3">
        <button
          onClick={onSave}
          className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity"
        >
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Save</span>
        </button>
      </div>
    </div>
  );
}

// ── Screen: Admin / Group Rules (read-only view) ──────────────────────────────────

const ADMIN_GROUP_RULES_BODY_TEXT = `- নিয়মিত পরীক্ষা দিতে হবে। প্রতিযোগিতার মাধ্যমে নিজেকে পুশ করুন। হতাশ হবেন না। পাশ ফেল নিয়ে অতিরিক্ত না ভেবে পড়াশুনা করে লাইভ পরীক্ষা দিন। মূল পরীক্ষায় এটা আপনাকে অনেক সাহায্য করবে।

- নিয়মিত লাইভ পরীক্ষায় অংশগ্রহণ না করলে গ্রুপের মেম্বারশিপ বাতিল করে দেয়া হবে।
সেক্ষেত্রে পূর্ববর্তী ১৫ দিনের পরীক্ষাসমূহে আপনার উপস্থিতিঃ
ক) ৫০% এর নিচে হলে "সতর্কতামূলক মেসেজ" দেখাবে।
খ) ৩০% এর নিচে হলে গ্রুপ এডমিন আপনাকে গ্রুপ থেকে রিমুভ করে দিবেন।

- একান্ত ব্যক্তিগত আলোচনা নিষিদ্ধ। তবে, নিজেদের মধ্যে আড্ডা-গল্প হতেই পারে।
- কোন ধরনের বিজ্ঞাপনমূলক পোস্ট কিংবা অযাচিত লিংক শেয়ার করা যাবে না।
- অপর সদস্যদের মতামতকে সম্মান দিয়ে আলোচনা করতে হবে।
- এডমিন সম্পর্কে কোন অভিযোগ থাকলে সরাসরি Live MCQ পেজে মেসেজ দিয়ে জানাতে পারবেন। সেক্ষেত্রে, আমরা এডমিনের সাথে কথা বলব।

আশা করি Live MCQ অফিসিয়াল স্টাডি গ্রুপগুলো আপনাদের প্রস্তুতিতে যথেষ্ট সহায়তা করবে।
পাশাপাশি, পারস্পরিক সম্মান ও সহযোগিতার মনোভাব নিয়ে গ্রুপে একটি প্রাণবন্ত পরিবেশ বজায় রাখবেন এই কামনা করছি।

শুভকামনায়,
Live MCQ Team.`;

function AdminGroupRulesViewScreen({ group, onBack }: { group: Group; onBack: () => void }) {
  const zoneRows = [
    { color: ZONES.red.border, label: "Red Zone Attendance", value: "10%" },
    { color: ZONES.yellow.border, label: "Yellow Zone Attendance", value: "20%" },
    { color: ZONES.green.border, label: "Green Zone Attendance", value: "70%" },
  ];

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title="Group rules" onBack={onBack} />

      <div className="flex-1 overflow-y-auto flex flex-col gap-4 px-4 pt-4 pb-6">
        <div className="border border-[#e3e3e3] rounded-[12px] p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">Status</span>
            <div className="bg-[#0c5fff] rounded-[4px] px-2 h-5 flex items-center shrink-0">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-white leading-4">Open to Join</span>
            </div>
          </div>
          <div className="h-px bg-[#e3e3e3]" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-5">Member Limit</span>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">300</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-5">Subgroup Member Limit</span>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">20</span>
            </div>
          </div>
        </div>

        <div className="border border-[#e3e3e3] rounded-[12px] p-3 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">Monthly Goal</span>
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">{group.monthlyGoal}</span>
          </div>
          <div className="h-px bg-[#e3e3e3]" />
          <div className="flex flex-col gap-4">
            {zoneRows.map(row => (
              <div key={row.label} className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-5">{row.label}</span>
                </div>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5 mb-2">গ্রুপের সাধারণ নিয়মাবলীঃ</p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-5 whitespace-pre-wrap">{ADMIN_GROUP_RULES_BODY_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

// ── Screen: Admin / Group Settings ──────────────────────────────────────────────

function ToggleSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={clsx("relative h-[32px] w-[52px] rounded-[100px] transition-colors duration-200 shrink-0", on ? "bg-[#1441cc]" : "bg-[#787878]")}
    >
      <motion.div
        className="absolute top-[2px] bg-white rounded-full size-[28px] shadow-sm"
        animate={{ left: on ? "22px" : "2px" }}
        transition={{ type: "tween", duration: 0.18 }}
      />
    </button>
  );
}

// Dual-handle range slider that splits 0–100% attendance into red/yellow/green zones.
// Dragging either handle (via pointer events on the whole window, so the drag survives
// leaving the thin track) keeps the two boundaries at least 1% apart and re-derives the
// legend rows below from their positions instead of three independent, easily-inconsistent
// number fields.
function ZoneThresholdSlider({ mid, high, onChange }: { mid: number; high: number; onChange: (mid: number, high: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<"mid" | "high" | null>(null);

  useEffect(() => {
    if (!dragging) return;
    function pctFromClientX(clientX: number) {
      const rect = trackRef.current!.getBoundingClientRect();
      return Math.min(100, Math.max(0, Math.round(((clientX - rect.left) / rect.width) * 100)));
    }
    function handleMove(e: PointerEvent) {
      const pct = pctFromClientX(e.clientX);
      if (dragging === "mid") onChange(Math.min(pct, high - 1), high);
      else onChange(mid, Math.max(pct, mid + 1));
    }
    function handleUp() { setDragging(null); }
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging, mid, high, onChange]);

  const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div className="flex flex-col gap-1 px-4">
      <div ref={trackRef} className="relative h-8 flex items-center touch-none">
        <div className="absolute inset-x-0 h-2 rounded-full overflow-hidden flex">
          <div className="h-full" style={{ width: `${mid}%`, backgroundColor: ZONES.red.bg }} />
          <div className="h-full" style={{ width: `${high - mid}%`, backgroundColor: ZONES.yellow.bg }} />
          <div className="h-full" style={{ width: `${100 - high}%`, backgroundColor: ZONES.green.bg }} />
        </div>
        {ticks.map(t => (
          <div
            key={t}
            className="absolute size-[3px] rounded-full bg-black/25 -translate-x-1/2 pointer-events-none"
            style={{ left: `${t}%` }}
          />
        ))}
        {([["mid", mid, ZONES.red.border], ["high", high, ZONES.green.border]] as const).map(([handle, pos]) => (
          <button
            key={handle}
            onPointerDown={() => setDragging(handle)}
            aria-label={`${handle === "mid" ? "Red/Yellow" : "Yellow/Green"} zone boundary`}
            className="absolute w-1 h-6 bg-black rounded-full -translate-x-1/2 cursor-ew-resize touch-none"
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>
      <div className="relative h-4">
        <span className="absolute left-0 font-['Noto_Sans',sans-serif] font-normal text-[10px] text-[#8f8d8d] leading-4">0%</span>
        <span className="absolute -translate-x-1/2 font-['Noto_Sans',sans-serif] font-normal text-[10px] text-[#8f8d8d] leading-4" style={{ left: `${mid}%` }}>{mid}%</span>
        <span className="absolute -translate-x-1/2 font-['Noto_Sans',sans-serif] font-normal text-[10px] text-[#8f8d8d] leading-4" style={{ left: `${high}%` }}>{high}%</span>
        <span className="absolute right-0 font-['Noto_Sans',sans-serif] font-normal text-[10px] text-[#8f8d8d] leading-4">100%</span>
      </div>
    </div>
  );
}

function ZoneThresholdLegendRow({ color, label, range }: { color: string; label: string; range: string }) {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="size-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
        <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-5">{label}</span>
      </div>
      <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-5">{range}</span>
    </div>
  );
}

function AdminGroupSettingsScreen({ onBack, onSave, group, monthlyGoalTarget }: { onBack: () => void; onSave: (monthlyGoal: number) => void; group: Group; monthlyGoalTarget: number }) {
  const [takingNewMembers, setTakingNewMembers] = useState(false);
  // Defaults trace to the real group data instead of independent placeholder numbers —
  // member limit is the group's real maxMembers, subgroup limit matches MAX_SUBGROUP_MEMBERS
  // (the same cap CreateSubgroupScreen enforces), and "Monthly goal (exams)" starts at the
  // real must-have exam capacity for the whole roster this month (monthlyGoalTarget, passed
  // in from PrototypeApp) — saving here actually updates the group-level Monthly Goal
  // card/page instead of only changing this screen's own local state.
  const [memberLimit, setMemberLimit] = useState(String(group.maxMembers));
  const [subgroupLimit, setSubgroupLimit] = useState(String(MAX_SUBGROUP_MEMBERS));
  const [monthlyGoal, setMonthlyGoal] = useState(String(monthlyGoalTarget));
  // Matches ZONES' real red/yellow/green boundaries (below 60% / 60–79% / 80%+), not
  // separately-guessed slider defaults.
  const [midThreshold, setMidThreshold] = useState(59);
  const [highThreshold, setHighThreshold] = useState(79);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title="Group settings" onBack={onBack} />

      <div className="flex-1 overflow-y-auto flex flex-col gap-6 pt-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 px-4 py-2 min-h-[72px]">
            <ToggleSwitch on={takingNewMembers} onToggle={() => setTakingNewMembers(v => !v)} />
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">Taking new members</p>
              <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-5">When off, new join requests can't be submitted</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <AnnouncementField label="Member limit" value={memberLimit} onChange={setMemberLimit} />
            <AnnouncementField label="Subgroup member limit" value={subgroupLimit} onChange={setSubgroupLimit} />
            <AnnouncementField label="Monthly goal (exams)" value={monthlyGoal} onChange={setMonthlyGoal} />
          </div>
        </div>

        <div className="mx-4 h-px bg-[#c7c5ce]" />

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 px-4">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black tracking-[0.1px] leading-5">Zone thresholds</span>
            <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-4">Based on member attendance percentage</span>
          </div>
          <ZoneThresholdSlider
            mid={midThreshold}
            high={highThreshold}
            onChange={(mid, high) => { setMidThreshold(mid); setHighThreshold(high); }}
          />
          <div className="flex flex-col gap-2 pt-1">
            <ZoneThresholdLegendRow color={ZONES.red.border} label="Red zone attendance" range={`0 to ${midThreshold}%`} />
            <ZoneThresholdLegendRow color={ZONES.yellow.border} label="Yellow zone attendance" range={`${midThreshold + 1} to ${highThreshold}%`} />
            <ZoneThresholdLegendRow color={ZONES.green.border} label="Green zone attendance" range={`${highThreshold + 1} to 100%`} />
          </div>
        </div>
      </div>

      <div className="shrink-0 p-3">
        <button
          onClick={() => onSave(Number(monthlyGoal) || monthlyGoalTarget)}
          className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity"
        >
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Save</span>
        </button>
      </div>
    </div>
  );
}

// ── Screen: Admin / Exam Customisation ──────────────────────────────────────────

interface ExamCustomItem { id: string; label: string; checked: boolean }
interface ExamCustomCategory { id: string; label: string; Icon: LucideIcon; expanded: boolean; items: ExamCustomItem[] }

// Built from the real MANDATORY_EXAMS list (the same 7 exams shown on Today's/Monthly Goal),
// grouped by real cadence — 1 weekly, 5 daily, 1 monthly — instead of a separately hand-typed
// 5-item subset that didn't cover the full list.
const EXAM_CUSTOM_CATEGORIES: ExamCustomCategory[] = [
  {
    id: "weekly", label: "সাপ্তাহিক পরীক্ষা", Icon: Gift, expanded: true,
    items: MANDATORY_EXAMS.slice(0, 1).map((exam, i) => ({ id: `weekly-${i + 1}`, label: exam.name, checked: true })),
  },
  {
    id: "daily", label: "দৈনিক পরীক্ষা", Icon: Wallet, expanded: true,
    items: MANDATORY_EXAMS.slice(1, 6).map((exam, i) => ({ id: `daily-${i + 1}`, label: exam.name, checked: true })),
  },
  {
    id: "monthly", label: "মাসিক পরীক্ষা", Icon: Landmark, expanded: false,
    items: MANDATORY_EXAMS.slice(6, 7).map((exam, i) => ({ id: `monthly-${i + 1}`, label: exam.name, checked: true })),
  },
];

function AdminExamCustomisationScreen({ onBack, onSave }: { onBack: () => void; onSave: () => void }) {
  const [categories, setCategories] = useState(EXAM_CUSTOM_CATEGORIES);

  function toggleExpanded(categoryId: string) {
    setCategories(prev => prev.map(c => c.id === categoryId ? { ...c, expanded: !c.expanded } : c));
  }

  function toggleItem(categoryId: string, itemId: string) {
    setCategories(prev => prev.map(c =>
      c.id === categoryId
        ? { ...c, items: c.items.map(i => i.id === itemId ? { ...i, checked: !i.checked } : i) }
        : c
    ));
  }

  const totalButtons = categories.reduce((sum, c) => sum + c.items.filter(i => i.checked).length, 0);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <div className="shrink-0 relative flex items-center justify-between px-1 h-14 bg-white">
        <button
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <div className="absolute left-14 right-14 flex flex-col">
          <p className="font-['Noto_Sans',sans-serif] text-[18px] font-normal text-black leading-7 truncate">Exam Customisation</p>
          <p className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4 truncate">Customise exam buttons</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-2">
        {categories.map(category => (
          <div key={category.id} className="flex flex-col gap-2 py-3">
            <button
              onClick={() => toggleExpanded(category.id)}
              className="flex items-center justify-between gap-3 active:opacity-70 transition-opacity"
            >
              <div className="flex-1 min-w-0 flex items-center gap-3">
                <category.Icon className="size-5 text-black shrink-0" strokeWidth={1.5} />
                <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6 text-left">{category.label}</span>
              </div>
              <ChevronDown className={clsx("size-6 text-black shrink-0 transition-transform", category.expanded && "rotate-180")} strokeWidth={1.5} />
            </button>
            {category.expanded && (
              <div className="flex flex-col gap-2">
                {category.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(category.id, item.id)}
                    className="bg-[#f4f6fa] rounded-[8px] h-14 flex items-center gap-2 px-2 active:opacity-80 transition-opacity"
                  >
                    <div
                      className={clsx(
                        "size-[18px] rounded-[2px] shrink-0 flex items-center justify-center",
                        item.checked ? "bg-[#1441cc]" : "border-2 border-[#787878]",
                      )}
                    >
                      {item.checked && <Check className="size-3.5 text-white" strokeWidth={3} />}
                    </div>
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6 text-left">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="shrink-0 border-t border-[#c7c5ce] flex flex-col gap-4 px-4 pt-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Total buttons</span>
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">{totalButtons}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Total exams per month*</span>
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">24</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Monthly achievable goal*</span>
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">2400</span>
          </div>
          <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">*Estimated value</span>
        </div>
        <div className="p-3 pt-0">
          <button
            onClick={onSave}
            className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Screen: Admin / Joining Requests ────────────────────────────────────────────

interface JoiningRequest {
  name: string;
  degree: string;
  level: number;
  exams: number;
  memberId: string;
  since: string;
  rating: string;
  preparingFor: string;
  gender: string;
  birthday: string;
  majorSubject: string;
  institute: string;
  district: string;
  notes: string;
}

const JOINING_REQUESTS: JoiningRequest[] = [
  { name: "Fatima Khan", degree: "MCA", level: 3, exams: 220, memberId: "WS235", since: "23 Mar 2023", rating: "A", preparingFor: "BCS", gender: "Female", birthday: "12 Jan", majorSubject: "Economics", institute: "Dhaka University", district: "Dhaka", notes: "Please accept my joining request. I have been preparing for BCS for the last year and would love to study alongside this group." },
  { name: "Tariq Hossain", degree: "BSC", level: 2, exams: 180, memberId: "WS234", since: "23 Mar 2023", rating: "B", preparingFor: "Bank", gender: "Male", birthday: "5 Jul", majorSubject: "Finance", institute: "Chittagong University", district: "Chattogram", notes: "Please accept my joining request. Looking forward to the daily quizzes and mock exams." },
  { name: "Sofia Ahmed", degree: "BBA", level: 1, exams: 300, memberId: "WS233", since: "23 Mar 2023", rating: "A", preparingFor: "NTRCA", gender: "Female", birthday: "30 Sep", majorSubject: "Education", institute: "Rajshahi University", district: "Rajshahi", notes: "Please accept my joining request. I need consistent group study to stay on track." },
  { name: "Rahul Das", degree: "MCS", level: 3, exams: 250, memberId: "WS232", since: "23 Mar 2023", rating: "B", preparingFor: "BCS", gender: "Male", birthday: "18 Nov", majorSubject: "Computer Science", institute: "Khulna University", district: "Khulna", notes: "Please accept my joining request. This group's rank looks great, hoping to contribute." },
  { name: "Amina Jahan", degree: "BBA", level: 2, exams: 150, memberId: "WS231", since: "23 Mar 2023", rating: "C", preparingFor: "Bank", gender: "Female", birthday: "24 Dec", majorSubject: "English", institute: "University of Dhaka", district: "Dhaka", notes: "Please accept my joining request. Vestibulum tempus imperdiet sem ac porttitor. Vivamus pulvinar commodo orci, suscipit porttitor velit elementum non. Fusce nec pellentesque erat, id lobortis nunc." },
];

function RatingBadge({ letter, size = 20 }: { letter: string; size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9.5" stroke="#484848" />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-none">{letter}</span>
    </div>
  );
}

function RequestCard({ request, onSelect }: { request: JoiningRequest; onSelect: () => void }) {
  return (
    <button onClick={onSelect} className="bg-[#f4f6fa] rounded-[12px] p-3 flex flex-col gap-2 text-left active:opacity-70 transition-opacity">
      <div className="flex items-center gap-2">
        <MemberAvatar size={25} name={request.name} />
        <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{request.name}</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-[#eaeef6] rounded-[4px] px-2 h-5 flex items-center shrink-0">
          <span className="font-['Noto_Sans',sans-serif] text-[10px] font-medium text-[#484848]">{request.degree}</span>
        </div>
        <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4">
          Level {request.level} • {request.exams} Exams
        </span>
      </div>
      <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4">
        ID: {request.memberId} • User since {request.since}
      </span>
    </button>
  );
}

// Detail sheet shown when a request card is tapped — lets the admin review the applicant
// and accept/reject in place, matching the Figma "Bottom Sheet" for Joining requests.
function JoiningRequestDetailSheet({ request, onClose, onReject, onAccept }: { request: JoiningRequest; onClose: () => void; onReject: () => void; onAccept: () => void }) {
  const infoRows: Array<[string, string]> = [
    ["Preparing for", request.preparingFor],
    ["Gender", request.gender],
    ["Birthday", request.birthday],
    ["Major subject", request.majorSubject],
    ["Educational institute", request.institute],
    ["Home district", request.district],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-6">
          <div className="flex gap-6 items-start px-4">
            <MemberAvatar size={80} name={request.name} />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{request.name}</span>
                  <RatingBadge letter={request.rating} />
                </div>
                <div className="flex gap-6 items-start">
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">ID: {request.memberId}</span>
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">User since: {request.since}</span>
                </div>
              </div>
              <div className="flex gap-6 items-center h-6">
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Level {request.level}</span>
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Total exam: {request.exams}</span>
              </div>
              <button className="self-start h-12 flex items-center justify-center active:opacity-90 transition-opacity">
                <div className="bg-[#1441cc] rounded-full flex items-center justify-center px-4 py-2.5 w-[97px]">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-5">Contact</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4">
            <div className="flex gap-3 items-center">
              <div className="flex-1 h-px bg-[#c7c5ce]" />
              <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4 shrink-0">Member Details</span>
              <div className="flex-1 h-px bg-[#c7c5ce]" />
            </div>
            <div className="flex flex-col gap-4">
              {infoRows.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">{label}</span>
                  <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5 text-right">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4">Notes</span>
              <div className="bg-white border border-[#e3e3e3] rounded p-2.5">
                <p className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">{request.notes}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center p-3 shrink-0">
          <button
            onClick={onReject}
            className="flex-1 h-12 rounded-full border border-[#c7c7c7] flex items-center justify-center active:bg-gray-50 transition-colors"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#484848] tracking-[0.15px]">Reject</span>
          </button>
          <button
            onClick={onAccept}
            className="flex-1 h-12 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Accept</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Header that swaps between a normal title bar and an inline search field, e.g. the
// "Joining requests" and "Group members" admin lists. `onExit` clears the query and
// returns to the title bar.
function InlineSearchHeader({
  title,
  onBack,
  searching,
  onStartSearch,
  query,
  onQueryChange,
  onExit,
  placeholder,
  trailing,
}: {
  title: string;
  onBack: () => void;
  searching: boolean;
  onStartSearch: () => void;
  query: string;
  onQueryChange: (v: string) => void;
  onExit: () => void;
  placeholder: string;
  trailing?: React.ReactNode;
}) {
  if (!searching) {
    return (
      <div className="relative flex items-center justify-between px-1 h-12 bg-white shrink-0">
        <button
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <p className="absolute left-14 right-[104px] font-['Noto_Sans',sans-serif] text-[18px] font-normal text-black leading-7 truncate">
          {title}
        </p>
        <div className="flex items-center shrink-0">
          <button
            onClick={onStartSearch}
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <Search className="size-6 text-[#484848]" strokeWidth={1.5} />
          </button>
          {trailing}
        </div>
      </div>
    );
  }
  return (
    <div className="shrink-0 border-b border-[#c7c5ce]">
      <div className="flex items-center gap-1 px-1">
        <button
          onClick={onExit}
          className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors shrink-0"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <input
          autoFocus
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 h-12 bg-transparent outline-none font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black placeholder:text-[#787878] placeholder:font-normal"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            aria-label="Clear"
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors shrink-0"
          >
            <X className="size-6 text-[#484848]" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
}

function AdminJoiningRequestsScreen({ onBack }: { onBack: () => void }) {
  const [requests, setRequests] = useState<JoiningRequest[]>(JOINING_REQUESTS);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<JoiningRequest | null>(null);

  const filtered = query.trim()
    ? requests.filter(r => r.name.toLowerCase().includes(query.trim().toLowerCase()))
    : requests;

  function resolve(memberId: string) {
    setRequests(prev => prev.filter(r => r.memberId !== memberId));
    setSelected(null);
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {selected && (
          <JoiningRequestDetailSheet
            request={selected}
            onClose={() => setSelected(null)}
            onReject={() => resolve(selected.memberId)}
            onAccept={() => resolve(selected.memberId)}
          />
        )}
      </AnimatePresence>

      <InlineSearchHeader
        title="Joining requests"
        onBack={onBack}
        searching={searching}
        onStartSearch={() => setSearching(true)}
        query={query}
        onQueryChange={setQuery}
        onExit={() => { setSearching(false); setQuery(""); }}
        placeholder="Search by name"
      />

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 h-12 flex items-center">
          <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">
            {filtered.length} pending
          </span>
        </div>
        <div className="flex flex-col gap-1 px-4 pb-4">
          {filtered.map(req => (
            <RequestCard key={req.memberId} request={req} onSelect={() => setSelected(req)} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Screen: Admin / My Group ───────────────────────────────────────────────────

const GROUP_LINKS = [
  { id: "facebook", label: "Facebook group", editable: false },
  { id: "discussion", label: "Discussion group", editable: true },
] as const;

const DEFAULT_GROUP_LINK_URL = "https://www.facebook.com/groups/233073808618602";

function EditDiscussionGroupDialog({ url, onCancel, onSave }: { url: string; onCancel: () => void; onSave: (url: string) => void }) {
  const [value, setValue] = useState(url);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden"
      >
        <div className="pt-[12px] px-[12px] flex flex-col gap-[16px]">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Discussion group
          </p>
          <div className="relative h-[56px]">
            <div className="absolute inset-0 border border-[#787878] rounded-[12px] pointer-events-none" />
            <input
              value={value}
              onChange={e => setValue(e.target.value)}
              className="absolute inset-0 w-full h-full pl-[16px] pr-[48px] bg-transparent font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black outline-none rounded-[12px]"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            />
            <span className="absolute -top-[10px] left-[12px] bg-[#f4f6fa] px-[4px] font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]">
              Add link here
            </span>
            {value && (
              <button
                onClick={() => setValue("")}
                aria-label="Clear"
                className="absolute right-[4px] top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full active:bg-gray-200 transition-colors"
              >
                <X className="size-5 text-[#484848]" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </div>
        <div className="flex gap-[8px] items-center p-[12px]">
          <button
            onClick={onCancel}
            className="flex-1 h-[48px] rounded-[8px] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Cancel
            </span>
          </button>
          <button
            onClick={() => onSave(value)}
            className="flex-1 h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Save
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Bangladeshi mobile numbers: 11 digits, starting 01[3-9] (013–019 operator prefixes).
const BD_PHONE_PATTERN = /^01[3-9]\d{8}$/;

function AddMemberDialog({ onCancel, onAdd }: { onCancel: () => void; onAdd: (id: string, phone: string) => void }) {
  const [memberId, setMemberId] = useState("");
  const [phone, setPhone] = useState("");
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const phoneValid = BD_PHONE_PATTERN.test(phone);

  function field(label: string, value: string, onChange: (v: string) => void, opts?: { placeholder?: string; inputMode?: "numeric" | "text"; error?: string }) {
    return (
      <div className="flex flex-col gap-1">
        <div className="relative h-[56px]">
          <div className={clsx("absolute inset-0 border rounded-[12px] pointer-events-none", opts?.error ? "border-[#d40000]" : "border-[#787878]")} />
          <input
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={opts?.placeholder}
            inputMode={opts?.inputMode}
            className="absolute inset-0 w-full h-full pl-4 pr-12 bg-transparent font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black outline-none rounded-[12px] placeholder:text-[#a0a0a0] placeholder:font-normal"
            style={ns}
          />
          <span className="absolute -top-[10px] left-3 bg-[#f4f6fa] px-1 font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-4">
            {label}
          </span>
          {value && (
            <button
              onClick={() => onChange("")}
              aria-label={`Clear ${label}`}
              className="absolute right-1 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center rounded-full active:bg-gray-200 transition-colors"
            >
              <X className="size-5 text-[#484848]" strokeWidth={1.5} />
            </button>
          )}
        </div>
        {opts?.error && (
          <span className="px-1 font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#d40000] leading-4">{opts.error}</span>
        )}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden"
      >
        <div className="pt-3 px-3 flex flex-col gap-4">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={ns}>Add new member</p>
          {field("ID", memberId, setMemberId, { placeholder: "e.g. WS235" })}
          {field("Phone number", phone, v => setPhone(v.replace(/\D/g, "").slice(0, 11)), {
            placeholder: "e.g. 01712345678",
            inputMode: "numeric",
            error: phone && !phoneValid ? "Enter a valid 11-digit Bangladeshi number" : undefined,
          })}
        </div>
        <div className="flex items-center justify-between p-3">
          <button onClick={onCancel} className="px-4 py-2.5 rounded-full active:bg-black/5 transition-colors">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-5" style={ns}>Cancel</span>
          </button>
          <button
            onClick={() => onAdd(memberId, phone)}
            disabled={!memberId.trim() || !phoneValid}
            className={clsx(
              "px-6 py-2.5 rounded-full transition-opacity",
              memberId.trim() && phoneValid ? "bg-[#1441cc] active:opacity-90" : "bg-[#1441cc] opacity-40 cursor-not-allowed",
            )}
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-white leading-5" style={ns}>Add</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

const GROUP_POINTS_FORMULA_TEXT = `👉 গ্রুপের অর্জিত পয়েন্টের (TGS) ওপরই অ্যাডমিনদের সম্মানীর হার নির্ভর করে — তাই গ্রুপ পয়েন্টস স্কোরিং সিস্টেমও আগের চেয়ে উন্নত করা হয়েছে

👉 নতুন গ্রুপ পয়েন্টস সিস্টেম এখন থেকে Quality + Quantity এর সমন্বয়ে হবে, যেখানে— TGS = 60% Quality + 40% Quantity

যেভাবে গ্রুপ স্কোর হিসাব করা হবে:

প্রথমে গ্রুপের মোট activity (Members × Exams × Attendance%) হিসাব করা হবে
⬇️
সবচেয়ে সক্রিয় গ্রুপের মোট অ্যাক্টিভিটির সঙ্গে আপনার গ্রুপের মোট অ্যাক্টিভিটি তুলনা করে Quantity Score (0-100) বের করা হবে
⬇️
Attendance % ও Admin Rating % যোগ করে Quality Score (0-100) বের করা হবে
⬇️
ফর্মুলা অনুযায়ী মোট গ্রুপ স্কোর (TGS)-কে ১৫ দ্বারা গুণ করে এডমিনের মাসিক সম্মানী পাওয়া যাবে

📐 Total Group Score (TGS) নির্ণয়ের গাণিতিক ফর্মুলা:

TGS = {0.6 × (0.8A + 0.2R)} + [0.4 × {M × E × (A /100) / MaxTA} × 100]

যেখানে,
M = Member Count
E = Number of Exams Assigned`;

function GroupPointsFormulaSheet({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden max-h-[85%]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-[16px] shrink-0">
          <div className="bg-[#787878] h-[4px] rounded-[100px] w-[32px]" />
        </div>

        <div className="px-[16px] shrink-0">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[18px] leading-[28px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            গ্রুপ পয়েন্টস নির্ধারণের ফর্মুলা
          </p>
        </div>

        <div className="border-t border-[#e3e3e3] mt-[16px]" />

        <div className="flex-1 overflow-y-auto">
          <div className="bg-white px-[16px] py-[16px]">
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848] whitespace-pre-wrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              {GROUP_POINTS_FORMULA_TEXT}
            </p>
          </div>
        </div>

        <div className="shrink-0 p-[12px]">
          <button
            onClick={onClose}
            className="w-full h-[56px] rounded-[100px] border border-[#c7c7c7] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] tracking-[0.15px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Close
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AdminMyGroupScreen({ group, onBack }: { group: Group; onBack: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [linkUrls, setLinkUrls] = useState<Record<string, string>>({ facebook: DEFAULT_GROUP_LINK_URL, discussion: DEFAULT_GROUP_LINK_URL });
  const [editingDiscussion, setEditingDiscussion] = useState(false);
  const [showFormula, setShowFormula] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState(false);
  const statCardRef = useRef<HTMLDivElement>(null);

  function copyLink(id: string, url: string) {
    navigator.clipboard?.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(c => (c === id ? null : c)), 1500);
    });
  }

  async function exportStatCardAsImage() {
    if (!statCardRef.current || exporting) return;
    setExporting(true);
    setExportError(false);
    try {
      const { toPng } = await import("html-to-image");
      const dataUrl = await toPng(statCardRef.current, { backgroundColor: "#ffffff", pixelRatio: 2 });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${group.name.replace(/\s+/g, "-").toLowerCase()}-stats.png`;
      link.click();
    } catch {
      setExportError(true);
    } finally {
      setExporting(false);
    }
  }

  const ratingPct = (group.adminRating / 5) * 100;

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {showAdminDetails && (
          <AdminDetailsBottomSheet
            name={group.admin}
            rating={group.adminRating}
            since={group.createdDate}
            onClose={() => setShowAdminDetails(false)}
          />
        )}
        {editingDiscussion && (
          <EditDiscussionGroupDialog
            url={linkUrls.discussion}
            onCancel={() => setEditingDiscussion(false)}
            onSave={(url) => { setLinkUrls(prev => ({ ...prev, discussion: url })); setEditingDiscussion(false); }}
          />
        )}
        {showFormula && <GroupPointsFormulaSheet onClose={() => setShowFormula(false)} />}
      </AnimatePresence>

      <AppHeader title="My Group" onBack={onBack} />

      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-6">
        {/* Stat card */}
        <div className="border border-[#e3e3e3] rounded-[16px] flex flex-col gap-4 items-center pt-3 px-3 pb-3">
        <div ref={statCardRef} className="flex flex-col gap-4 items-center w-full bg-white">
          <div className="flex gap-3 items-start w-full">
            <GroupLogo size={60} seed={group.id} />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <div className="flex items-center gap-2 h-6">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6 truncate">{group.name}</span>
                <div className="bg-[#0c5fff] rounded-[4px] px-2 h-5 flex items-center shrink-0 ml-auto">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-white leading-4" style={ns}>Open to Join</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="bg-[#eaeef6] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                    <span className="font-['Noto_Sans',sans-serif] text-[10px] font-medium text-[#484848]">{group.category}</span>
                  </div>
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#484848]">Created: {group.createdDate}</span>
                </div>
                <button onClick={() => setShowAdminDetails(true)} className="flex items-center gap-1 active:opacity-70 transition-opacity">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848]">Admin: {group.admin}</span>
                  <Info className="size-[18px] text-[#484848]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Achievement / rank */}
          <div className="bg-[#f4f6fa] rounded-[8px] flex gap-4 items-center p-2 w-full">
            <div className="relative shrink-0 size-10 flex items-center justify-center">
              <Trophy className="size-10 text-[#f7dc6e]" strokeWidth={1.25} fill="#f7dc6e" />
              <span className="absolute font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#665200] leading-6">{group.rank}</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <p className="flex-1 font-['Roboto',sans-serif] font-semibold text-[16px] text-black leading-6 tracking-[0.15px]">
                #{group.rank} of {GROUPS.length}
              </p>
              <button onClick={() => setShowFormula(true)} className="bg-green-600 rounded-[8px] px-2 py-1 shrink-0 active:opacity-80 transition-opacity">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-white leading-4">{(group.monthlyGoal * 0.65).toFixed(1)} GP</span>
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="flex gap-4 w-full text-center">
            <div className="flex-1 flex flex-col gap-1 items-start">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6 w-full">{group.members}</p>
              <p className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4 w-full">Members</p>
            </div>
            <div className="flex-1 flex flex-col gap-1 items-center">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{group.avgAttendance.toFixed(1)}%</p>
              <p className="font-['Noto_Sans',sans-serif] text-[12px] text-[#484848] leading-4">Attendance</p>
            </div>
            <div className="flex-1 flex flex-col gap-1 items-start">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6 w-full">{group.totalExams}</p>
              <p className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4 w-full">Exams</p>
            </div>
            <div className="flex-1 flex flex-col gap-1 items-center">
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{ratingPct.toFixed(1)}%</p>
              <p className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">Rating</p>
            </div>
          </div>
        </div>

          <button
            onClick={exportStatCardAsImage}
            disabled={exporting}
            className="h-12 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full active:bg-gray-50 transition-colors disabled:opacity-60"
          >
            <Download className="size-5 text-[#1441cc]" strokeWidth={1.5} />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc] leading-5">
              {exporting ? "Exporting…" : exportError ? "Failed, tap to retry" : "Export as image"}
            </span>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col">
          {GROUP_LINKS.map(link => (
            <div key={link.id} className="flex items-center gap-4 py-2 min-h-[72px]">
              <button onClick={() => copyLink(link.id, linkUrls[link.id])} className="shrink-0 size-6 flex items-center justify-center active:opacity-70 transition-opacity">
                {copiedId === link.id ? (
                  <Check className="size-5 text-green-600" strokeWidth={2} />
                ) : (
                  <Copy className="size-5 text-[#484848]" strokeWidth={1.5} />
                )}
              </button>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{link.label}</p>
                <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-5 truncate">{linkUrls[link.id]}</p>
              </div>
              {link.editable && (
                <button onClick={() => setEditingDiscussion(true)} className="shrink-0 size-6 flex items-center justify-center active:opacity-70 transition-opacity">
                  <Pencil className="size-5 text-[#484848]" strokeWidth={1.5} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Screen: Exam Page ─────────────────────────────────────────────────────────

function ExamPageScreen({
  examName,
  isLive,
  examList,
  onBack,
  onSelectQuickLink,
}: {
  examName: string;
  isLive: boolean;
  examList: Array<{ name: string; isLive: boolean }>;
  onBack: () => void;
  onSelectQuickLink: (link: QuickLink) => void;
}) {
  // No live exam here? Fall back to previewing the next exam in the same list instead of leaving the page empty.
  const currentIndex = examList.findIndex(e => e.name === examName);
  const nextExam = !isLive && currentIndex !== -1 && examList.length > 1
    ? examList[(currentIndex + 1) % examList.length]
    : undefined;

  const cardExam = isLive
    ? { title: examName, marks: 60, mins: 30, isLive: true, desc: "আজকের লাইভ পরীক্ষায় অংশগ্রহণ করে নিজের প্রস্তুতি যাচাই করুন।" }
    : nextExam
      // Always non-live here — this is just a preview of what's coming up, not an invitation to join a live session.
      ? { title: nextExam.name, marks: 60, mins: 30, isLive: false, desc: "পরবর্তী পরীক্ষার জন্য প্রস্তুতি নিন।" }
      : undefined;

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title={examName} onBack={onBack} />

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 px-4 pt-4 pb-8">
          {cardExam && (
            <div className="flex flex-col gap-2">
              {!isLive && (
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]">
                  Next exam
                </span>
              )}
              <ActivityCard exam={cardExam} onSelectQuickLink={onSelectQuickLink} />
            </div>
          )}
          <ExamQuickLinks onSelect={onSelectQuickLink} />
        </div>
      </div>
    </div>
  );
}

// ── Screen: Discussion ────────────────────────────────────────────────────────

const DISCUSSION_POSTS = [
  {
    id: 1,
    name: "Subroto Howlader",
    time: "2h",
    text: "আগামীকাল রাত ৮টায় বাংলাদেশ বিষয়াবলীর উপর লাইভ ক্লাস হবে। সবাই সময়মতো যোগ দেওয়ার চেষ্টা করবেন।",
    likes: 24,
    comments: 6,
  },
  {
    id: 2,
    name: "Shajenur khatun",
    time: "5h",
    text: "কারো কাছে গত সপ্তাহের মডেল টেস্টের প্রশ্নের ব্যাখ্যা আছে? ৩ নম্বর প্রশ্নটা বুঝতে পারছি না।",
    likes: 8,
    comments: 12,
  },
  {
    id: 3,
    name: "Hridoy Hasan",
    time: "1d",
    text: "এই মাসের টপ ১০-এ থাকার জন্য সবাইকে অভিনন্দন! পরবর্তী মাসেও এই ধারা অব্যাহত রাখি। 🎉",
    likes: 41,
    comments: 5,
  },
  {
    id: 4,
    name: "অর্থহীন জীবন",
    time: "2d",
    text: "নতুন সিলেবাস অনুযায়ী পড়ার রুটিন কি কেউ শেয়ার করতে পারবেন?",
    likes: 15,
    comments: 9,
  },
];

function DiscussionScreen({ onBack }: { onBack: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [draft, setDraft] = useState("");

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      <AppHeader title="Discussion" onBack={onBack} />

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-3 px-4 pt-4 pb-4">
          {DISCUSSION_POSTS.map(post => (
            <div key={post.id} className="bg-[#f4f6fa] rounded-[12px] p-3 flex flex-col gap-3">
              {/* Header */}
              <div className="flex items-center gap-2">
                <MemberAvatar size={36} name={post.name} />
                <div className="flex-1 min-w-0">
                  <p className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px] truncate" style={ns}>
                    {post.name}
                  </p>
                  <p className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>
                    {post.time} ago
                  </p>
                </div>
              </div>

              {/* Body */}
              <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-[20px]" style={ns}>
                {post.text}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-1 border-t border-[#e3e3e3]">
                <button className="flex items-center gap-1 pt-2 active:opacity-70 transition-opacity">
                  <ThumbsUp className="size-4 text-[#484848]" strokeWidth={1.75} />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>
                    {post.likes}
                  </span>
                </button>
                <button className="flex items-center gap-1 pt-2 active:opacity-70 transition-opacity">
                  <MessageCircle className="size-4 text-[#484848]" strokeWidth={1.75} />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>
                    {post.comments}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Composer */}
      <div className="shrink-0 border-t border-[#e3e3e3] px-3 py-2 flex items-center gap-2">
        <input
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="Write something to the group..."
          className="flex-1 h-11 rounded-full bg-[#f4f6fa] px-4 font-['Noto_Sans',sans-serif] text-[14px] text-black outline-none"
          style={ns}
        />
        <button
          onClick={() => setDraft("")}
          disabled={!draft.trim()}
          className={clsx(
            "size-11 rounded-full flex items-center justify-center shrink-0 transition-opacity",
            draft.trim() ? "bg-[#1441cc] active:opacity-90" : "bg-[#1441cc] opacity-40",
          )}
        >
          <Send className="size-5 text-white" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

// ── Screen: Facebook Group ────────────────────────────────────────────────────

const FB_POSTS = [
  {
    id: 1,
    name: "The Winner — Admin",
    time: "3h · Public group",
    text: "🎯 আগামী রবিবার থেকে নতুন ব্যাচের রুটিন শুরু হচ্ছে। পিন করা পোস্টে বিস্তারিত দেখুন।",
    likes: 132,
    comments: 28,
    shares: 6,
  },
  {
    id: 2,
    name: "©️Chonchol Ray ©️©️©️©️",
    time: "9h · Public group",
    text: "আজকের লাইভ MCQ পরীক্ষায় অংশগ্রহণের জন্য সবাইকে ধন্যবাদ। ফলাফল রাত ৯টায় প্রকাশ করা হবে।",
    likes: 76,
    comments: 14,
    shares: 2,
  },
  {
    id: 3,
    name: "Anik Mahmud",
    time: "1d · Public group",
    text: "গ্রুপের সবাই কি টেলিগ্রাম চ্যানেলে যুক্ত হয়েছেন? না হলে এখনই যুক্ত হয়ে নিন, গুরুত্বপূর্ণ পিডিএফ শেয়ার করা হয়।",
    likes: 54,
    comments: 9,
    shares: 3,
  },
];

function FacebookGroupScreen({ group, onBack }: { group: Group; onBack: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const avatarStackCount = 4;

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* App bar */}
      <div className="shrink-0 flex items-center justify-between px-1 h-12 bg-white">
        <button
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <p className="absolute left-14 right-14 font-['Noto_Sans',sans-serif] text-[18px] font-normal text-black leading-7 truncate text-center" style={ns}>
          Facebook Group
        </p>
        <button className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors">
          <MoreHorizontal className="size-5 text-[#484848]" strokeWidth={1.75} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Cover */}
        <div className="relative h-[110px] bg-gradient-to-br from-[#0866FF] to-[#0a3ea1] shrink-0">
          <div className="absolute -bottom-7 left-4 size-[72px] rounded-full ring-4 ring-white overflow-hidden bg-white">
            <GroupLogo size={72} seed={group.id} />
          </div>
        </div>

        {/* Group info */}
        <div className="pt-9 px-4 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[18px] text-black leading-[26px]" style={ns}>
              {group.name} — Official Group
            </p>
            <div className="flex items-center gap-1">
              <Globe className="size-3.5 text-[#787878]" strokeWidth={2} />
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>
                Public group · {(group.members * 19).toLocaleString()} members
              </span>
            </div>
          </div>

          {/* Avatar stack */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: avatarStackCount }, (_, i) => (
                <MemberAvatar key={i} size={24} className="ring-2 ring-white" style={{ marginLeft: i === 0 ? 0 : -8 }} />
              ))}
            </div>
            <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>
              Joined by {group.admin} and {group.members} others
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pb-3">
            <button className="flex-1 h-10 bg-[#eaeef6] rounded-[8px] flex items-center justify-center gap-2 active:opacity-80 transition-opacity">
              <Check className="size-4 text-black" strokeWidth={2} />
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]" style={ns}>Joined</span>
            </button>
            <button className="flex-1 h-10 bg-[#eaeef6] rounded-[8px] flex items-center justify-center gap-2 active:opacity-80 transition-opacity">
              <Share2 className="size-4 text-black" strokeWidth={2} />
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]" style={ns}>Share</span>
            </button>
          </div>
        </div>

        <div className="h-2 bg-[#f0f2f5]" />

        {/* Composer prompt */}
        <div className="px-4 py-3 flex items-center gap-2 border-b border-[#e3e3e3]">
          <img src={imgMemberIcon} alt="" className="size-9 rounded-full shrink-0 object-cover" />
          <div className="flex-1 h-9 rounded-full bg-[#f0f2f5] flex items-center px-4">
            <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#787878] leading-[20px]" style={ns}>
              Write something to the group...
            </span>
          </div>
          <button className="size-9 flex items-center justify-center shrink-0">
            <ImageIcon className="size-5 text-[#45bd62]" strokeWidth={1.75} />
          </button>
        </div>

        {/* Feed */}
        <div className="flex flex-col">
          {FB_POSTS.map(post => (
            <div key={post.id} className="px-4 py-3 flex flex-col gap-3 border-b-8 border-[#f0f2f5]">
              <div className="flex items-center gap-2">
                <MemberAvatar size={40} name={post.name} />
                <div className="flex-1 min-w-0">
                  <p className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px] truncate" style={ns}>
                    {post.name}
                  </p>
                  <p className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>
                    {post.time}
                  </p>
                </div>
                <button className="size-8 flex items-center justify-center shrink-0">
                  <MoreHorizontal className="size-4 text-[#787878]" strokeWidth={2} />
                </button>
              </div>

              <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-[20px]" style={ns}>
                {post.text}
              </p>

              <div className="flex items-center justify-between text-[#787878]">
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] leading-[16px]" style={ns}>
                  {post.likes} likes
                </span>
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] leading-[16px]" style={ns}>
                  {post.comments} comments · {post.shares} shares
                </span>
              </div>

              <div className="flex items-center border-t border-[#e3e3e3] pt-1">
                <button className="flex-1 h-9 flex items-center justify-center gap-2 active:opacity-70 transition-opacity">
                  <ThumbsUp className="size-4 text-[#484848]" strokeWidth={1.75} />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#484848]" style={ns}>Like</span>
                </button>
                <button className="flex-1 h-9 flex items-center justify-center gap-2 active:opacity-70 transition-opacity">
                  <MessageCircle className="size-4 text-[#484848]" strokeWidth={1.75} />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#484848]" style={ns}>Comment</span>
                </button>
                <button className="flex-1 h-9 flex items-center justify-center gap-2 active:opacity-70 transition-opacity">
                  <Share2 className="size-4 text-[#484848]" strokeWidth={1.75} />
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[13px] text-[#484848]" style={ns}>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Group Rank Data ────────────────────────────────────────────────────────────

const RANK_GROUPS = [
  { name: "The Winner", cat: "BCS", admin: "Subroto Howlader", date: "1 Jul 2026", isUser: true, members: 64, exams: 66, attendance: 90.5, rating: 93.7 },
  { name: "Candid", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 160, exams: 90, attendance: 89.0, rating: 76.0 },
  { name: "Alpha", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 142, exams: 84, attendance: 85.3, rating: 81.2 },
  { name: "Focused", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 128, exams: 79, attendance: 82.7, rating: 78.4 },
  { name: "Innovative", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 115, exams: 73, attendance: 79.1, rating: 74.9 },
  { name: "Collaborative", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 98, exams: 68, attendance: 75.6, rating: 71.3 },
  { name: "Dynamic", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 87, exams: 61, attendance: 70.2, rating: 68.5 },
  { name: "Interactive", cat: "BCS", admin: "Mehedi Shammi", date: "1 Jul 2026", members: 74, exams: 55, attendance: 64.8, rating: 63.7 },
];

const MONTHLY_RANK_DATA = [
  {
    userRank: 1, userGP: "789.6", attendance: "90.5", exams: 66, rating: "93.7", totalExams: 155, avgAttendance: "75.5", monthlyGoal: 1221, achievementRatio: "75.5",
    leaderboard: [{ g: 0, gp: "789.6" }, { g: 1, gp: "654.2" }, { g: 2, gp: "621.8" }, { g: 3, gp: "587.4" }, { g: 4, gp: "542.9" }, { g: 5, gp: "498.3" }, { g: 6, gp: "431.1" }, { g: 7, gp: "387.6" }]
  },
  {
    userRank: 2, userGP: "721.3", attendance: "85.2", exams: 61, rating: "88.4", totalExams: 148, avgAttendance: "71.3", monthlyGoal: 1180, achievementRatio: "69.8",
    leaderboard: [{ g: 2, gp: "758.4" }, { g: 0, gp: "721.3" }, { g: 1, gp: "689.7" }, { g: 5, gp: "612.1" }, { g: 3, gp: "553.8" }, { g: 4, gp: "498.2" }, { g: 7, gp: "412.5" }, { g: 6, gp: "378.9" }]
  },
  {
    userRank: 1, userGP: "812.1", attendance: "92.1", exams: 70, rating: "95.2", totalExams: 162, avgAttendance: "78.9", monthlyGoal: 1300, achievementRatio: "81.2",
    leaderboard: [{ g: 0, gp: "812.1" }, { g: 2, gp: "774.6" }, { g: 4, gp: "701.3" }, { g: 1, gp: "658.9" }, { g: 6, gp: "589.4" }, { g: 3, gp: "521.2" }, { g: 5, gp: "448.7" }, { g: 7, gp: "392.1" }]
  },
  {
    userRank: 3, userGP: "654.2", attendance: "78.9", exams: 58, rating: "81.3", totalExams: 141, avgAttendance: "68.4", monthlyGoal: 1050, achievementRatio: "62.3",
    leaderboard: [{ g: 5, gp: "745.8" }, { g: 2, gp: "712.4" }, { g: 0, gp: "654.2" }, { g: 1, gp: "598.7" }, { g: 3, gp: "534.1" }, { g: 6, gp: "478.3" }, { g: 4, gp: "401.9" }, { g: 7, gp: "345.6" }]
  },
  {
    userRank: 2, userGP: "698.5", attendance: "83.7", exams: 63, rating: "86.9", totalExams: 152, avgAttendance: "73.1", monthlyGoal: 1140, achievementRatio: "72.4",
    leaderboard: [{ g: 1, gp: "734.2" }, { g: 0, gp: "698.5" }, { g: 2, gp: "661.8" }, { g: 6, gp: "589.3" }, { g: 5, gp: "521.7" }, { g: 3, gp: "458.2" }, { g: 7, gp: "389.6" }, { g: 4, gp: "321.4" }]
  },
  {
    userRank: 4, userGP: "612.8", attendance: "76.4", exams: 55, rating: "79.1", totalExams: 134, avgAttendance: "65.8", monthlyGoal: 980, achievementRatio: "58.7",
    leaderboard: [{ g: 2, gp: "721.9" }, { g: 4, gp: "689.4" }, { g: 1, gp: "651.2" }, { g: 0, gp: "612.8" }, { g: 5, gp: "574.3" }, { g: 6, gp: "498.7" }, { g: 3, gp: "421.6" }, { g: 7, gp: "358.9" }]
  },
];

// Daily "% of goal reached" for the current month, days 1-31 — same shape/coloring as the
// Figma chart (red <41%, yellow 41-74%, green >=75%), shared across the month picker since
// this is illustrative prototype data, not real day-by-day tracking.
const DAILY_GOAL_PCTS = [
  22, 42, 17, 36, 25, 42, 49, 36, 31, 100, 56, 36, 63, 31, 56,
  31, 36, 49, 74, 49, 31, 49, 36, 31, 49, 25, 49, 49, 85, 25, 25,
];

// A weekly exam (name contains "সাপ্তাহিক") only runs on ~4 fixed days across the month.
// Every other exam runs on a random subset of days that differs exam to exam — there's no
// fixed schedule — but stays the same every time you open that exam's own screen, seeded
// off its name so it doesn't reshuffle on every render.
function examChartPcts(examName: string): number[] {
  const n = DAILY_GOAL_PCTS.length;
  if (examName.includes("সাপ্তাহিক")) {
    // Weekly exam lands on the same weekday every time (every 7th day) — that's exactly
    // MONTHLY_EXAM_OCCURRENCES' weekly count (4) across a 31-day chart.
    return DAILY_GOAL_PCTS.map((pct, i) => (i % 7 === 6 ? pct : 0));
  }
  // Active-day count matches this exam's real monthly occurrence count (23 for a daily exam,
  // 1 for the monthly exam) — not a flat ~60%-of-days probability applied to every exam.
  const idx = MONTHLY_EXAM_LIST.findIndex(e => e.name === examName);
  const count = idx >= 0 ? MONTHLY_EXAM_OCCURRENCES[idx] : Math.round(n * 0.6);

  let seed = 0;
  for (let i = 0; i < examName.length; i++) seed = (seed * 31 + examName.charCodeAt(i)) >>> 0;
  const rand = (k: number) => {
    const x = Math.sin(seed + k * 97.13) * 10000;
    return x - Math.floor(x);
  };
  const order = Array.from({ length: n }, (_, i) => i).sort((a, b) => rand(a) - rand(b));
  const active = new Set(order.slice(0, Math.min(count, n)));
  return DAILY_GOAL_PCTS.map((pct, i) => (active.has(i) ? pct : 0));
}


function RankGroupDetailSheet({ group, gp, onClose }: { group: typeof RANK_GROUPS[number]; gp: string; onClose: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const rows: Array<[string, string]> = [
    ["Members", String(group.members)],
    ["Exams", String(group.exams)],
    ["Attendance", `${group.attendance.toFixed(1)}%`],
    ["Admin Rating", `${group.rating.toFixed(1)}%`],
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>

        <div className="px-4 flex flex-col gap-4">
          <div className="bg-[#f4f6fa] rounded-[12px] p-3 flex items-center gap-3">
            <GroupLogo size={50} seed={group.name} />
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-5" style={ns}>{group.name}</span>
                <div className="bg-[#b7dfb9] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#264a34] leading-4" style={ns}>{gp} GP</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#eaeef6] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#484848] leading-4" style={ns}>{group.cat}</span>
                </div>
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-4" style={ns}>Created: {group.date}</span>
              </div>
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-4" style={ns}>Admin: {group.admin}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {rows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5" style={ns}>{label}</span>
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5" style={ns}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 p-3 mt-2">
          <button
            onClick={onClose}
            className="w-full h-[56px] rounded-[100px] border border-[#c7c7c7] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-6 tracking-[0.15px] text-[#484848]" style={ns}>Close</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LeaderboardBadge({ rank }: { rank: number }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  if (rank === 1) {
    return (
      <div className="relative shrink-0 size-[50px]">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[50px_50px]" style={{ maskImage: `url("${imgEmojiEvents}")` }}>
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 50 50">
            <path d={svgRankPaths.p70aaf40} fill="#F7DC6E" /><path d={svgRankPaths.p3f25a3c0} fill="#F7DC6E" />
          </svg>
        </div>
        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans',sans-serif] font-semibold inset-[0_22.22%_27.78%_22.22%] justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-11.111px_0px] mask-size-[50px_50px] text-[#665200] text-[16px] text-center" style={{ ...ns, maskImage: `url("${imgEmojiEvents}")` }}>
          <p className="leading-[24px]">1</p>
        </div>
      </div>
    );
  }
  const yellow = rank <= 5;
  return (
    <div className="relative shrink-0 size-[50px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 50 50">
        <mask id={`lbm-${rank}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" as const }} width="50" height="50" x="0" y="0">
          <rect fill="#D9D9D9" width="50" height="50" />
        </mask>
        <g mask={`url(#lbm-${rank})`}>
          <path clipRule="evenodd" d={svgRankPaths.p28c02580} fill={yellow ? "#F7DC6E" : "#9E9E9E"} fillRule="evenodd" />
          <path d={svgRankPaths.p1721c500} fill={yellow ? "#F7DC6E" : "#9E9E9E"} />
        </g>
      </svg>
      <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans',sans-serif] font-semibold inset-1/4 justify-center leading-[0] text-[16px] text-center" style={{ ...ns, color: yellow ? "#665200" : "black" }}>
        <p className="leading-[24px]">{rank}</p>
      </div>
    </div>
  );
}

// ── Month Picker Modal ────────────────────────────────────────────────────────

const MONTH_NAMES_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_NAMES_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function MonthPickerModal({
  selectedMonth,
  onConfirm,
  onCancel,
}: {
  selectedMonth: Date;
  onConfirm: (d: Date) => void;
  onCancel: () => void;
}) {
  const today = new Date();
  today.setDate(1);
  // Latest selectable month is last month — current month has no data yet.
  const maxDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  // allow up to 24 months back
  const minDate = new Date(today.getFullYear(), today.getMonth() - 23, 1);
  // Reset goes back to the default selection: last month.
  const defaultMonth = maxDate;

  const [viewYear, setViewYear] = useState(selectedMonth.getFullYear());

  function isDisabled(mIdx: number) {
    const d = new Date(viewYear, mIdx, 1);
    return d > maxDate || d < minDate;
  }
  function isSelected(mIdx: number) {
    return viewYear === selectedMonth.getFullYear() && mIdx === selectedMonth.getMonth();
  }

  const canPrevYear = new Date(viewYear - 1, 11, 1) >= minDate;
  const canNextYear = new Date(viewYear + 1, 0, 1) <= maxDate;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative shrink-0">
          <div aria-hidden className="absolute border-[#c7c7c7] border-b border-solid inset-0 pointer-events-none" />
          <div className="px-6 pt-4 pb-3">
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Select month
            </p>
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[32px] text-black leading-[40px] mt-9" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              {MONTH_NAMES_SHORT[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
            </p>
          </div>
        </div>

        {/* Year navigation row */}
        <div className="flex items-center justify-between pl-4 pr-3 py-1">
          <div className="flex items-center gap-1 pl-2 pr-1 py-2.5 rounded-full">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              {viewYear}
            </span>
            <svg width="7.5" height="3.75" viewBox="0 0 7.5 3.75" fill="none" className="ml-1">
              <path d="M3.75 3.75L0 0H7.5L3.75 3.75Z" fill="black" />
            </svg>
          </div>
          <div className="flex">
            <button
              onClick={() => { if (canPrevYear) setViewYear(y => y - 1); }}
              className={clsx("size-12 flex items-center justify-center rounded-full transition-opacity", !canPrevYear && "opacity-25 cursor-default")}
            >
              <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none">
                <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="black" />
              </svg>
            </button>
            <button
              onClick={() => { if (canNextYear) setViewYear(y => y + 1); }}
              className={clsx("size-12 flex items-center justify-center rounded-full transition-opacity", !canNextYear && "opacity-25 cursor-default")}
            >
              <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none">
                <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>

        {/* Month grid: 4 rows × 3 cols */}
        <div className="px-6 pb-2 flex flex-col gap-0">
          {[0, 1, 2, 3].map(row => (
            <div key={row} className="flex gap-2">
              {[0, 1, 2].map(col => {
                const mIdx = row * 3 + col;
                const disabled = isDisabled(mIdx);
                const selected = isSelected(mIdx);
                return (
                  <button
                    key={mIdx}
                    onClick={() => { if (!disabled) onConfirm(new Date(viewYear, mIdx, 1)); }}
                    className={clsx(
                      "flex-1 h-9 rounded-full flex items-center justify-center transition-colors",
                      "font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px]",
                      selected ? "bg-[#1441cc] text-white" :
                        disabled ? "text-[#c7c7c7] cursor-default" :
                          "text-black active:bg-black/5",
                    )}
                    style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
                  >
                    {MONTH_NAMES_SHORT[mIdx]}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="relative shrink-0">
          <div aria-hidden className="absolute border-[#c7c7c7] border-t border-solid inset-0 pointer-events-none" />
          <div className="flex items-center justify-between gap-2 px-3 pb-2 pt-1">
            <button
              onClick={() => onConfirm(defaultMonth)}
              className="h-12 px-4 rounded-full flex items-center justify-center active:bg-black/5 transition-colors"
            >
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                Reset
              </span>
            </button>
            <div className="flex gap-2">
              <button
                onClick={onCancel}
                className="h-12 px-4 rounded-full flex items-center justify-center"
              >
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                  Cancel
                </span>
              </button>
              <button
                onClick={onCancel}
                className="h-12 px-4 rounded-full flex items-center justify-center"
              >
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                  OK
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function GroupRankContent({ monthIndex, selectedMonth }: { monthIndex: number; selectedMonth: Date }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [selectedRankGroup, setSelectedRankGroup] = useState<number | null>(null);
  const [showFormula, setShowFormula] = useState(false);

  if (monthIndex === -1) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-8 gap-3">
        <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] text-center" style={ns}>
          No data for {MONTH_NAMES_LONG[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
        </p>
        <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#787878] leading-[20px] text-center" style={ns}>
          Ranking data is available for the last 6 months only.
        </p>
      </div>
    );
  }

  const d = MONTHLY_RANK_DATA[monthIndex];

  return (
    <div className="flex flex-col gap-6 items-center py-4">
      <AnimatePresence>
        {showAdminDetails && (
          <AdminDetailsBottomSheet
            name="Subroto Howlader"
            rating={4.5}
            since="17 Jul 2026"
            onClose={() => setShowAdminDetails(false)}
          />
        )}
        {showFormula && <GroupPointsFormulaSheet onClose={() => setShowFormula(false)} />}
        {selectedRankGroup !== null && (
          <RankGroupDetailSheet
            group={RANK_GROUPS[selectedRankGroup]}
            gp={d.leaderboard.find(e => e.g === selectedRankGroup)?.gp ?? "0.0"}
            onClose={() => setSelectedRankGroup(null)}
          />
        )}
      </AnimatePresence>

      {/* Member info card */}
      <div className="px-4 w-full">
        <div className="bg-white rounded-[16px] border border-[#e3e3e3] p-3 flex flex-col gap-4">
          <div className="flex gap-3 items-start">
            <div className="relative shrink-0 size-[60px]">
              <GroupAvatar size={60} />
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={ns}>The Winner</p>
                <div className="bg-[#0c5fff] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-white leading-[16px]" style={ns}>Open to Join</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="bg-[#eaeef6] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#484848] leading-[16px]" style={ns}>BCS</span>
                  </div>
                  <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]" style={ns}>Created: 1 Jul 2026</span>
                </div>
                <button onClick={() => setShowAdminDetails(true)} className="flex items-center gap-1 active:opacity-70 transition-opacity">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>Admin: Subroto Howlader</span>
                  <Info className="size-[18px] text-[#484848]" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
          {/* Rank achievement */}
          <div className="bg-[#f4f6fa] rounded-[8px] flex items-center gap-4 p-2">
            <div className="relative shrink-0 size-[40px]">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[40px_40px]" style={{ maskImage: `url("${imgEmojiEvents1}")` }}>
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 40 40">
                  <path d={svgRankPaths.p17929100} fill="#F7DC6E" /><path d={svgRankPaths.pf931700} fill="#F7DC6E" />
                </svg>
              </div>
              <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans',sans-serif] font-medium inset-[0_22.22%_27.78%_22.22%] justify-center leading-[0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.889px_0px] mask-size-[40px_40px] text-[#665200] text-[16px] text-center tracking-[0.15px]" style={{ ...ns, maskImage: `url("${imgEmojiEvents1}")` }}>
                <p className="leading-[24px]">{d.userRank}</p>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <p className="font-['Roboto',sans-serif] font-semibold text-[16px] text-black leading-[24px] tracking-[0.15px]">#{d.userRank} of 15</p>
              <button onClick={() => setShowFormula(true)} className="bg-[green] rounded-[8px] px-2 py-1 active:opacity-80 transition-opacity">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-white leading-[16px]" style={ns}>{d.userGP} GP</span>
              </button>
            </div>
          </div>
          {/* Stats */}
          <div className="flex gap-4">
            {[
              { val: String(MEMBER_LIST.length), label: "Members" },
              { val: `${d.attendance}%`, label: "Attendance" },
              { val: String(d.exams), label: "Exams" },
              { val: `${d.rating}%`, label: "Rating" },
            ].map(({ val, label }) => (
              <div key={label} className="flex-1 flex flex-col items-center">
                <p className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px]" style={ns}>{val}</p>
                <p className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graph card */}
      <div className="px-4 w-full">
        <div className="bg-[#f4f6fa] rounded-[16px] flex flex-col gap-2 py-3">
          <p className="px-3 font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px]" style={ns}>% of goal reached, by dates</p>
          <div className="px-3 flex flex-col gap-1">
            {/* Bars — one per day of the month */}
            <div className="grid gap-x-1 h-[100px] items-end" style={{ gridTemplateColumns: `repeat(${DAILY_GOAL_PCTS.length}, minmax(0, 1fr))` }}>
              {DAILY_GOAL_PCTS.map((pct, i) => (
                <div key={i} className="relative h-full w-full rounded-full overflow-hidden bg-[#e3e3e3]">
                  {pct > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 rounded-full" style={{ height: `${pct}%`, backgroundColor: zoneBarColor(pct) }} />
                  )}
                </div>
              ))}
            </div>
            {/* Day labels */}
            <div className="flex items-center justify-between">
              {[1, 10, 20, DAILY_GOAL_PCTS.length].map(day => (
                <span key={day} className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#8f8d8d] leading-[16px]" style={ns}>{day}</span>
              ))}
            </div>
          </div>
          {/* Legend */}
          <div className="flex items-center justify-between px-3">
            {[["#f04d30", "0 - 40%"], ["#ffcb61", "41 - 74%"], ["#6fcf7e", "75 - 100%"]].map(([bg, label]) => (
              <div key={label} className="flex items-center gap-1 p-1">
                <div className="size-[10px] rounded-[4px]" style={{ backgroundColor: bg }} />
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#484848] leading-[16px]" style={ns}>{label}</span>
              </div>
            ))}
          </div>
          <div className="mx-3 border-t border-[#C7C5CE]" />
          {/* Stats row */}
          <div className="px-3 flex items-stretch gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <p className="font-['Noto_Serif',serif] font-normal text-[12px] text-[#484848] leading-[16px]">Total exams</p>
              <p className="font-['Roboto',sans-serif] font-semibold text-[16px] text-black leading-[24px] tracking-[0.15px]">{d.totalExams}</p>
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>{d.avgAttendance}% avg. attendance</p>
            </div>
            <div className="w-px bg-[#C7C5CE]" />
            <div className="flex-1 flex flex-col gap-1">
              <p className="font-['Noto_Serif',serif] font-normal text-[12px] text-[#484848] leading-[16px]">Monthly goal</p>
              <p className="font-['Roboto',sans-serif] font-semibold text-[16px] text-black leading-[24px] tracking-[0.15px]">{d.monthlyGoal}</p>
              <p className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>{d.achievementRatio}% achievement ratio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="w-full flex flex-col gap-4 pb-4">
        <div className="px-4 flex items-center h-10">
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] tracking-[0.15px]" style={ns}>Leaderboard</span>
        </div>
        <div className="flex flex-col gap-2 px-4">
          {d.leaderboard.map((entry, i) => {
            const group = RANK_GROUPS[entry.g];
            return (
              <button
                key={entry.g}
                onClick={() => setSelectedRankGroup(entry.g)}
                className="relative bg-[#f4f6fa] rounded-[12px] text-left active:opacity-80 transition-opacity"
              >
                {group.isUser && <div aria-hidden className="absolute border border-[#1441cc] border-solid inset-0 pointer-events-none rounded-[12px]" />}
                <div className="flex items-center gap-[10px] p-3 w-full">
                  <LeaderboardBadge rank={i + 1} />
                  <div className="flex-1 min-w-0 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-[20px]" style={ns}>{group.name}</span>
                      <div className="bg-[#b7dfb9] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                        <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#264a34] leading-[16px]" style={ns}>{entry.gp} GP</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#eaeef6] rounded-[4px] px-2 h-5 flex items-center shrink-0">
                          <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#484848] leading-[16px]" style={ns}>{group.cat}</span>
                        </div>
                        <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]" style={ns}>Created: {group.date}</span>
                      </div>
                      <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]" style={ns}>Admin: {group.admin}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function GroupRankScreen({ onBack }: { onBack: () => void }) {
  const lastMonth = new Date();
  lastMonth.setDate(1);
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(lastMonth);
    d.setMonth(d.getMonth() - i);
    return d;
  });

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [showPicker, setShowPicker] = useState(false);

  const monthName = selectedMonth.toLocaleString("en-US", { month: "long" });
  const monthIndex = months.findIndex(
    m => m.getMonth() === selectedMonth.getMonth() && m.getFullYear() === selectedMonth.getFullYear()
  );

  return (
    <div className="flex flex-col h-full bg-white relative">
      <AnimatePresence>
        {showPicker && (
          <MonthPickerModal
            selectedMonth={selectedMonth}
            onConfirm={d => { setSelectedMonth(d); setShowPicker(false); }}
            onCancel={() => setShowPicker(false)}
          />
        )}
      </AnimatePresence>

      <div className="shrink-0 h-14 bg-white flex items-center justify-between px-1">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <span
            className="font-['Noto_Sans',sans-serif] font-normal text-[18px] text-black leading-[28px]"
            style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
          >
            Group Rank
          </span>
        </div>
        {/* Month filter chip — tapping opens the MonthPickerModal */}
        <div className="relative mr-2">
          <button
            onClick={() => setShowPicker(true)}
            className="relative flex items-center gap-[6px] pl-2 pr-2 py-[6px] rounded-[8px] active:bg-gray-50 transition-colors"
          >
            {/* Calendar icon */}
            <div className="relative shrink-0 size-[18px]">
              <div
                className="absolute inset-[9.94%_14.58%_10.42%_14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-2.385px] mask-size-[24px_24px]"
                style={{ maskImage: `url("${imgCalendarMonth}")` }}
              >
                <svg className="absolute block inset-0 size-full" fill="none" height="14.3364" preserveAspectRatio="none" viewBox="0 0 12.75 14.3364" width="12.75">
                  <path d={svgRankPaths.p19f86400} fill="#484848" />
                </svg>
              </div>
            </div>
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#484848] leading-[20px]"
              style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}
            >
              {monthName}
            </span>
            <ChevronDown className="size-4 text-[#484848]" strokeWidth={2} />
            <div aria-hidden className="absolute border border-[#c7c7c7] inset-0 pointer-events-none rounded-[8px]" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <GroupRankContent monthIndex={monthIndex} selectedMonth={selectedMonth} />
      </div>
    </div>
  );
}

// ── Group Members data ────────────────────────────────────────────────────────

type AttendanceChip = "green" | "yellow" | "red";

interface Member {
  name: string;
  pct: number;
  chip: AttendanceChip;
  memberId: string;
  since: string;
  rating: string;
  level: number;
  exams: number;
  preparingFor: string;
  gender: string;
  birthday: string;
  majorSubject: string;
  institute: string;
  district: string;
  subgroup: string;
}

const MEMBER_LIST: Member[] = [
  { name: "Atiqul Haque", pct: 88.0, chip: "green", memberId: "WS230", since: "23 Mar 2023", rating: "B", level: 1, exams: 200, preparingFor: "BCS", gender: "Male", birthday: "24 Dec", majorSubject: "English", institute: "University of Dhaka", district: "Dhaka", subgroup: "A" },
  { name: "Shajenur khatun", pct: 88.0, chip: "green", memberId: "WS229", since: "12 Feb 2023", rating: "B", level: 2, exams: 180, preparingFor: "Bank", gender: "Female", birthday: "3 Apr", majorSubject: "Accounting", institute: "Jahangirnagar University", district: "Dhaka", subgroup: "A" },
  { name: "Anik Mahmud", pct: 29.0, chip: "red", memberId: "WS228", since: "5 Jan 2023", rating: "C", level: 1, exams: 60, preparingFor: "NTRCA", gender: "Male", birthday: "19 Aug", majorSubject: "Physics", institute: "Chittagong University", district: "Chattogram", subgroup: "A" },
  { name: "🙉🙊🙈মেহেজাবীন নুসরাত স্মৃতি✨💝🎉", pct: 88.0, chip: "green", memberId: "WS227", since: "23 Mar 2023", rating: "A", level: 3, exams: 240, preparingFor: "BCS", gender: "Female", birthday: "2 Oct", majorSubject: "Economics", institute: "Dhaka University", district: "Dhaka", subgroup: "A" },
  { name: "অর্থহীন জীবন", pct: 65.0, chip: "yellow", memberId: "WS226", since: "18 Nov 2022", rating: "B", level: 2, exams: 140, preparingFor: "Bank", gender: "Male", birthday: "30 Jun", majorSubject: "Finance", institute: "Rajshahi University", district: "Rajshahi", subgroup: "A" },
  { name: "⭕️ Shuraiya Ripa", pct: 88.0, chip: "green", memberId: "WS225", since: "23 Mar 2023", rating: "A", level: 3, exams: 260, preparingFor: "BCS", gender: "Female", birthday: "14 May", majorSubject: "Political Science", institute: "University of Dhaka", district: "Dhaka", subgroup: "A" },
  { name: "Hridoy Hasan", pct: 88.0, chip: "green", memberId: "WS224", since: "1 Jul 2022", rating: "B", level: 2, exams: 190, preparingFor: "NTRCA", gender: "Male", birthday: "7 Sep", majorSubject: "Education", institute: "Khulna University", district: "Khulna", subgroup: "A" },
  { name: "©️Chonchol Ray ©️©️©️©️", pct: 88.0, chip: "green", memberId: "WS223", since: "23 Mar 2023", rating: "B", level: 1, exams: 150, preparingFor: "Bank", gender: "Male", birthday: "11 Mar", majorSubject: "Management", institute: "University of Dhaka", district: "Dhaka", subgroup: "A" },
  { name: "Nusrat Jahan", pct: 15.0, chip: "red", memberId: "WS222", since: "5 Aug 2026", rating: "C", level: 1, exams: 40, preparingFor: "BAR / BJS", gender: "Female", birthday: "26 Jan", majorSubject: "Law", institute: "Dhaka University", district: "Dhaka", subgroup: "A" },
  { name: "Kamrul Islam", pct: 45.0, chip: "yellow", memberId: "WS221", since: "25 Jul 2026", rating: "C", level: 2, exams: 95, preparingFor: "DP", gender: "Male", birthday: "20 Feb", majorSubject: "Statistics", institute: "Rajshahi University", district: "Rajshahi", subgroup: "A" },
  { name: "রাকিবুল শেখ", pct: 75, chip: "yellow", memberId: "WS220", since: "1 Aug 2026", rating: "B", level: 1, exams: 30, preparingFor: "BCS", gender: "Male", birthday: "25 Mar", majorSubject: "English", institute: "University of Dhaka", district: "Dhaka", subgroup: "B" },
  { name: "সাদিয়া তাবাসসুম", pct: 78, chip: "yellow", memberId: "WS219", since: "11 Feb 2023", rating: "B", level: 2, exams: 41, preparingFor: "Bank", gender: "Female", birthday: "4 Apr", majorSubject: "Accounting", institute: "Jahangirnagar University", district: "Chattogram", subgroup: "B" },
  { name: "তানভীর কবির", pct: 81, chip: "green", memberId: "WS218", since: "12 Aug 2026", rating: "A", level: 3, exams: 52, preparingFor: "DP", gender: "Male", birthday: "11 May", majorSubject: "Physics", institute: "Chittagong University", district: "Rajshahi", subgroup: "B" },
  { name: "ফারজানা ইয়াসমিন", pct: 84, chip: "green", memberId: "WS217", since: "25 Apr 2022", rating: "A", level: 1, exams: 63, preparingFor: "NTRCA", gender: "Female", birthday: "18 Jun", majorSubject: "Economics", institute: "Rajshahi University", district: "Khulna", subgroup: "B" },
  { name: "সাইফুল রহমান", pct: 87, chip: "green", memberId: "WS216", since: "4 May 2023", rating: "A", level: 2, exams: 74, preparingFor: "BAR / BJS", gender: "Male", birthday: "25 Jul", majorSubject: "Finance", institute: "Khulna University", district: "Sylhet", subgroup: "B" },
  { name: "তাসনিম সুলতানা", pct: 90, chip: "green", memberId: "WS215", since: "11 Jun 2024", rating: "A", level: 3, exams: 85, preparingFor: "BCS", gender: "Female", birthday: "4 Aug", majorSubject: "Political Science", institute: "Sylhet Agricultural University", district: "Barishal", subgroup: "B" },
  { name: "ফারহান রানা", pct: 70, chip: "yellow", memberId: "WS214", since: "18 Jul 2022", rating: "B", level: 1, exams: 96, preparingFor: "Bank", gender: "Male", birthday: "11 Sep", majorSubject: "Education", institute: "Barishal University", district: "Rangpur", subgroup: "C" },
  { name: "মিম ফেরদৌস", pct: 75, chip: "yellow", memberId: "WS213", since: "25 Aug 2023", rating: "B", level: 2, exams: 107, preparingFor: "DP", gender: "Female", birthday: "18 Oct", majorSubject: "Management", institute: "Comilla University", district: "Mymensingh", subgroup: "C" },
  { name: "মেহেদী হক", pct: 41, chip: "yellow", memberId: "WS212", since: "4 Sep 2024", rating: "C", level: 3, exams: 118, preparingFor: "NTRCA", gender: "Male", birthday: "25 Nov", majorSubject: "Law", institute: "Jagannath University", district: "Cumilla", subgroup: "C" },
  { name: "সুমাইয়া চৌধুরী", pct: 7, chip: "red", memberId: "WS211", since: "11 Oct 2022", rating: "C", level: 1, exams: 129, preparingFor: "BAR / BJS", gender: "Female", birthday: "4 Dec", majorSubject: "Statistics", institute: "Islamic University, Kushtia", district: "Narayanganj", subgroup: "C" },
  { name: "ইমরান আলম", pct: 80, chip: "green", memberId: "WS210", since: "18 Nov 2023", rating: "A", level: 2, exams: 140, preparingFor: "BCS", gender: "Male", birthday: "11 Jan", majorSubject: "Sociology", institute: "Rangpur Carmichael College", district: "Gazipur", subgroup: "C" },
  { name: "নাজিফা রায়", pct: 83, chip: "green", memberId: "WS209", since: "25 Dec 2024", rating: "A", level: 3, exams: 151, preparingFor: "Bank", gender: "Female", birthday: "18 Feb", majorSubject: "History", institute: "BUET", district: "Bogura", subgroup: "C" },
  { name: "নাঈম মিয়া", pct: 86, chip: "green", memberId: "WS208", since: "4 Jan 2022", rating: "A", level: 1, exams: 162, preparingFor: "DP", gender: "Male", birthday: "25 Mar", majorSubject: "Chemistry", institute: "Dhaka College", district: "Jessore", subgroup: "C" },
  { name: "রুমানা দাস", pct: 89, chip: "green", memberId: "WS207", since: "11 Feb 2023", rating: "A", level: 2, exams: 173, preparingFor: "NTRCA", gender: "Female", birthday: "4 Apr", majorSubject: "Mathematics", institute: "Eden Mohila College", district: "Faridpur", subgroup: "C" },
  { name: "রায়হান আকরাম", pct: 92, chip: "green", memberId: "WS206", since: "18 Mar 2024", rating: "A", level: 3, exams: 184, preparingFor: "BAR / BJS", gender: "Male", birthday: "11 May", majorSubject: "Public Administration", institute: "Chittagong College", district: "Noakhali", subgroup: "D" },
  { name: "ইশরাত খাতুন", pct: 95, chip: "green", memberId: "WS205", since: "25 Apr 2022", rating: "A", level: 1, exams: 195, preparingFor: "BCS", gender: "Female", birthday: "18 Jun", majorSubject: "Botany", institute: "University of Dhaka", district: "Dhaka", subgroup: "D" },
  { name: "শাকিল রশীদ", pct: 42, chip: "yellow", memberId: "WS204", since: "4 May 2023", rating: "C", level: 2, exams: 206, preparingFor: "Bank", gender: "Male", birthday: "25 Jul", majorSubject: "Zoology", institute: "Jahangirnagar University", district: "Chattogram", subgroup: "D" },
  { name: "সাবরিনা হক", pct: 47, chip: "yellow", memberId: "WS203", since: "11 Jun 2024", rating: "C", level: 3, exams: 217, preparingFor: "DP", gender: "Female", birthday: "4 Aug", majorSubject: "Bangla", institute: "Chittagong University", district: "Rajshahi", subgroup: "D" },
  { name: "জাহিদুল সাইফুল্লাহ", pct: 52, chip: "yellow", memberId: "WS202", since: "18 Jul 2022", rating: "C", level: 1, exams: 228, preparingFor: "NTRCA", gender: "Male", birthday: "11 Sep", majorSubject: "Islamic Studies", institute: "Rajshahi University", district: "Khulna", subgroup: "D" },
  { name: "তানিয়া মিমি", pct: 13, chip: "red", memberId: "WS201", since: "25 Aug 2023", rating: "C", level: 2, exams: 239, preparingFor: "BAR / BJS", gender: "Female", birthday: "18 Oct", majorSubject: "Marketing", institute: "Khulna University", district: "Sylhet", subgroup: "D" },
  { name: "মিজানুর ইকবাল", pct: 85, chip: "green", memberId: "WS200", since: "4 Sep 2024", rating: "A", level: 3, exams: 250, preparingFor: "BCS", gender: "Male", birthday: "25 Nov", majorSubject: "English", institute: "Sylhet Agricultural University", district: "Barishal", subgroup: "D" },
  { name: "মৌসুমী ইসলাম", pct: 88, chip: "green", memberId: "WS199", since: "11 Oct 2022", rating: "A", level: 1, exams: 261, preparingFor: "Bank", gender: "Female", birthday: "4 Dec", majorSubject: "Accounting", institute: "Barishal University", district: "Rangpur", subgroup: "D" },
  { name: "আরিফুল আরাফাত", pct: 91, chip: "green", memberId: "WS198", since: "18 Nov 2023", rating: "A", level: 2, exams: 272, preparingFor: "DP", gender: "Male", birthday: "11 Jan", majorSubject: "Physics", institute: "Comilla University", district: "Mymensingh", subgroup: "D" },
  { name: "লামিয়া আক্তার", pct: 94, chip: "green", memberId: "WS197", since: "25 Dec 2024", rating: "A", level: 3, exams: 283, preparingFor: "NTRCA", gender: "Female", birthday: "18 Feb", majorSubject: "Economics", institute: "Jagannath University", district: "Cumilla", subgroup: "D" },
  { name: "সোহেল উদ্দিন", pct: 97, chip: "green", memberId: "WS196", since: "4 Jan 2022", rating: "A", level: 1, exams: 34, preparingFor: "BAR / BJS", gender: "Male", birthday: "25 Mar", majorSubject: "Finance", institute: "Islamic University, Kushtia", district: "Narayanganj", subgroup: "D" },
  { name: "জান্নাতুল জাহান", pct: 75, chip: "yellow", memberId: "WS195", since: "11 Feb 2023", rating: "B", level: 2, exams: 45, preparingFor: "BCS", gender: "Female", birthday: "4 Apr", majorSubject: "Political Science", institute: "Rangpur Carmichael College", district: "Gazipur", subgroup: "D" },
  { name: "বায়েজিদ ইসলাম", pct: 53, chip: "yellow", memberId: "WS194", since: "18 Mar 2024", rating: "C", level: 3, exams: 56, preparingFor: "Bank", gender: "Male", birthday: "11 May", majorSubject: "Education", institute: "BUET", district: "Bogura", subgroup: "E" },
  { name: "রিমা বেগম", pct: 58, chip: "yellow", memberId: "WS193", since: "25 Apr 2022", rating: "B", level: 1, exams: 67, preparingFor: "DP", gender: "Female", birthday: "18 Jun", majorSubject: "Management", institute: "Dhaka College", district: "Jessore", subgroup: "E" },
  { name: "নাজমুল আহমেদ", pct: 63, chip: "yellow", memberId: "WS192", since: "4 May 2023", rating: "B", level: 2, exams: 78, preparingFor: "NTRCA", gender: "Male", birthday: "25 Jul", majorSubject: "Law", institute: "Eden Mohila College", district: "Faridpur", subgroup: "E" },
  { name: "শারমিন তাবাসসুম", pct: 19, chip: "red", memberId: "WS191", since: "11 Jun 2024", rating: "C", level: 3, exams: 89, preparingFor: "BAR / BJS", gender: "Female", birthday: "4 Aug", majorSubject: "Statistics", institute: "Chittagong College", district: "Noakhali", subgroup: "E" },
  { name: "তৌহিদুল হোসেন", pct: 90, chip: "green", memberId: "WS190", since: "18 Jul 2022", rating: "A", level: 1, exams: 100, preparingFor: "BCS", gender: "Male", birthday: "11 Sep", majorSubject: "Sociology", institute: "University of Dhaka", district: "Dhaka", subgroup: "E" },
  { name: "নওরিন ইয়াসমিন", pct: 93, chip: "green", memberId: "WS189", since: "25 Aug 2023", rating: "A", level: 2, exams: 111, preparingFor: "Bank", gender: "Female", birthday: "18 Oct", majorSubject: "History", institute: "Jahangirnagar University", district: "Chattogram", subgroup: "E" },
  { name: "ইফতেখার হাসান", pct: 96, chip: "green", memberId: "WS188", since: "4 Sep 2024", rating: "A", level: 3, exams: 122, preparingFor: "DP", gender: "Male", birthday: "25 Nov", majorSubject: "Chemistry", institute: "Chittagong University", district: "Rajshahi", subgroup: "F" },
  { name: "তাহমিনা সুলতানা", pct: 99, chip: "green", memberId: "WS187", since: "11 Oct 2022", rating: "A", level: 1, exams: 133, preparingFor: "NTRCA", gender: "Female", birthday: "4 Dec", majorSubject: "Mathematics", institute: "Rajshahi University", district: "Khulna", subgroup: "F" },
  { name: "রুবেল খান", pct: 77, chip: "yellow", memberId: "WS186", since: "18 Nov 2023", rating: "B", level: 2, exams: 144, preparingFor: "BAR / BJS", gender: "Male", birthday: "11 Jan", majorSubject: "Public Administration", institute: "Khulna University", district: "Sylhet", subgroup: "F" },
  { name: "মেহজাবিন ফেরদৌস", pct: 80, chip: "green", memberId: "WS185", since: "25 Dec 2024", rating: "A", level: 3, exams: 155, preparingFor: "BCS", gender: "Female", birthday: "18 Feb", majorSubject: "Botany", institute: "Sylhet Agricultural University", district: "Barishal", subgroup: "F" },
  { name: "শাহরিয়ার শেখ", pct: 64, chip: "yellow", memberId: "WS184", since: "4 Jan 2022", rating: "B", level: 1, exams: 166, preparingFor: "Bank", gender: "Male", birthday: "25 Mar", majorSubject: "Zoology", institute: "Barishal University", district: "Rangpur", subgroup: "F" },
  { name: "শিরিন চৌধুরী", pct: 69, chip: "yellow", memberId: "WS183", since: "11 Feb 2023", rating: "B", level: 2, exams: 177, preparingFor: "DP", gender: "Female", birthday: "4 Apr", majorSubject: "Bangla", institute: "Comilla University", district: "Mymensingh", subgroup: "F" },
  { name: "আসাদুজ্জামান কবির", pct: 74, chip: "yellow", memberId: "WS182", since: "18 Mar 2024", rating: "B", level: 3, exams: 188, preparingFor: "NTRCA", gender: "Male", birthday: "11 May", majorSubject: "Islamic Studies", institute: "Jagannath University", district: "Cumilla", subgroup: "G" },
  { name: "রোকসানা রায়", pct: 25, chip: "red", memberId: "WS181", since: "25 Apr 2022", rating: "C", level: 1, exams: 199, preparingFor: "BAR / BJS", gender: "Female", birthday: "18 Jun", majorSubject: "Marketing", institute: "Islamic University, Kushtia", district: "Narayanganj", subgroup: "G" },
  { name: "ফয়সাল রহমান", pct: 95, chip: "green", memberId: "WS180", since: "4 May 2023", rating: "A", level: 2, exams: 210, preparingFor: "BCS", gender: "Male", birthday: "25 Jul", majorSubject: "English", institute: "Rangpur Carmichael College", district: "Gazipur", subgroup: "G" },
  { name: "আফসানা দাস", pct: 98, chip: "green", memberId: "WS179", since: "11 Jun 2024", rating: "A", level: 3, exams: 221, preparingFor: "Bank", gender: "Female", birthday: "4 Aug", majorSubject: "Accounting", institute: "BUET", district: "Bogura", subgroup: "G" },
  { name: "ওয়াসিম রানা", pct: 76, chip: "yellow", memberId: "WS178", since: "18 Jul 2022", rating: "B", level: 1, exams: 232, preparingFor: "DP", gender: "Male", birthday: "11 Sep", majorSubject: "Physics", institute: "Dhaka College", district: "Jessore", subgroup: "H" },
  { name: "প্রিয়াঙ্কা খাতুন", pct: 79, chip: "yellow", memberId: "WS177", since: "25 Aug 2023", rating: "B", level: 2, exams: 243, preparingFor: "NTRCA", gender: "Female", birthday: "18 Oct", majorSubject: "Economics", institute: "Eden Mohila College", district: "Faridpur", subgroup: "H" },
  { name: "মামুনুর হক", pct: 82, chip: "green", memberId: "WS176", since: "4 Sep 2024", rating: "A", level: 3, exams: 254, preparingFor: "BAR / BJS", gender: "Male", birthday: "25 Nov", majorSubject: "Finance", institute: "Chittagong College", district: "Noakhali", subgroup: "H" },
  { name: "ঐশী হক", pct: 85, chip: "green", memberId: "WS175", since: "11 Oct 2022", rating: "A", level: 1, exams: 265, preparingFor: "BCS", gender: "Female", birthday: "4 Dec", majorSubject: "Political Science", institute: "University of Dhaka", district: "Dhaka", subgroup: "H" },
  { name: "জুবায়ের আলম", pct: 75, chip: "yellow", memberId: "WS174", since: "18 Nov 2023", rating: "B", level: 2, exams: 276, preparingFor: "Bank", gender: "Male", birthday: "11 Jan", majorSubject: "Education", institute: "Jahangirnagar University", district: "Chattogram", subgroup: "H" },
  { name: "নাদিয়া মিমি", pct: 41, chip: "yellow", memberId: "WS173", since: "25 Dec 2024", rating: "C", level: 3, exams: 287, preparingFor: "DP", gender: "Female", birthday: "18 Feb", majorSubject: "Management", institute: "Chittagong University", district: "Rajshahi", subgroup: "H" },
  { name: "খালিদ মিয়া", pct: 46, chip: "yellow", memberId: "WS172", since: "4 Jan 2022", rating: "C", level: 1, exams: 38, preparingFor: "NTRCA", gender: "Male", birthday: "25 Mar", majorSubject: "Law", institute: "Rajshahi University", district: "Khulna", subgroup: "H" },
  { name: "তৃষা ইসলাম", pct: 31, chip: "yellow", memberId: "WS171", since: "11 Feb 2023", rating: "C", level: 2, exams: 49, preparingFor: "BAR / BJS", gender: "Female", birthday: "4 Apr", majorSubject: "Statistics", institute: "Khulna University", district: "Sylhet", subgroup: "H" },
  { name: "রাফিউল আকরাম", pct: 75, chip: "yellow", memberId: "WS170", since: "18 Mar 2024", rating: "B", level: 3, exams: 60, preparingFor: "BCS", gender: "Male", birthday: "11 May", majorSubject: "Sociology", institute: "Sylhet Agricultural University", district: "Barishal", subgroup: "H" },
  { name: "ইতি আক্তার", pct: 78, chip: "yellow", memberId: "WS169", since: "25 Apr 2022", rating: "B", level: 1, exams: 71, preparingFor: "Bank", gender: "Female", birthday: "18 Jun", majorSubject: "History", institute: "Barishal University", district: "Rangpur", subgroup: "H" },
  { name: "তানজিল রশীদ", pct: 81, chip: "green", memberId: "WS168", since: "4 May 2023", rating: "A", level: 2, exams: 82, preparingFor: "DP", gender: "Male", birthday: "25 Jul", majorSubject: "Chemistry", institute: "Comilla University", district: "Mymensingh", subgroup: "H" },
  { name: "স্বর্ণা জাহান", pct: 84, chip: "green", memberId: "WS167", since: "11 Jun 2024", rating: "A", level: 3, exams: 93, preparingFor: "NTRCA", gender: "Female", birthday: "4 Aug", majorSubject: "Mathematics", institute: "Jagannath University", district: "Cumilla", subgroup: "H" },
];

const CHIP_STYLES: Record<AttendanceChip, { bg: string; text: string }> = {
  green: { bg: PCT_CHIP_BG.green, text: PCT_CHIP_TEXT },
  yellow: { bg: PCT_CHIP_BG.yellow, text: PCT_CHIP_TEXT },
  red: { bg: PCT_CHIP_BG.red, text: PCT_CHIP_TEXT },
};

function pctToChip(pct: number): AttendanceChip {
  return pct >= 75 ? "green" : pct >= 40 ? "yellow" : "red";
}

// ── Admin: attendance zones ───────────────────────────────────────────────────
// A separate classification from the green/yellow/red attendance chip above — zones use
// their own thresholds (and "probation" overlaps "red"), matching the Members hub in Figma.

type Zone = "red" | "yellow" | "green" | "probation";

const PROBATION_DAYS = 30;

// Days between a member's join date ("since", e.g. "23 Mar 2023") and today.
function daysSinceJoin(since: string): number {
  return Math.floor((Date.now() - new Date(since).getTime()) / (1000 * 60 * 60 * 24));
}

// Probation is tenure-based ("joined within the last 30 days"), not an attendance threshold —
// it's independent of and can overlap red/yellow/green, so its match takes the whole member
// (to read their join date) rather than just a percentage.
const ZONES: Record<Zone, { label: string; subtitle: string; bg: string; border: string; text: string; match: (m: Member) => boolean }> = {
  red: { label: "Red zone", subtitle: "Below 60% attendance", bg: "#ffebee", border: "#ff3232", text: "#ff3232", match: m => m.pct < 60 },
  yellow: { label: "Yellow zone", subtitle: "60%–79% attendance", bg: "#fef9e7", border: "#784a00", text: "#784a00", match: m => m.pct >= 60 && m.pct < 80 },
  green: { label: "Green zone", subtitle: "80% and above attendance", bg: "#b7dfb9", border: "#264a34", text: "#264a34", match: m => m.pct >= 80 },
  probation: { label: "Probational zone", subtitle: `Joined within the last ${PROBATION_DAYS} days`, bg: "#85d6ff", border: "#185a7a", text: "#185a7a", match: m => daysSinceJoin(m.since) < PROBATION_DAYS },
};

// ── Subgroup data ─────────────────────────────────────────────────────────────

const SUBGROUPS = [
  { letter: "A", captain: "Atiqul Haque", members: 10, attended: 10, goalPct: 96.0, monthlyGoalPct: 33.0, isMyGroup: true, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "B", captain: "রাকিবুল শেখ", members: 6, attended: 3, goalPct: 50.5, monthlyGoalPct: 50.5, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "C", captain: "ফারহান রানা", members: 8, attended: 2, goalPct: 20.0, monthlyGoalPct: 20.0, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "D", captain: "রায়হান আকরাম", members: 12, attended: 10, goalPct: 85.0, monthlyGoalPct: 85.0, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "E", captain: "বায়েজিদ ইসলাম", members: 6, attended: 4, goalPct: 70.0, monthlyGoalPct: 70.0, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "F", captain: "তাহমিনা সুলতানা", members: 6, attended: 3, goalPct: 45.0, monthlyGoalPct: 45.0, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "G", captain: "আসাদুজ্জামান কবির", members: 4, attended: 4, goalPct: 92.0, monthlyGoalPct: 92.0, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
  { letter: "H", captain: "ঐশী হক", members: 12, attended: 4, goalPct: 33.0, monthlyGoalPct: 33.0, isMyGroup: false, captainRating: 4.5, captainSince: "17 Jul 2026" },
];

// ── Shared: progress bar for subgroup goal ────────────────────────────────────

function SubgroupProgressBar({ pct }: { pct: number }) {
  const isGreen = pct >= 75;
  const isYellow = pct >= 40;
  const active = isGreen ? "#264A34" : isYellow ? "#665200" : "#FF3232";
  const track = isGreen ? "#b7dfb9" : isYellow ? "#f7dc6e" : "#fff5f5";
  return (
    <div className="relative w-full h-[4px] rounded-[2px]" style={{ backgroundColor: track }}>
      <div
        className="absolute left-0 top-0 h-full rounded-[2px]"
        style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: active }}
      />
      <div
        className="absolute top-1/2 size-[4px] rounded-full -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${Math.min(pct, 100)}%`, backgroundColor: active }}
      />
    </div>
  );
}

type SubgroupSort = "alphabetical" | "attendance" | "memberCount";

const SUBGROUP_SORT_OPTIONS: Array<{ id: SubgroupSort; label: string }> = [
  { id: "alphabetical", label: "Alphabetical" },
  { id: "attendance", label: "Attendance" },
  { id: "memberCount", label: "Member count" },
];

function SubgroupSortBottomSheet({ value, onSelect, onClose }: { value: SubgroupSort; onSelect: (v: SubgroupSort) => void; onClose: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>
        <div className="flex flex-col">
          {SUBGROUP_SORT_OPTIONS.map(opt => (
            <button
              key={opt.id}
              onClick={() => { onSelect(opt.id); onClose(); }}
              className="h-14 flex items-center gap-4 px-4 active:bg-gray-50 transition-colors text-left"
            >
              <div className="relative size-5 shrink-0 rounded-full border-2 flex items-center justify-center" style={{ borderColor: value === opt.id ? "#1441cc" : "#787878" }}>
                {value === opt.id && <div className="size-2.5 rounded-full bg-[#1441cc]" />}
              </div>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6" style={ns}>{opt.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Screen: Admin / Members hub ─────────────────────────────────────────────────

const MEMBERS_ATTENDANCE_BARS = [
  { month: "Jan", pct: 20 }, { month: "Feb", pct: 42 }, { month: "Mar", pct: 17 },
  { month: "Apr", pct: 36 }, { month: "May", pct: 25 }, { month: "Jun", pct: 42 },
  { month: "Jul", pct: 49 }, { month: "Aug", pct: 36 }, { month: "Sep", pct: 31 },
  { month: "Oct", pct: 74 }, { month: "Nov", pct: 56 }, { month: "Dec", pct: 36 },
];

function zoneBarColor(pct: number) {
  return pct >= 76 ? "#6fcf7e" : pct >= 41 ? "#ffcb61" : "#f04d30";
}

function AdminMembersHubScreen({ group, onBack, onTotalMembers, onSelectZone, onAddMember }: { group: Group; onBack: () => void; onTotalMembers: () => void; onSelectZone: (zone: Zone) => void; onAddMember: () => void }) {
  const zoneCounts = (Object.keys(ZONES) as Zone[]).reduce((acc, zone) => {
    acc[zone] = MEMBER_LIST.filter(m => ZONES[zone].match(m)).length;
    return acc;
  }, {} as Record<Zone, number>);

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AppHeader title="Members" onBack={onBack} />

      <div className="flex-1 overflow-y-auto flex flex-col gap-4 pt-2">
        {/* Attendance graph */}
        <div className="px-4">
          <div className="bg-[#f4f6fa] rounded-[16px] py-3 flex flex-col gap-4">
            <button onClick={onTotalMembers} className="flex items-center justify-between px-3 active:opacity-70 transition-opacity">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">Total members</span>
              <div className="flex items-center gap-1">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">{group.members}</span>
                <ChevronRight className="size-6 text-[#484848]" strokeWidth={1.5} />
              </div>
            </button>
            <div className="border-t border-[#e3e3e3] mx-3" />
            <div className="px-3 flex flex-col gap-2">
              <div className="grid grid-cols-12 gap-1 h-[100px] items-end">
                {MEMBERS_ATTENDANCE_BARS.map(bar => (
                  <div key={bar.month} className="rounded-t-sm" style={{ height: `${bar.pct}px`, backgroundColor: zoneBarColor(bar.pct) }} />
                ))}
              </div>
              <div className="grid grid-cols-12 text-right">
                {MEMBERS_ATTENDANCE_BARS.map(bar => (
                  <span key={bar.month} className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#8f8d8d] leading-4">{bar.month}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between px-3">
              {[{ c: "#f04d30", l: "0 - 40%" }, { c: "#ffcb61", l: "41 - 75%" }, { c: "#6fcf7e", l: "76 - 100%" }].map(({ c, l }) => (
                <div key={l} className="flex items-center gap-1 p-1">
                  <div className="size-2.5 rounded-[4px] shrink-0" style={{ backgroundColor: c }} />
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#484848] leading-4">{l}</span>
                </div>
              ))}
            </div>
            <p className="text-center font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4">{group.avgAttendance.toFixed(1)}% avg. attendance</p>
          </div>
        </div>

        {/* Zone cards */}
        <div className="flex flex-col gap-2 px-4">
          {(Object.keys(ZONES) as Zone[]).map(zone => {
            const z = ZONES[zone];
            return (
              <button
                key={zone}
                onClick={() => onSelectZone(zone)}
                className="h-[72px] rounded-[8px] border flex items-center px-4 gap-4 text-left active:opacity-80 transition-opacity"
                style={{ backgroundColor: z.bg, borderColor: z.border }}
              >
                <div className="flex-1 min-w-0 flex flex-col justify-center" style={{ color: z.text }}>
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-6">{z.label}</span>
                  <span className="font-['Noto_Sans',sans-serif] text-[14px] leading-5 truncate">{z.subtitle}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0" style={{ color: z.text }}>
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-6">{zoneCounts[zone]}</span>
                  <ChevronRight className="size-6" strokeWidth={1.5} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 p-3">
        <button onClick={onAddMember} className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center gap-2 active:opacity-90 transition-opacity">
          <UserPlus className="size-6 text-white" strokeWidth={1.5} />
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Add new member</span>
        </button>
      </div>
    </div>
  );
}

// ── Screen: Group Members ─────────────────────────────────────────────────────

function RemoveFromSubgroupDialog({ firstName, subgroupLetter, groupName, onCancel, onConfirm }: { firstName: string; subgroupLetter: string; groupName: string; onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-[#f4f6fa] rounded-[12px] overflow-hidden"
      >
        <div className="pt-[12px] px-[12px] pb-0 flex flex-col gap-[16px]">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Remove {firstName} from Subgroup {subgroupLetter}?
          </p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            They'll stay a member of {groupName} — this only removes them from the subgroup. You can add them back anytime.
          </p>
        </div>
        <div className="flex gap-[8px] items-center p-[12px]">
          <button onClick={onConfirm} className="flex-1 h-[48px] rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#d40000]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Remove
            </span>
          </button>
          <button onClick={onCancel} className="flex-1 h-[48px] bg-[#1441cc] rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Cancel
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function DeleteSubgroupDialog({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
        className="w-full bg-white rounded-[12px] overflow-hidden"
      >
        <div className="pt-[20px] px-[16px] pb-0 flex flex-col gap-[12px]">
          <p className="font-['Noto_Sans',sans-serif] font-medium text-[20px] leading-[28px] text-black" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Delete Subgroup?
          </p>
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[14px] leading-[20px] text-[#484848]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
            Are you sure you want to delete this subgroup? This action cannot be undone.
          </p>
        </div>
        <div className="flex gap-[8px] items-center p-[16px] justify-end">
          <button onClick={onConfirm} className="h-[48px] px-4 rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-[#d40000]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Delete
            </span>
          </button>
          <button onClick={onCancel} className="h-[48px] px-6 bg-[#1441cc] rounded-[8px] flex items-center justify-center">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px] text-white" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
              Cancel
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Bottom sheet shown when a member row is tapped — same "Member Details" layout as the
// Joining Requests detail sheet, minus the notes/accept-reject (not applicable to an existing member).
const MEMBER_MONTHLY_EXAM_TOTAL = 300;

function MemberDetailSheet({ member, isAdmin, onRemove, onClose, hideContactRow }: { member: Member; isAdmin?: boolean; onRemove?: () => void; onClose: () => void; hideContactRow?: boolean }) {
  const infoRows: Array<[string, string]> = [
    ["Preparing for", member.preparingFor],
    ["Gender", member.gender],
    ["Birthday", member.birthday],
    ["Major subject", member.majorSubject],
    ["Educational institute", member.institute],
    ["Home district", member.district],
  ];
  const attended = Math.round((member.pct / 100) * MEMBER_MONTHLY_EXAM_TOTAL);
  const [copied, setCopied] = useState(false);

  function copyDetails() {
    const text = `${member.name}\nID: ${member.memberId}\nUser since: ${member.since}\nLevel ${member.level} • Total exam: ${member.exams}`;
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-6 pb-6">
          <div className="flex gap-6 items-start px-4">
            <MemberAvatar size={80} name={member.name} />
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{member.name}</span>
                  <RatingBadge letter={member.rating} />
                </div>
                <div className="flex gap-6 items-start">
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">ID: {member.memberId}</span>
                  <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4">User since: {member.since}</span>
                </div>
              </div>
              <div className="flex gap-6 items-center h-6">
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Level {member.level}</span>
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Total exam: {member.exams}</span>
              </div>
              {!hideContactRow && (
                <div className="flex items-center gap-4">
                  <button className="h-9 flex items-center gap-1.5 px-3 rounded-full border border-[#c7c7c7] active:bg-gray-50 transition-colors">
                    <MessageCircle className="size-4 text-green-600" strokeWidth={1.75} />
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5">Contact</span>
                  </button>
                  <button onClick={copyDetails} className="flex items-center gap-1.5 active:opacity-70 transition-opacity">
                    {copied ? <Check className="size-4 text-green-600" strokeWidth={2} /> : <Copy className="size-4 text-[#1441cc]" strokeWidth={1.75} />}
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc] leading-5">{copied ? "Copied" : "Copy details"}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 px-4">
            <div className="flex gap-3 items-center">
              <div className="flex-1 h-px bg-[#c7c5ce]" />
              <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4 shrink-0">Group contribution (Monthly)</span>
              <div className="flex-1 h-px bg-[#c7c5ce]" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">
                  Attendance ({attended}/{MEMBER_MONTHLY_EXAM_TOTAL}) <span className="text-[#787878]">(Estimated)</span>
                </span>
                <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">{member.pct.toFixed(1)}%</span>
              </div>
              <SubgroupProgressBar pct={member.pct} />
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4">
            <div className="flex gap-3 items-center">
              <div className="flex-1 h-px bg-[#c7c5ce]" />
              <span className="font-['Noto_Sans',sans-serif] text-[12px] text-[#787878] leading-4 shrink-0">Member Details</span>
              <div className="flex-1 h-px bg-[#c7c5ce]" />
            </div>
            <div className="flex flex-col gap-4">
              {infoRows.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">{label}</span>
                  <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0 flex flex-col gap-2 p-3">
          {isAdmin && (
            <div className="flex gap-2 items-center">
              <button
                onClick={onRemove}
                className="flex-1 h-12 bg-[#ffdad6] rounded-full flex items-center justify-center gap-2 active:opacity-80 transition-opacity"
              >
                <UserMinus className="size-5 text-[#930000]" strokeWidth={1.5} />
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#930000]">Remove</span>
              </button>
              <button className="flex-1 h-12 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white">Contact</span>
              </button>
            </div>
          )}
          <button
            onClick={onClose}
            className="w-full h-[56px] rounded-[100px] border border-[#c7c7c7] flex items-center justify-center"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] leading-[24px] tracking-[0.15px] text-[#484848]">Close</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

type MemberSort = "attendance" | "alphabetical" | "subgroup";

const SORT_OPTIONS: Array<{ id: MemberSort; label: string }> = [
  { id: "attendance", label: "Attendance" },
  { id: "alphabetical", label: "Alphabetical" },
  { id: "subgroup", label: "Sub group" },
];

const SUBGROUP_MEMBER_SORT_OPTIONS: Array<{ id: MemberSort; label: string }> = [
  { id: "attendance", label: "Attendance" },
  { id: "alphabetical", label: "Alphabetical" },
];

function SortBottomSheet({ value, onSelect, onClose, options = SORT_OPTIONS }: { value: MemberSort; onSelect: (v: MemberSort) => void; onClose: () => void; options?: Array<{ id: MemberSort; label: string }> }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>
        <div className="flex flex-col">
          {options.map(opt => (
            <button
              key={opt.id}
              onClick={() => { onSelect(opt.id); onClose(); }}
              className="h-14 flex items-center gap-4 px-4 active:bg-gray-50 transition-colors text-left"
            >
              <div className="relative size-5 shrink-0 rounded-full border-2 flex items-center justify-center" style={{ borderColor: value === opt.id ? "#1441cc" : "#787878" }}>
                {value === opt.id && <div className="size-2.5 rounded-full bg-[#1441cc]" />}
              </div>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{opt.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function GroupMembersScreen({ onBack, group, zone, isAdmin, title, hideCountRow, subgroupLetter, targetPct }: { onBack: () => void; group: Group; zone?: Zone; isAdmin?: boolean; title?: string; hideCountRow?: boolean; subgroupLetter?: string; targetPct?: number }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<MemberSort>("attendance");
  const [sorting, setSorting] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);
  const [removing, setRemoving] = useState<Member | null>(null);

  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set());

  const zoneConfig = zone ? ZONES[zone] : null;
  const scoped = MEMBER_LIST.filter(m => !removedIds.has(m.memberId))
    .filter(m => !subgroupLetter || m.subgroup === subgroupLetter);
  // When reached from a subgroup's Today's/Monthly Goal, each member's shown attendance
  // is scaled so the scoped group's average matches that goal's own percentage (e.g.
  // Monthly Goal at 33% shows member rows averaging 33%, not the members' raw overall pct).
  const remaining = (() => {
    if (targetPct == null || scoped.length === 0) return scoped;
    const currentAvg = scoped.reduce((s, m) => s + m.pct, 0) / scoped.length;
    if (currentAvg === 0) return scoped;
    const scale = targetPct / currentAvg;
    return scoped.map(m => {
      const pct = Math.min(100, Math.max(0, Math.round(m.pct * scale * 10) / 10));
      return { ...m, pct, chip: pctToChip(pct) };
    });
  })();
  const base = zoneConfig ? remaining.filter(m => zoneConfig.match(m)) : remaining;
  const filtered = (query.trim() ? base.filter(m => m.name.toLowerCase().includes(query.trim().toLowerCase())) : base)
    .slice()
    .sort((a, b) => {
      if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
      if (sortBy === "subgroup") return a.subgroup.localeCompare(b.subgroup);
      return b.pct - a.pct;
    });

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {selected && (
          <MemberDetailSheet
            member={selected}
            isAdmin={isAdmin}
            onRemove={() => { setRemoving(selected); setSelected(null); }}
            onClose={() => setSelected(null)}
          />
        )}
        {removing && (
          <RemoveFromSubgroupDialog
            firstName={removing.name.split(" ")[0]}
            subgroupLetter={removing.subgroup}
            groupName={group.name}
            onCancel={() => setRemoving(null)}
            onConfirm={() => {
              setRemovedIds(prev => new Set(prev).add(removing.memberId));
              setRemoving(null);
            }}
          />
        )}
        {sorting && (
          <SortBottomSheet
            value={sortBy}
            onSelect={setSortBy}
            onClose={() => setSorting(false)}
            options={hideCountRow ? SUBGROUP_MEMBER_SORT_OPTIONS : SORT_OPTIONS}
          />
        )}
      </AnimatePresence>

      <InlineSearchHeader
        title={zoneConfig ? zoneConfig.label : title ?? "Group members"}
        onBack={onBack}
        searching={searching}
        onStartSearch={() => setSearching(true)}
        query={query}
        onQueryChange={setQuery}
        onExit={() => { setSearching(false); setQuery(""); }}
        placeholder="Search by name"
        trailing={
          <button
            onClick={() => setSorting(true)}
            aria-label="Sort"
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <ArrowUpDown className="size-5 text-[#484848]" strokeWidth={1.5} />
          </button>
        }
      />

      {/* Sub-header: total count + badge (or zone total) */}
      {!hideCountRow && (
      <div className="shrink-0 flex items-center gap-[8px] px-4 py-[6px]">
        {zoneConfig ? (
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black tracking-[0.1px] leading-[20px]" style={ns}>
            Total {filtered.length}
          </span>
        ) : (
          <>
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black tracking-[0.1px] leading-[20px]" style={ns}>
              Total members ({group.members}/100)
            </span>
            <div className="bg-[#0c5fff] rounded-[4px] px-2 h-5 flex items-center shrink-0">
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-white leading-[16px]" style={ns}>
                Open to Join
              </span>
            </div>
          </>
        )}
      </div>
      )}

      {/* Column labels */}
      <div className="shrink-0 flex items-center justify-between px-4 py-2">
        <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>Member</span>
        <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>Attendance</span>
      </div>

      {/* Member list */}
      <div className="flex-1 overflow-y-auto">
        {filtered.map((member, i) => {
          const chip = CHIP_STYLES[pctToChip(member.pct)];
          const showSubgroupHeader = sortBy === "subgroup" && (i === 0 || filtered[i - 1].subgroup !== member.subgroup);
          return (
            <div key={member.memberId}>
              {showSubgroupHeader && (
                <div className="px-4 pt-3 pb-1 bg-[#f4f6fa]">
                  <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>
                    Subgroup {member.subgroup}
                  </span>
                </div>
              )}
              <button
                onClick={() => setSelected(member)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white active:bg-gray-50 transition-colors text-left"
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <MemberAvatar size={30} name={member.name} />
                  <span
                    className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px] truncate"
                    style={ns}
                  >
                    {member.name}
                  </span>
                </div>
                {/* Attendance percentage */}
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <RatingBadge letter={subgroupLetter ?? member.rating} />
                  {/* Attendance chip — same design as the percentage chip in the Available Groups list */}
                  <div
                    className="rounded-[4px] h-6 px-2 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: chip.bg }}
                  >
                    <span
                      className="font-['Noto_Sans',sans-serif] text-[12px] font-normal leading-4"
                      style={{ color: chip.text }}
                    >
                      {member.pct.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </button>
              {i < filtered.length - 1 && (
                <div className="mx-0 border-t border-[#C7C5CE]" />
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="px-4 py-8 text-center font-['Noto_Sans',sans-serif] text-[14px] text-[#787878]">No members found.</p>
        )}
      </div>
    </div>
  );
}

// ── Screen: Subgroup List ─────────────────────────────────────────────────────

// ── Goal detail data ──────────────────────────────────────────────────────────

interface ExamListItem {
  name: string;
  attended: number;
  total: number;
}

const EXAM_LIST: ExamListItem[] = [
  { name: "ফ্রি সাপ্তাহিক মডেল টেস্ট", attended: 8, total: MEMBER_LIST.length },
  { name: "গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা", attended: 10, total: MEMBER_LIST.length },
  { name: "২০২২ সাল ভিত্তিক সিনিয়র অফিসার নিয়োগ প্রস্তুতি", attended: 7, total: MEMBER_LIST.length },
  { name: "মাসিক মডেল টেস্ট [পরিপূর্ণ সিলেবাস]", attended: 4, total: MEMBER_LIST.length },
];

// Monthly Goal shows the full mandatory-exam list (Today's Goal only shows a trimmed 4).
const MONTHLY_EXAM_LIST: ExamListItem[] = [
  { name: "ফ্রি সাপ্তাহিক মডেল টেস্ট", attended: 8, total: MEMBER_LIST.length },
  { name: "১৪০ দিনে ৪৭তম বিসিএস প্রস্তুতি", attended: 6, total: MEMBER_LIST.length },
  { name: "গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা", attended: 10, total: MEMBER_LIST.length },
  { name: "ব্যাংক নিয়োগ প্রস্তুতি - লং কোর্স", attended: 5, total: MEMBER_LIST.length },
  { name: "২০২২ সাল ভিত্তিক সিনিয়র অফিসার নিয়োগ প্রস্তুতি", attended: 7, total: MEMBER_LIST.length },
  { name: "ব্যাংক ডেইলি কুইজ", attended: 9, total: MEMBER_LIST.length },
  { name: "মাসিক মডেল টেস্ট [পরিপূর্ণ সিলেবাস]", attended: 4, total: MEMBER_LIST.length },
];

// Real monthly occurrence count per exam in MONTHLY_EXAM_LIST (same order): the weekly exam
// runs ~4×/month, the monthly exam runs 1×/month, and the 5 daily exams split the remaining
// 115 of the 120 total monthly slots-per-member (EXAM_LIST.length × 30) evenly at 23 each.
const MONTHLY_EXAM_OCCURRENCES = [4, 23, 23, 23, 23, 23, 1];

type GoalMode = "today" | "monthly";

// The admin's own group-level "Today's goal" / "Monthly goal" card is the real sum across
// every subgroup: total = each subgroup's own member×exam-count total added up, attended =
// each subgroup's own attended (from its goalPct) added up, and the percentage is derived
// from that sum — never set independently.
// "Live Exams (Estimated)" is always the real exam-cadence-derived capacity — every
// member's real monthly slot count (EXAM_LIST.length × 30) summed across the roster — never
// overridden by the admin's separate Monthly Goal *target* (that target is a distinct number
// shown in the Monthly goal chart, not a replacement for this real estimate).
function computeGroupGoalAggregate(subgroups: SubgroupData[], mode: GoalMode): GoalDetailOverride {
  const perMember = mode === "today" ? EXAM_LIST.length : EXAM_LIST.length * 30;
  let bigCount = 0, attended = 0;
  for (const sg of subgroups) {
    const total = sg.members * perMember;
    const pct = mode === "today" ? sg.goalPct : sg.monthlyGoalPct;
    bigCount += total;
    attended += Math.round(total * pct / 100);
  }
  const goalPct = bigCount > 0 ? (attended / bigCount) * 100 : 0;
  const remaining = Math.max(bigCount - attended, 0);
  return { goalPct, bigCount, attended, remaining, barPct: goalPct };
}

// ── Screen: Today's Goal / Monthly Goal ───────────────────────────────────────

// Override lets a caller replace the subgroup-derived numbers with fixed values — used for
// the admin's own group-level "Today's goal" entry point, whose card totals (303 / 60.0% /
// 150 attended / 53 remaining) don't reduce to any subgroup's member/goalPct math.
interface GoalDetailOverride { goalPct: number; bigCount: number; attended: number; remaining: number; barPct: number }

function GoalDetailScreen({ mode, sg, onBack, onSelectExam, onViewAttendance, override, monthlyGoalTarget }: { mode: GoalMode; sg: SubgroupData; onBack: () => void; onSelectExam: (exam: ExamListItem) => void; onViewAttendance: (exam: ExamListItem) => void; override?: GoalDetailOverride; monthlyGoalTarget?: number }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [showExamsInfo, setShowExamsInfo] = useState(false);

  const title = mode === "today" ? "Today's goal" : "Monthly goal";
  const examList = mode === "today" ? EXAM_LIST : MONTHLY_EXAM_LIST;

  // The admin's own group-level entry (override set) carries the real sum-of-all-subgroups
  // totals/attended (computed by the caller). Reached from a specific subgroup instead,
  // sg.goalPct is the authoritative percentage for that subgroup. Either way, every number
  // on this screen (exam-list total, attended, remaining, and each individual exam row) is
  // derived from the same bigCount/attended/goalPct so nothing can drift out of sync.
  let bigCount: number, attended: number, remaining: number, goalPct: number;
  if (override) {
    bigCount = override.bigCount;
    attended = override.attended;
    remaining = override.remaining;
    goalPct = override.goalPct;
  } else {
    const memberCount = sg.members;
    // Today's total is a single day's worth of exams (member count × today's 4-exam slate).
    // Monthly's total is the real monthly must-have capacity per member: EXAM_LIST.length × 30
    // days (120), matching MONTHLY_EXAM_OCCURRENCES' sum (4 + 23×5 + 1 = 120) — not a flat
    // "5 exams/day" guess.
    bigCount = mode === "today" ? memberCount * examList.length : memberCount * EXAM_LIST.length * 30;
    goalPct = mode === "today" ? sg.goalPct : sg.monthlyGoalPct;
    attended = Math.round(bigCount * goalPct / 100);
    remaining = Math.max(bigCount - attended, 0);
  }

  const n = examList.length;
  // Today's goal: all 4 exams run daily, so rows split bigCount evenly. Monthly goal: rows
  // split by each exam's real occurrence count (MONTHLY_EXAM_OCCURRENCES) — the weekly exam's
  // row is far smaller than the daily exams' rows, not an even 1/7th each. Leftover units from
  // flooring go to the highest-weight (most frequent) rows first.
  const occurrenceWeights = mode === "monthly" ? MONTHLY_EXAM_OCCURRENCES : undefined;
  let rowTotals: number[];
  if (occurrenceWeights) {
    const weightSum = occurrenceWeights.reduce((a, b) => a + b, 0);
    const raw = occurrenceWeights.map(w => (bigCount * w) / weightSum);
    const floors = raw.map(Math.floor);
    const used = floors.reduce((a, b) => a + b, 0);
    const remainder = bigCount - used;
    const order = raw
      .map((v, i) => ({ i, frac: v - floors[i], w: occurrenceWeights[i] }))
      .sort((a, b) => b.w - a.w || b.frac - a.frac);
    rowTotals = [...floors];
    for (let k = 0; k < remainder; k++) rowTotals[order[k].i] += 1;
  } else {
    const baseTotal = Math.floor(bigCount / n);
    const totalRemainder = bigCount - baseTotal * n;
    rowTotals = Array.from({ length: n }, (_, i) => baseTotal + (i < totalRemainder ? 1 : 0));
  }

  // Only attended varies row to row (weighted, so it doesn't look like a flat percentage
  // repeated on every button) — both the row totals and the row attended counts still sum
  // exactly to the numbers in the summary card above.
  const attendedWeights = Array.from({ length: n }, (_, i) => 0.65 + ((i * 53 + 17) % 71) / 100);
  const rowAttendedRaw = rowTotals.map((t, i) => Math.min(t, Math.round(t * goalPct * attendedWeights[i] / 100)));
  const rowAttendedSum = rowAttendedRaw.reduce((a, b) => a + b, 0);
  let attendedDiff = attended - rowAttendedSum;
  const rowAttended = [...rowAttendedRaw];
  // Budget sized to the actual gap (not a small fixed constant) — with weighted, non-mean-1
  // row estimates, the gap scales with bigCount, and near 0%/100% most rows saturate so a
  // single free row may need to absorb the whole gap alone (one nudge per n-iteration lap).
  const nudgeBudget = Math.abs(attendedDiff) * n + n;
  for (let i = 0; attendedDiff !== 0 && i < nudgeBudget; i++) {
    const idx = i % n;
    if (attendedDiff > 0 && rowAttended[idx] < rowTotals[idx]) { rowAttended[idx]++; attendedDiff--; }
    else if (attendedDiff < 0 && rowAttended[idx] > 0) { rowAttended[idx]--; attendedDiff++; }
  }
  const examRows = examList.map((exam, i) => ({ ...exam, total: rowTotals[i], attended: rowAttended[i] }));
  const barPct = goalPct;

  const chipColor = pctChipStyle(goalPct);

  // The Monthly goal chart tracks progress against the admin's own saved target (Group
  // Settings' "Monthly goal (exams)"), separate from "Live Exams (Estimated)" above — that
  // stays the real exam-cadence estimate (bigCount), never overridden. Falls back to bigCount
  // when no admin target is available (e.g. a subgroup's own Monthly Goal page).
  const monthlyChartTotal = monthlyGoalTarget ?? bigCount;
  const monthlyChartRatio = monthlyChartTotal > 0 ? Math.min(100, (attended / monthlyChartTotal) * 100) : 0;
  const monthlyChartPcts = (() => {
    if (mode !== "monthly") return [];
    const currentAvg = DAILY_GOAL_PCTS.reduce((a, b) => a + b, 0) / DAILY_GOAL_PCTS.length;
    if (currentAvg === 0) return DAILY_GOAL_PCTS;
    const scale = monthlyChartRatio / currentAvg;
    return DAILY_GOAL_PCTS.map(p => Math.min(100, Math.max(0, Math.round(p * scale))));
  })();

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {showExamsInfo && (
          <MandatoryExamsInfoBottomSheet onClose={() => setShowExamsInfo(false)} />
        )}
      </AnimatePresence>

      {/* App bar */}
      <div className="shrink-0 h-12 bg-white flex items-center px-1">
        <button
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <p
          className="absolute left-14 right-14 font-['Noto_Sans',sans-serif] font-normal text-[18px] text-black leading-[28px] truncate"
          style={ns}
        >
          {title}
        </p>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 px-4 pt-4 pb-8">

          {/* Summary card */}
          <div className="bg-white rounded-[12px] border border-[#e3e3e3] p-3 flex flex-col gap-3">
            {/* Live Exams header + chip */}
            <div className="flex items-center justify-between w-full">
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-[20px]" style={ns}>
                Live Exams (Estimated)
              </span>
              <div className="rounded-[4px] px-2 h-5 flex items-center" style={{ backgroundColor: chipColor.bg }}>
                <span
                  className="font-['Noto_Sans',sans-serif] font-normal text-[12px] leading-[16px]"
                  style={{ ...ns, color: chipColor.text }}
                >
                  {goalPct.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Big count */}
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px]"
              style={ns}
            >
              {bigCount}
            </span>

            {/* Progress bar */}
            <ActivityProgressBar pct={barPct} />

            {/* Legend row */}
            <div className="flex items-center justify-between w-full">
              {/* Attended */}
              <div className="flex items-center gap-1">
                <svg className="size-2 shrink-0" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#1441CC" />
                </svg>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>
                  Attended:
                </span>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-[16px]" style={ns}>
                  {attended}
                </span>
              </div>
              {/* Remaining */}
              <div className="flex items-center gap-1">
                <svg className="size-2 shrink-0" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#D6E4FF" />
                </svg>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>
                  Remaining (Est):
                </span>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-[16px]" style={ns}>
                  {remaining}
                </span>
              </div>
            </div>

            {/* View attendance button */}
            <div className="flex justify-center">
              <button
                onClick={() => onViewAttendance(EXAM_LIST[0])}
                className="px-4 py-[10px] flex items-center justify-center active:opacity-70 transition-opacity"
              >
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-[#1441cc] leading-[20px]" style={ns}>
                  View attendance
                </span>
              </button>
            </div>
          </div>

          {/* Monthly goal chart — total attendance against total monthly-goal exams, by date */}
          {mode === "monthly" && (
            <div className="bg-[#f4f6fa] rounded-[16px] p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5" style={ns}>Monthly goal</span>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-5" style={ns}>{monthlyChartTotal >= 1000 ? `${(monthlyChartTotal / 1000).toFixed(1)} K` : monthlyChartTotal}</span>
              </div>
              <div className="grid gap-x-1 h-[100px] items-end" style={{ gridTemplateColumns: `repeat(${monthlyChartPcts.length}, minmax(0, 1fr))` }}>
                {monthlyChartPcts.map((pct, i) => (
                  <div key={i} className="relative h-full w-full rounded-full overflow-hidden bg-[#e3e3e3]">
                    {pct > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 rounded-full" style={{ height: `${pct}%`, backgroundColor: zoneBarColor(pct) }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                {[1, 10, 20, monthlyChartPcts.length].map(day => (
                  <span key={day} className="font-['Noto_Sans',sans-serif] font-medium text-[10px] text-[#8f8d8d] leading-4" style={ns}>{day}</span>
                ))}
              </div>
              <span className="text-center font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-4" style={ns}>{monthlyChartRatio.toFixed(1)}% achievement ratio</span>
            </div>
          )}

          {/* Mandatory exam list */}
          <div className="flex flex-col gap-3">
            {/* Section header */}
            <div className="flex items-center justify-between w-full">
              <span
                className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px]"
                style={ns}
              >
                বাধ্যতামূলক পরিক্ষাসমুহ
              </span>
              {/* Info icon */}
              <button
                onClick={() => setShowExamsInfo(true)}
                className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
              >
                <svg className="size-[19px]" fill="none" viewBox="0 0 19 19">
                  <path d={goalSvgPaths.p3e27cc90} fill="#484848" />
                </svg>
              </button>
            </div>

            {/* Exam rows */}
            <div className="flex flex-col gap-1">
              {examRows.map((exam) => {
                return (
                <button
                  key={exam.name}
                  onClick={() => onSelectExam(exam)}
                  className="h-12 w-full bg-[#f4f6fa] rounded-[8px] flex items-center justify-between px-4 active:opacity-70 transition-opacity"
                >
                  <span
                    className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black leading-[20px] truncate text-left"
                    style={ns}
                  >
                    {exam.name}
                  </span>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[14px] leading-[20px]" style={ns}>
                      <span className="text-black">{exam.attended}/</span>
                      <span className="text-[#484848]">{exam.total}</span>
                    </span>
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <mask id={`m-ar-${exam.name}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" height="24">
                        <rect fill="#D9D9D9" width="24" height="24" />
                      </mask>
                      <g mask={`url(#m-ar-${exam.name})`}>
                        <path d={goalSvgPaths.p3ecf1680} fill="black" />
                      </g>
                    </svg>
                  </div>
                </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Screen: Subgroup Detail ───────────────────────────────────────────────────

type SubgroupData = typeof SUBGROUPS[0];

function ActivityProgressBar({ pct }: { pct: number }) {
  const fill = Math.min(Math.max(pct, 0), 100);
  return (
    <div className="relative w-full h-3 flex items-center">
      <div className="absolute left-0 h-1 rounded bg-[#1441cc]" style={{ width: `${fill}%` }} />
      <div className="absolute h-1 rounded bg-[#d6e4ff]" style={{ left: `${fill}%`, right: 0 }} />
      <div className="absolute size-1 rounded-full bg-[#1441cc]" style={{ left: `calc(${fill}% - 2px)` }} />
    </div>
  );
}

function CaptainDetailsBottomSheet({ sg, onClose, onEdit }: { sg: SubgroupData; onClose: () => void; onEdit: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>

        <div className="flex items-center justify-between px-4 pb-4 shrink-0">
          <p className="font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black" style={ns}>Captain Details</p>
          <button onClick={onEdit} aria-label="Edit" className="size-10 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors">
            <Pencil className="size-5 text-[#484848]" strokeWidth={1.5} />
          </button>
        </div>

        <div className="border-t border-[#e3e3e3]" />

        <div className="flex items-center gap-3 p-4">
          <MemberAvatar size={56} name={sg.captain} />
          <div className="flex flex-col gap-1 min-w-0">
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[18px] text-black leading-[26px] truncate" style={ns}>{sg.captain}</p>
            <div className="flex items-center gap-1.5">
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#787878] leading-[20px]">Captain since: {sg.captainSince}</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 p-3">
          <button onClick={onClose} className="px-6 h-12 rounded-full border border-[#c7c7c7] flex items-center justify-center active:bg-gray-50 transition-colors">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#484848]">Close</span>
          </button>
          <button className="flex-1 h-12 rounded-full border border-[#c7c7c7] flex items-center justify-center gap-1.5 active:bg-gray-50 transition-colors">
            <MessageCircle className="size-4 text-green-600" strokeWidth={1.75} />
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black">Contact</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ChooseCaptainBottomSheet({ current, onCancel, onSave }: { current: string; onCancel: () => void; onSave: (name: string) => void }) {
  const [choice, setChoice] = useState(() => CREATE_SUBGROUP_CANDIDATES.some(c => c.name === current) ? current : CREATE_SUBGROUP_CANDIDATES[0].name);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onCancel}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>
        <p className="px-4 pb-4 font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black">Choose group captain</p>
        <div className="border-t border-[#c7c5ce]" />

        <div className="flex-1 overflow-y-auto flex flex-col">
          {CREATE_SUBGROUP_CANDIDATES.map((candidate, i) => {
            const chip = CHIP_STYLES[pctToChip(candidate.pct)];
            return (
              <div key={candidate.name}>
                <button
                  onClick={() => setChoice(candidate.name)}
                  className="w-full flex items-center gap-2 px-4 py-2 text-left active:bg-gray-50 transition-colors"
                >
                  <MemberAvatar size={30} name={candidate.name} />
                  <span className="flex-1 min-w-0 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6 truncate">
                    {candidate.name}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="rounded-[16px] h-6 px-3 flex items-center justify-center shrink-0" style={{ backgroundColor: chip.bg }}>
                      <span className="font-['Noto_Sans',sans-serif] text-[12px] font-medium" style={{ color: chip.text }}>
                        {candidate.pct.toFixed(1)}%
                      </span>
                    </div>
                    <div className="relative size-5 shrink-0 rounded-full border-2 flex items-center justify-center" style={{ borderColor: choice === candidate.name ? "#1441cc" : "#787878" }}>
                      {choice === candidate.name && <div className="size-2.5 rounded-full bg-[#1441cc]" />}
                    </div>
                  </div>
                </button>
                {i < CREATE_SUBGROUP_CANDIDATES.length - 1 && <div className="mx-4 border-t border-[#C7C5CE]" />}
              </div>
            );
          })}
        </div>

        <div className="shrink-0 flex items-center gap-3 p-3">
          <button onClick={onCancel} className="px-6 h-12 rounded-full border border-[#c7c7c7] flex items-center justify-center active:bg-gray-50 transition-colors">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#484848]">Cancel</span>
          </button>
          <button
            onClick={() => onSave(choice)}
            className="flex-1 h-12 rounded-full bg-[#1441cc] flex items-center justify-center active:opacity-90 transition-opacity"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white">Save</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SubgroupDetailScreen({ onBack, sg, groupName, onTodayGoal, onMonthlyGoal, onAddMember, onCaptainSaved, onDelete }: { onBack: () => void; sg: SubgroupData; groupName: string; onTodayGoal: () => void; onMonthlyGoal: () => void; onAddMember: () => void; onCaptainSaved: (name: string) => void; onDelete: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [sortBy, setSortBy] = useState<MemberSort>("attendance");
  const [sorting, setSorting] = useState(false);
  const [showCaptain, setShowCaptain] = useState(false);
  const [choosingCaptain, setChoosingCaptain] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);
  const [removing, setRemoving] = useState<Member | null>(null);
  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set());
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const sortedMembers = MEMBER_LIST.filter(m => m.subgroup === sg.letter && !removedIds.has(m.memberId)).sort((a, b) => (
    sortBy === "alphabetical" ? a.name.localeCompare(b.name) : b.pct - a.pct
  ));

  // sg.goalPct is this subgroup's authoritative percentage (kept fixed, e.g. Subgroup A
  // stays at 96%) — everything else here is derived from it, matching the same derivation
  // GoalDetailScreen (Today's/Monthly Goal) uses, so this preview card and its goal chip
  // always show the exact numbers you'll see after tapping in.
  const goalChipColor = pctChipStyle(sg.goalPct);
  const todayTotal = EXAM_LIST.length * sg.members;
  const todayAttended = Math.round(todayTotal * sg.goalPct / 100);
  // Monthly total is the real monthly must-have capacity per member: EXAM_LIST.length × 30
  // (120), matching GoalDetailScreen and MONTHLY_EXAM_OCCURRENCES' sum.
  const monthTotal = sg.members * EXAM_LIST.length * 30;
  const monthAttended = Math.round(monthTotal * sg.monthlyGoalPct / 100);
  const todayPct = sg.goalPct;
  const monthPct = sg.monthlyGoalPct;

  function GoalCard({ title, attended, total, footerLabel, footerPct, onPress }: {
    title: string; attended: number; total: number; footerLabel: string; footerPct: number; onPress: () => void;
  }) {
    const barPct = total > 0 ? (attended / total) * 100 : 0;
    return (
      <button
        onClick={onPress}
        className="flex-1 min-w-0 bg-white rounded-[12px] border border-[#e3e3e3] p-2 flex flex-col gap-3 text-left active:opacity-70 transition-opacity"
      >
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-[16px]" style={ns}>
            {title}
          </span>
          <svg className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
            <mask id={`m-cf-${title}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" height="20">
              <rect fill="#D9D9D9" width="20" height="20" />
            </mask>
            <g mask={`url(#m-cf-${title})`}>
              <path d={subgroupDetailSvgPaths.p1c848e00} fill="#484848" />
            </g>
          </svg>
        </div>
        {/* Count + progress */}
        <div className="flex flex-col gap-1 w-full">
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-[16px]" style={ns}>
            {attended} / {total}
          </span>
          <ActivityProgressBar pct={barPct} />
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between w-full">
          <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]" style={ns}>
            {footerLabel}
          </span>
          <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-black leading-[16px]" style={ns}>
            {footerPct.toFixed(0)}%
          </span>
        </div>
      </button>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {sorting && (
          <SortBottomSheet value={sortBy} onSelect={setSortBy} onClose={() => setSorting(false)} options={SUBGROUP_MEMBER_SORT_OPTIONS} />
        )}
        {showCaptain && (
          <CaptainDetailsBottomSheet
            sg={sg}
            onClose={() => setShowCaptain(false)}
            onEdit={() => { setShowCaptain(false); setChoosingCaptain(true); }}
          />
        )}
        {choosingCaptain && (
          <ChooseCaptainBottomSheet
            current={sg.captain}
            onCancel={() => setChoosingCaptain(false)}
            onSave={(name) => { setChoosingCaptain(false); onCaptainSaved(name); }}
          />
        )}
        {selected && (
          <MemberDetailSheet
            member={selected}
            isAdmin
            onRemove={() => { setRemoving(selected); setSelected(null); }}
            onClose={() => setSelected(null)}
          />
        )}
        {removing && (
          <RemoveFromSubgroupDialog
            firstName={removing.name.split(" ")[0]}
            subgroupLetter={sg.letter}
            groupName={groupName}
            onCancel={() => setRemoving(null)}
            onConfirm={() => {
              setRemovedIds(prev => new Set(prev).add(removing.memberId));
              setRemoving(null);
            }}
          />
        )}
        {showDeleteConfirm && (
          <DeleteSubgroupDialog
            onCancel={() => setShowDeleteConfirm(false)}
            onConfirm={() => { setShowDeleteConfirm(false); onDelete(); }}
          />
        )}
      </AnimatePresence>

      {/* App bar */}
      <div className="shrink-0 h-12 bg-white flex items-center px-1 relative">
        <button
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <p
          className="absolute left-14 right-14 font-['Noto_Sans',sans-serif] font-normal text-[18px] text-black leading-[28px] truncate"
          style={ns}
        >
          Subgroup
        </p>
        <div className="ml-auto relative">
          <button
            onClick={() => setShowMenu(v => !v)}
            aria-label="Subgroup options"
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
          >
            <MoreVertical className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          {showMenu && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
              <div className="absolute right-0 top-12 z-50 bg-white rounded-[8px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] py-1 min-w-[180px]">
                <button
                  onClick={() => { setShowMenu(false); setShowDeleteConfirm(true); }}
                  className="w-full h-11 flex items-center px-4 active:bg-gray-50 transition-colors text-left whitespace-nowrap"
                >
                  <span className="font-['Noto_Sans',sans-serif] font-normal text-[16px] text-black leading-6" style={ns}>Delete subgroup</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 pb-8">

          {/* Subgroup header card */}
          <div className="flex items-center gap-3 px-4 pt-3">
            {/* 60px letter avatar */}
            <div className="relative shrink-0 size-[60px]">
              <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="30" fill="#E6E6E6" />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[26px] text-[#1d1b20] leading-none"
                style={ns}
              >
                {sg.letter}
              </span>
            </div>
            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col gap-2">
              {/* Captain + info icon */}
              <button onClick={() => setShowCaptain(true)} className="flex items-center gap-2 active:opacity-70 transition-opacity text-left">
                <span
                  className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] shrink-0"
                  style={ns}
                >
                  Captain: {sg.captain}
                </span>
                <svg className="size-[22px] shrink-0" fill="none" viewBox="0 0 22 22">
                  <mask id="m-info" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" height="22">
                    <rect fill="#D9D9D9" width="22" height="22" />
                  </mask>
                  <g mask="url(#m-info)">
                    <path d={subgroupDetailSvgPaths.p3fdad500} fill="#484848" />
                  </g>
                </svg>
              </button>
              {/* Goal chip + stats */}
              <div className="flex items-center gap-2">
                <div className="rounded-[4px] px-2 h-5 flex items-center" style={{ backgroundColor: goalChipColor.bg }}>
                  <span
                    className="font-['Noto_Sans',sans-serif] font-normal text-[12px] leading-[16px]"
                    style={{ ...ns, color: goalChipColor.text }}
                  >
                    {sg.goalPct.toFixed(1)}%
                  </span>
                </div>
                <span
                  className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]"
                  style={ns}
                >
                  {sg.members} members • {todayAttended} attended
                </span>
              </div>
            </div>
          </div>

          {/* Subgroup activities */}
          <div className="flex flex-col gap-4">
            <span
              className="px-4 font-['Noto_Sans',sans-serif] font-medium text-[14px] text-black tracking-[0.1px] leading-[20px]"
              style={ns}
            >
              Subgroup activities
            </span>
            <div className="flex gap-2 px-4">
              <GoalCard
                title="Today's Goal"
                attended={todayAttended}
                total={todayTotal}
                footerLabel="Today's Attendance"
                footerPct={todayPct}
                onPress={onTodayGoal}
              />
              <GoalCard
                title="Monthly Goal"
                attended={monthAttended}
                total={monthTotal}
                footerLabel="Monthly Attendance"
                footerPct={monthPct}
                onPress={onMonthlyGoal}
              />
            </div>
          </div>

          {/* Subgroup members section */}
          <div className="flex flex-col gap-2">
            {/* Header row */}
            <div className="flex items-center justify-between px-4">
              <span
                className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px]"
                style={ns}
              >
                Subgroup members
              </span>
              <button
                onClick={() => setSorting(true)}
                aria-label="Sort"
                className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
              >
                <ArrowUpDown className="size-5 text-[#484848]" strokeWidth={1.5} />
              </button>
            </div>
            {/* Column labels */}
            <div className="flex items-center justify-between px-4">
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>Member</span>
              <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>Attendance</span>
            </div>
            {/* Member list */}
            {sortedMembers.map((member, i) => {
              const chip = CHIP_STYLES[pctToChip(member.pct)];
              return (
                <div key={member.memberId}>
                  <button
                    onClick={() => setSelected(member)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white active:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <MemberAvatar size={30} name={member.name} />
                      <span
                        className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px] truncate"
                        style={ns}
                      >
                        {member.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <RatingBadge letter={sg.letter} />
                      <div className="rounded-[16px] px-3 py-1 shrink-0" style={{ backgroundColor: chip.bg }}>
                        <span
                          className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px]"
                          style={{ ...ns, color: chip.text }}
                        >
                          {member.pct.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </button>
                  {i < sortedMembers.length - 1 && <div className="border-t border-[#C7C5CE]" />}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <div className="shrink-0 p-3">
        <button onClick={onAddMember} className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity">
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Add member</span>
        </button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function SubgroupListScreen({ onBack, group, subgroups, onDetail, onCreateNew }: { onBack: () => void; group: Group; subgroups: typeof SUBGROUPS; onDetail: (sg: typeof SUBGROUPS[0]) => void; onCreateNew?: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [sortBy, setSortBy] = useState<SubgroupSort>("alphabetical");
  const [sorting, setSorting] = useState(false);

  const myGroup = subgroups.find(s => s.isMyGroup)!;
  const otherGroups = subgroups.filter(s => !s.isMyGroup).slice().sort((a, b) => {
    if (sortBy === "attendance") return b.goalPct - a.goalPct;
    if (sortBy === "memberCount") return b.members - a.members;
    return a.letter.localeCompare(b.letter);
  });

  function SubgroupCard({ sg }: { sg: typeof SUBGROUPS[0] }) {
    const todayAttended = Math.round(EXAM_LIST.length * sg.members * sg.goalPct / 100);
    return (
      <div className="bg-[#f4f6fa] rounded-[12px] w-full p-[12px] flex flex-col gap-4 active:opacity-70 transition-opacity cursor-pointer" onClick={() => onDetail(sg)}>
        {/* Profile row */}
        <div className="flex items-center gap-2 w-full">
          {/* Letter avatar */}
          <div className="relative shrink-0 size-[50px]">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" fill="#E6E6E6" />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center font-['Noto_Sans',sans-serif] font-medium text-[22px] text-[#1d1b20] leading-none"
              style={ns}
            >
              {sg.letter}
            </span>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2 w-full">
              <span
                className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-[24px] truncate"
                style={ns}
              >
                Captain: {sg.captain}
              </span>
              <ChevronRight className="size-6 text-[#484848] shrink-0" strokeWidth={1.5} />
            </div>
            <span
              className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#484848] leading-[16px]"
              style={ns}
            >
              {sg.members} members • {todayAttended} attended
            </span>
          </div>
        </div>
        {/* Goal progress */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between w-full">
            <span
              className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-[20px]"
              style={ns}
            >
              {"Today's goal"}
            </span>
            <span
              className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-black leading-[20px]"
              style={ns}
            >
              {sg.goalPct.toFixed(1)}%
            </span>
          </div>
          <SubgroupProgressBar pct={sg.goalPct} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {sorting && (
          <SubgroupSortBottomSheet value={sortBy} onSelect={setSortBy} onClose={() => setSorting(false)} />
        )}
      </AnimatePresence>

      {/* App bar */}
      <div className="shrink-0 h-12 bg-white flex items-center justify-between px-1">
        <button
          onClick={onBack}
          className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
        </button>
        <p
          className="absolute left-14 right-14 font-['Noto_Sans',sans-serif] font-normal text-[18px] text-black leading-[28px] truncate"
          style={ns}
        >
          Subgroups ({group.subgroups})
        </p>
        <button
          onClick={() => setSorting(true)}
          aria-label="Sort subgroups"
          className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
        >
          <ArrowUpDown className="size-5 text-[#484848]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 px-4 pt-4 pb-8">
          {/* My subgroup */}
          <div className="flex flex-col gap-3">
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px]"
              style={ns}
            >
              My subgroup
            </span>
            <SubgroupCard sg={myGroup} />
          </div>

          {/* Other subgroups */}
          <div className="flex flex-col gap-3">
            <span
              className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px]"
              style={ns}
            >
              Other subgroups
            </span>
            <div className="flex flex-col gap-3">
              {otherGroups.map(sg => (
                <SubgroupCard key={sg.letter} sg={sg} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {onCreateNew && (
        <div className="shrink-0 p-3">
          <button
            onClick={onCreateNew}
            className="w-full h-14 bg-[#1441cc] rounded-full flex items-center justify-center active:opacity-90 transition-opacity"
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Create new</span>
          </button>
        </div>
      )}
    </div>
  );
}

// ── Screen: Admin / Create Subgroup ─────────────────────────────────────────────

const MAX_SUBGROUP_MEMBERS = 20;

interface SubgroupCandidate { name: string; pct: number; assignedTo: string | null }

// Draws from the real 64-member roster (each member's actual subgroup letter, if any) instead
// of a separately invented name list — so this picker can never show someone who doesn't
// exist in MEMBER_LIST.
const CREATE_SUBGROUP_CANDIDATES: SubgroupCandidate[] = MEMBER_LIST.map(m => ({
  name: m.name,
  pct: m.pct,
  assignedTo: m.subgroup || null,
}));

// Reached from an existing Subgroup's "Add member" button — picks from the group's remaining
// members (same pool/rules as Create Subgroup step 1: already-assigned members show their
// subgroup letter badge and can't be selected).
function AddSubgroupMemberSheet({ onCancel, onAdd }: { onCancel: () => void; onAdd: (names: string[]) => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(candidate: SubgroupCandidate) {
    if (candidate.assignedTo) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(candidate.name)) next.delete(candidate.name);
      else if (next.size < MAX_SUBGROUP_MEMBERS) next.add(candidate.name);
      return next;
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onCancel}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>
        <p className="px-4 pb-4 font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black">Add new member</p>
        <div className="border-t border-[#c7c5ce]" />

        <div className="flex-1 overflow-y-auto flex flex-col pt-2">
          {CREATE_SUBGROUP_CANDIDATES.map((candidate, i) => {
            const chip = CHIP_STYLES[pctToChip(candidate.pct)];
            const isSelected = selected.has(candidate.name);
            const disabled = !!candidate.assignedTo;
            return (
              <div key={candidate.name}>
                <button
                  onClick={() => toggle(candidate)}
                  disabled={disabled}
                  className={clsx("w-full flex items-center gap-2 px-4 py-2 text-left transition-colors", !disabled && "active:bg-gray-50")}
                >
                  <MemberAvatar size={30} name={candidate.name} />
                  <span className="flex-1 min-w-0 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6 truncate">
                    {candidate.name}
                  </span>
                  <div className="flex items-center gap-1 shrink-0">
                    {candidate.assignedTo && <RatingBadge letter={candidate.assignedTo} />}
                    <div className="rounded-[16px] h-6 px-3 flex items-center justify-center shrink-0" style={{ backgroundColor: chip.bg }}>
                      <span className="font-['Noto_Sans',sans-serif] text-[12px] font-medium" style={{ color: chip.text }}>
                        {candidate.pct.toFixed(1)}%
                      </span>
                    </div>
                    <div
                      className={clsx(
                        "size-[18px] rounded-[2px] shrink-0 flex items-center justify-center",
                        disabled ? "opacity-38 border-2 border-black" : isSelected ? "bg-[#1441cc]" : "border-2 border-[#787878]",
                      )}
                    >
                      {isSelected && !disabled && <Check className="size-3.5 text-white" strokeWidth={3} />}
                    </div>
                  </div>
                </button>
                {i < CREATE_SUBGROUP_CANDIDATES.length - 1 && <div className="mx-4 border-t border-[#C7C5CE]" />}
              </div>
            );
          })}
        </div>

        <div className="shrink-0 flex items-center gap-3 p-3">
          <button onClick={onCancel} className="flex-1 h-12 rounded-full border border-[#787878] flex items-center justify-center active:bg-gray-50 transition-colors">
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-[#484848]">Cancel</span>
          </button>
          <button
            onClick={() => onAdd(Array.from(selected))}
            disabled={selected.size === 0}
            className={clsx(
              "flex-1 h-12 rounded-full flex items-center justify-center transition-opacity",
              selected.size > 0 ? "bg-[#1441cc] active:opacity-90" : "bg-[#1441cc] opacity-40 cursor-not-allowed",
            )}
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white">Add</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AttendanceSortBottomSheet({ desc, onSelect, onClose }: { desc: boolean; onSelect: (desc: boolean) => void; onClose: () => void }) {
  const options = [{ id: true, label: "High to low" }, { id: false, label: "Low to high" }];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute inset-0 z-50 flex flex-col justify-end bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="bg-white rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden pb-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center p-4 shrink-0">
          <div className="bg-[#787878] h-1 rounded-full w-8" />
        </div>
        <p className="px-4 pb-4 font-['Noto_Sans',sans-serif] font-normal text-[24px] leading-[32px] text-black">Sort by attendance</p>
        <div className="border-t border-[#c7c5ce]" />
        <div className="flex flex-col pt-2">
          {options.map(opt => (
            <button
              key={String(opt.id)}
              onClick={() => { onSelect(opt.id); onClose(); }}
              className="h-14 flex items-center gap-4 px-4 active:bg-gray-50 transition-colors text-left"
            >
              <div className="relative size-5 shrink-0 rounded-full border-2 flex items-center justify-center" style={{ borderColor: desc === opt.id ? "#1441cc" : "#787878" }}>
                {desc === opt.id && <div className="size-2.5 rounded-full bg-[#1441cc]" />}
              </div>
              <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black leading-6">{opt.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CreateSubgroupScreen({ onBack, onCreate, existingCount }: { onBack: () => void; onCreate: (letter: string, captain: string, memberCount: number) => void; existingCount: number }) {
  const nextLetter = String.fromCharCode(65 + existingCount);
  const [step, setStep] = useState<1 | 2>(1);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [sortDesc, setSortDesc] = useState(true);
  const [sorting, setSorting] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [captain, setCaptain] = useState<string | null>(null);

  const filtered = (query.trim() ? CREATE_SUBGROUP_CANDIDATES.filter(c => c.name.includes(query.trim())) : CREATE_SUBGROUP_CANDIDATES)
    .slice()
    .sort((a, b) => (sortDesc ? b.pct - a.pct : a.pct - b.pct));

  function toggle(candidate: SubgroupCandidate) {
    if (candidate.assignedTo) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(candidate.name)) {
        next.delete(candidate.name);
      } else if (next.size < MAX_SUBGROUP_MEMBERS) {
        next.add(candidate.name);
      }
      return next;
    });
  }

  const selectedCandidates = CREATE_SUBGROUP_CANDIDATES.filter(c => selected.has(c.name));

  if (step === 2) {
    return (
      <div className="flex flex-col h-full bg-white overflow-hidden">
        <div className="shrink-0 relative flex items-center h-14 bg-white px-1">
          <button
            onClick={() => setStep(1)}
            className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <div className="absolute left-14 flex flex-col">
            <p className="font-['Noto_Sans',sans-serif] text-[18px] font-normal text-black leading-7 truncate">Create Subgroup</p>
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4 truncate">Step 2 of 2</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col gap-4 pt-4">
          <div className="px-4">
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Choose group captain</span>
          </div>
          <div className="flex flex-col">
            {selectedCandidates.map((candidate, i) => {
              const chip = CHIP_STYLES[pctToChip(candidate.pct)];
              return (
                <div key={candidate.name}>
                  <button
                    onClick={() => setCaptain(candidate.name)}
                    className="w-full flex items-center gap-2 px-4 py-2 text-left active:bg-gray-50 transition-colors"
                  >
                    <MemberAvatar size={30} name={candidate.name} />
                    <span className="flex-1 min-w-0 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6 truncate">
                      {candidate.name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="rounded-[16px] h-6 px-3 flex items-center justify-center shrink-0" style={{ backgroundColor: chip.bg }}>
                        <span className="font-['Noto_Sans',sans-serif] text-[12px] font-medium" style={{ color: chip.text }}>
                          {candidate.pct.toFixed(1)}%
                        </span>
                      </div>
                      <div className="relative size-5 shrink-0 rounded-full border-2 flex items-center justify-center" style={{ borderColor: captain === candidate.name ? "#1441cc" : "#787878" }}>
                        {captain === candidate.name && <div className="size-2.5 rounded-full bg-[#1441cc]" />}
                      </div>
                    </div>
                  </button>
                  {i < selectedCandidates.length - 1 && <div className="mx-4 border-t border-[#C7C5CE]" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="shrink-0 p-3">
          <button
            onClick={() => captain && onCreate(nextLetter, captain, selectedCandidates.length)}
            disabled={!captain}
            className={clsx(
              "w-full h-14 rounded-full flex items-center justify-center transition-opacity",
              captain ? "bg-[#1441cc] active:opacity-90" : "bg-[#1441cc] opacity-40 cursor-not-allowed",
            )}
          >
            <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Finish</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {sorting && (
          <AttendanceSortBottomSheet desc={sortDesc} onSelect={setSortDesc} onClose={() => setSorting(false)} />
        )}
      </AnimatePresence>

      {searching ? (
        <InlineSearchHeader
          title="Create Subgroup"
          onBack={onBack}
          searching
          onStartSearch={() => { }}
          query={query}
          onQueryChange={setQuery}
          onExit={() => { setSearching(false); setQuery(""); }}
          placeholder="Search by name"
        />
      ) : (
        <div className="shrink-0 relative flex items-center justify-between px-1 h-14 bg-white">
          <button
            onClick={onBack}
            className="size-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors shrink-0"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <div className="absolute left-14 right-[104px] flex flex-col">
            <p className="font-['Noto_Sans',sans-serif] text-[18px] font-normal text-black leading-7 truncate">Create Subgroup</p>
            <p className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#484848] leading-4 truncate">Step 1 of 2</p>
          </div>
          <div className="flex items-center shrink-0">
            <button
              onClick={() => setSearching(true)}
              className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
            >
              <Search className="size-6 text-[#484848]" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setSorting(true)}
              aria-label="Sort"
              className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
            >
              <ArrowUpDown className="size-5 text-[#484848]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto flex flex-col gap-4 pt-4">
        <div className="px-4">
          <div className="bg-[#f4f6fa] rounded-[12px] p-3 flex items-center gap-2">
            <Layers className="size-5 text-black shrink-0" strokeWidth={1.5} />
            <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">Subgroup {nextLetter} (Auto-named)</span>
          </div>
        </div>

        <div className="px-4">
          <span className="font-['Noto_Sans',sans-serif] text-[14px] text-black leading-5">
            Select group members ({selected.size}/{MAX_SUBGROUP_MEMBERS})
          </span>
        </div>

        <div className="flex flex-col">
          {filtered.map((candidate, i) => {
            const chip = CHIP_STYLES[pctToChip(candidate.pct)];
            const isSelected = selected.has(candidate.name);
            const disabled = !!candidate.assignedTo;
            return (
              <div key={candidate.name}>
                <button
                  onClick={() => toggle(candidate)}
                  disabled={disabled}
                  className={clsx("w-full flex items-center gap-2 px-4 py-2 text-left transition-colors", !disabled && "active:bg-gray-50")}
                >
                  <MemberAvatar size={30} name={candidate.name} />
                  <span className="flex-1 min-w-0 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6 truncate">
                    {candidate.name}
                  </span>
                  <div className="flex items-center gap-1 shrink-0">
                    {candidate.assignedTo && <RatingBadge letter={candidate.assignedTo} />}
                    <div className="rounded-[16px] h-6 px-3 flex items-center justify-center shrink-0" style={{ backgroundColor: chip.bg }}>
                      <span className="font-['Noto_Sans',sans-serif] text-[12px] font-medium" style={{ color: chip.text }}>
                        {candidate.pct.toFixed(1)}%
                      </span>
                    </div>
                    <div
                      className={clsx(
                        "size-[18px] rounded-[2px] shrink-0 flex items-center justify-center",
                        disabled ? "opacity-38 border-2 border-black" : isSelected ? "bg-[#1441cc]" : "border-2 border-[#787878]",
                      )}
                    >
                      {isSelected && !disabled && <Check className="size-3.5 text-white" strokeWidth={3} />}
                    </div>
                  </div>
                </button>
                {i < filtered.length - 1 && <div className="mx-4 border-t border-[#C7C5CE]" />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 p-3">
        <button
          onClick={() => { setCaptain(selectedCandidates[0]?.name ?? null); setStep(2); }}
          disabled={selected.size === 0}
          className={clsx(
            "w-full h-14 rounded-full flex items-center justify-center transition-opacity",
            selected.size > 0 ? "bg-[#1441cc] active:opacity-90" : "bg-[#1441cc] opacity-40 cursor-not-allowed",
          )}
        >
          <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-white tracking-[0.15px]">Next</span>
        </button>
      </div>
    </div>
  );
}

// ── Screen: Exam Attendance — Member list ─────────────────────────────────────

function ExamAttendanceMembersScreen({ examName, attended, onBack, title = "Exam Attendance", subgroupLetter }: { examName: string; attended: number; onBack: () => void; title?: string; subgroupLetter?: string }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<MemberSort>("attendance");
  const [sorting, setSorting] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);

  // Reached from a specific subgroup's Today's Goal, only that subgroup's members should
  // appear here — otherwise (the admin's own group-level entry) it's the whole group.
  const pool = subgroupLetter ? MEMBER_LIST.filter(m => m.subgroup === subgroupLetter) : MEMBER_LIST;

  // Deterministically pick which members "attended" this specific exam, so the header
  // count and the per-row Attended/Not attended badges always agree, and different exams
  // show different attendees instead of always the same people.
  const examOffset = examName.split("").reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 0) % pool.length;
  const rotatedMembers = [...pool.slice(examOffset), ...pool.slice(0, examOffset)];
  const attendedIds = new Set(rotatedMembers.slice(0, attended).map(m => m.memberId));

  const filtered = (query.trim() ? pool.filter(m => m.name.toLowerCase().includes(query.trim().toLowerCase())) : pool)
    .slice()
    .sort((a, b) => {
      if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
      if (sortBy === "subgroup") return a.subgroup.localeCompare(b.subgroup);
      const aAttended = attendedIds.has(a.memberId) ? 1 : 0;
      const bAttended = attendedIds.has(b.memberId) ? 1 : 0;
      return bAttended - aAttended;
    });

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {selected && <MemberDetailSheet member={selected} hideContactRow onClose={() => setSelected(null)} />}
        {sorting && <SortBottomSheet value={sortBy} onSelect={setSortBy} onClose={() => setSorting(false)} />}
      </AnimatePresence>

      {/* App bar */}
      {searching ? (
        <InlineSearchHeader
          title={title}
          onBack={onBack}
          searching
          onStartSearch={() => { }}
          query={query}
          onQueryChange={setQuery}
          onExit={() => { setSearching(false); setQuery(""); }}
          placeholder="Search by name"
        />
      ) : (
        <div className="shrink-0 flex items-start gap-2 px-1 pt-1 pb-2">
          <button
            onClick={onBack}
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors shrink-0"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <div className="flex-1 flex flex-col pt-3 min-w-0">
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[20px] text-black leading-[28px] truncate" style={ns}>
              {title}
            </p>
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[13px] text-[#484848] leading-[18px] truncate" style={ns}>
              {examName}
            </p>
          </div>
          <div className="flex items-center shrink-0">
            <button
              onClick={() => setSearching(true)}
              className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
            >
              <Search className="size-6 text-[#484848]" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setSorting(true)}
              aria-label="Sort"
              className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
            >
              <ArrowUpDown className="size-5 text-[#484848]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-3 px-4 pb-8">
          <span
            className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px]"
            style={ns}
          >
            Exam attend ({attended}/{pool.length})
          </span>

          {/* Column labels */}
          <div className="flex items-center justify-between">
            <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>Member</span>
            <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-[16px]" style={ns}>Attendance</span>
          </div>

          {/* Member list */}
          <div className="flex flex-col">
            {filtered.map((member, i) => {
              const hasAttended = attendedIds.has(member.memberId);
              const chip = hasAttended ? CHIP_STYLES.green : CHIP_STYLES.yellow;
              const showSubgroupHeader = sortBy === "subgroup" && (i === 0 || filtered[i - 1].subgroup !== member.subgroup);
              return (
                <div key={member.memberId}>
                  {showSubgroupHeader && (
                    <div className="pt-3 pb-1">
                      <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>
                        Subgroup {member.subgroup}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelected(member)}
                    className="w-full flex items-center justify-between py-3 active:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <MemberAvatar size={30} name={member.name} />
                      <span
                        className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-[24px] truncate"
                        style={ns}
                      >
                        {member.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <RatingBadge letter={subgroupLetter ?? member.rating} />
                      <div className="rounded-[16px] px-3 py-1 shrink-0 whitespace-nowrap" style={{ backgroundColor: chip.bg }}>
                        <span
                          className="font-['Noto_Sans',sans-serif] font-medium text-[12px] leading-[16px]"
                          style={{ ...ns, color: chip.text }}
                        >
                          {hasAttended ? "Attended" : "Not attended yet"}
                        </span>
                      </div>
                    </div>
                  </button>
                  {i < filtered.length - 1 && <div className="border-t border-[#C7C5CE]" />}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <p className="py-8 text-center font-['Noto_Sans',sans-serif] text-[14px] text-[#787878]">No members found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reached by tapping a mandatory exam from the admin's Monthly Goal screen — richer than the
// Today's Goal exam view: live-exam stats + the 31-day goal chart, then a member list
// sorted/searched like Group Members (tap a row for the same detail sheet).
function MonthlyGoalExamDetailScreen({ examName, group, sg, override, examTotals, onBack }: { examName: string; group: Group; sg: SubgroupData; override?: GoalDetailOverride; examTotals?: { total: number; attended: number }; onBack: () => void }) {
  const ns = { fontVariationSettings: '"CTGR" 0, "wdth" 100' };
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<MemberSort>("attendance");
  const [sorting, setSorting] = useState(false);
  const [selected, setSelected] = useState<Member | null>(null);
  const [removing, setRemoving] = useState<Member | null>(null);
  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set());

  // Group-level entry (override set) shows the whole group. Reached by tapping a specific
  // exam row from a subgroup's Monthly Goal, examTotals carries that row's own total/attended
  // (matching the number the user just tapped) instead of a separately recomputed figure.
  const examOccurrences = MONTHLY_EXAM_OCCURRENCES[MONTHLY_EXAM_LIST.findIndex(e => e.name === examName)] ?? 23;
  const monthTotal = examTotals ? examTotals.total : override ? override.bigCount : sg.members * examOccurrences;
  const monthAttended = examTotals ? examTotals.attended : override ? override.attended : Math.round(monthTotal * sg.monthlyGoalPct / 100);
  const goalPct = monthTotal > 0 ? (monthAttended / monthTotal) * 100 : 0;
  const monthRemaining = Math.max(monthTotal - monthAttended, 0);
  const monthBarPct = goalPct;

  const scopedMembers = MEMBER_LIST.filter(m => !removedIds.has(m.memberId) && (override || m.subgroup === sg.letter));
  // Scale each member's shown attendance so the scoped group's average matches this exam's
  // own percentage, instead of the members' unrelated raw overall pct.
  const remaining = (() => {
    if (scopedMembers.length === 0) return scopedMembers;
    const currentAvg = scopedMembers.reduce((s, m) => s + m.pct, 0) / scopedMembers.length;
    if (currentAvg === 0) return scopedMembers;
    const scale = goalPct / currentAvg;
    return scopedMembers.map(m => {
      const pct = Math.min(100, Math.max(0, Math.round(m.pct * scale * 10) / 10));
      return { ...m, pct, chip: pctToChip(pct) };
    });
  })();
  const filtered = (query.trim() ? remaining.filter(m => m.name.toLowerCase().includes(query.trim().toLowerCase())) : remaining)
    .slice()
    .sort((a, b) => {
      if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
      if (sortBy === "subgroup") return a.subgroup.localeCompare(b.subgroup);
      return b.pct - a.pct;
    });

  return (
    <div className="flex flex-col h-full bg-white overflow-hidden relative">
      <AnimatePresence>
        {selected && (
          <MemberDetailSheet
            member={selected}
            isAdmin
            onRemove={() => { setRemoving(selected); setSelected(null); }}
            onClose={() => setSelected(null)}
          />
        )}
        {removing && (
          <RemoveFromSubgroupDialog
            firstName={removing.name.split(" ")[0]}
            subgroupLetter={removing.subgroup}
            groupName={group.name}
            onCancel={() => setRemoving(null)}
            onConfirm={() => {
              setRemovedIds(prev => new Set(prev).add(removing.memberId));
              setRemoving(null);
            }}
          />
        )}
        {sorting && <SortBottomSheet value={sortBy} onSelect={setSortBy} onClose={() => setSorting(false)} />}
      </AnimatePresence>

      {searching ? (
        <InlineSearchHeader
          title="Member attendance"
          onBack={onBack}
          searching
          onStartSearch={() => { }}
          query={query}
          onQueryChange={setQuery}
          onExit={() => { setSearching(false); setQuery(""); }}
          placeholder="Search by name"
        />
      ) : (
        <div className="shrink-0 flex items-start gap-2 px-1 pt-1 pb-2">
          <button
            onClick={onBack}
            className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors shrink-0"
          >
            <ArrowLeft className="size-6 text-[#484848]" strokeWidth={2} />
          </button>
          <div className="flex-1 flex flex-col pt-3 min-w-0">
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[20px] text-black leading-[28px] truncate" style={ns}>
              Exam Attendance
            </p>
            <p className="font-['Noto_Sans',sans-serif] font-normal text-[13px] text-[#484848] leading-[18px] truncate" style={ns}>
              {examName}
            </p>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 px-4 pt-4 pb-8">
          {!searching && (
            <>
              {/* Live exams summary */}
              <div className="border border-[#e3e3e3] rounded-[12px] p-3 flex flex-col gap-3">
                <div className="flex items-center justify-between w-full">
                  <span className="font-['Noto_Sans',sans-serif] font-normal text-[14px] text-[#484848] leading-[20px]" style={ns}>Live Exams (Estimated)</span>
                  <div className="rounded-[4px] px-2 h-5 flex items-center" style={{ backgroundColor: pctChipStyle(goalPct).bg }}>
                    <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] leading-[16px]" style={{ ...ns, color: pctChipStyle(goalPct).text }}>
                      {goalPct.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6" style={ns}>{monthTotal}</span>
                <ActivityProgressBar pct={monthBarPct} />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-[#1441cc] shrink-0" />
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>Attended:</span>
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-4" style={ns}>{monthAttended}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-[#d6e4ff] shrink-0" />
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>Remaining (Est):</span>
                    <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-black leading-4" style={ns}>{monthRemaining}</span>
                  </div>
                </div>
              </div>

              {/* Member attendance header */}
              <div className="flex items-center justify-between">
                <span className="font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6" style={ns}>Member attendance</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setSearching(true)}
                    className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
                  >
                    <Search className="size-6 text-[#484848]" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => setSorting(true)}
                    aria-label="Sort"
                    className="size-12 flex items-center justify-center rounded-full active:bg-gray-100 transition-colors"
                  >
                    <ArrowUpDown className="size-5 text-[#484848]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Column labels */}
              <div className="flex items-center justify-between -mt-2">
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-4" style={ns}>Member</span>
                <span className="font-['Noto_Sans',sans-serif] font-normal text-[12px] text-[#787878] leading-4" style={ns}>Attendance</span>
              </div>
            </>
          )}

          {/* Member list */}
          <div className="flex flex-col">
            {filtered.map((member, i) => {
              const chip = CHIP_STYLES[pctToChip(member.pct)];
              const showSubgroupHeader = sortBy === "subgroup" && (i === 0 || filtered[i - 1].subgroup !== member.subgroup);
              return (
                <div key={member.memberId}>
                  {showSubgroupHeader && (
                    <div className="pt-3 pb-1">
                      <span className="font-['Noto_Sans',sans-serif] font-medium text-[12px] text-[#787878] leading-4" style={ns}>
                        Subgroup {member.subgroup}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelected(member)}
                    className="w-full flex items-center justify-between py-3 active:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <MemberAvatar size={30} name={member.name} />
                      <span className="flex-1 font-['Noto_Sans',sans-serif] font-medium text-[16px] text-black tracking-[0.15px] leading-6 truncate" style={ns}>
                        {member.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <RatingBadge letter={override ? member.rating : sg.letter} />
                      <div className="rounded-[4px] h-6 px-2 flex items-center justify-center shrink-0" style={{ backgroundColor: chip.bg }}>
                        <span className="font-['Noto_Sans',sans-serif] text-[12px] font-normal" style={{ color: chip.text }}>{member.pct.toFixed(1)}%</span>
                      </div>
                    </div>
                  </button>
                  {i < filtered.length - 1 && <div className="border-t border-[#C7C5CE]" />}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <p className="py-8 text-center font-['Noto_Sans',sans-serif] text-[14px] text-[#787878]">No members found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function PrototypeApp() {
  const [stack, setStack] = useState<Screen[]>(["adminHome"]);
  // GROUPS[0] ("The Winner") is the admin's own real group — its avgAttendance is overridden
  // with the real mean of MEMBER_LIST's own attendance percentages, not the stored fictional
  // placeholder, so it can't drift out of sync with the real roster.
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(() => ({
    ...GROUPS[0],
    avgAttendance: MEMBER_LIST.reduce((s, m) => s + m.pct, 0) / MEMBER_LIST.length,
  }));
  const [selectedSubgroup, setSelectedSubgroup] = useState<SubgroupData | null>(null);
  const [selectedExamName, setSelectedExamName] = useState<string | null>(null);
  const [selectedExamTotals, setSelectedExamTotals] = useState<{ total: number; attended: number } | null>(null);
  const [selectedExamAttended, setSelectedExamAttended] = useState(0);
  const [selectedExamSubgroupLetter, setSelectedExamSubgroupLetter] = useState<string | null>(null);
  const [memberAttendanceSubgroupLetter, setMemberAttendanceSubgroupLetter] = useState<string | null>(null);
  const [memberAttendanceTargetPct, setMemberAttendanceTargetPct] = useState<number | null>(null);
  const [attendanceScreenTitle, setAttendanceScreenTitle] = useState("Exam Attendance");
  const [announcement, setAnnouncement] = useState({
    title: "New Announcements",
    body: "Live class on Bangladesh Affairs starts tomorrow at 8 PM",
    date: "24 May 2026",
  });
  const [subgroups, setSubgroups] = useState(SUBGROUPS);
  // Admin-editable "Monthly goal (exams)" target from Group Settings — defaults to the real
  // computed monthly capacity (64 members × 120 slots), but the saved value actually drives
  // the group-level Monthly Goal card/page once changed.
  const [monthlyGoalTarget, setMonthlyGoalTarget] = useState(MEMBER_LIST.length * EXAM_LIST.length * 30);
  const [selectedExamLive, setSelectedExamLive] = useState(false);
  const [selectedQuickLink, setSelectedQuickLink] = useState<QuickLink | null>(null);
  const [selectedExamList, setSelectedExamList] = useState<Array<{ name: string; isLive: boolean }>>(MANDATORY_EXAMS);
  const [selectedAdminItem, setSelectedAdminItem] = useState<typeof ADMIN_PANEL_ITEMS[number] | null>(null);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [todayGoalOverride, setTodayGoalOverride] = useState<GoalDetailOverride | null>(null);
  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
  const [showAddMember, setShowAddMember] = useState(false);
  const [showAddSubgroupMember, setShowAddSubgroupMember] = useState(false);
  const [subgroupsAdminMode, setSubgroupsAdminMode] = useState(false);
  const [membersAdminMode, setMembersAdminMode] = useState(false);
  const snackbarTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirRef = useRef<1 | -1>(1);

  const screen = stack[stack.length - 1];
  const dir = dirRef.current;

  // Mirror each in-app screen onto a real browser history entry, so a hardware/gesture
  // back action (e.g. an edge swipe on mobile) pops one in-app screen instead of leaving
  // the page — the popstate handler below is the single place that pops `stack`.
  useEffect(() => {
    window.history.replaceState({ depth: 0 }, "");
  }, []);

  useEffect(() => {
    function onPopState() {
      dirRef.current = -1;
      setStack(s => (s.length > 1 ? s.slice(0, -1) : s));
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Push a new screen onto the navigation stack.
  function goTo(next: Screen) {
    dirRef.current = 1;
    const newStack = [...stack, next];
    window.history.pushState({ depth: newStack.length - 1 }, "");
    setStack(newStack);
  }

  // Pop back to the previous screen on the stack — always correct no matter how deep the push chain went.
  // Goes through history.back() so it stays in sync with the real browser history (and with swipe-back gestures).
  function goBack() {
    if (stack.length <= 1) return;
    window.history.back();
  }

  function showSnackbar(message: string) {
    if (snackbarTimeoutRef.current) clearTimeout(snackbarTimeoutRef.current);
    setSnackbarMessage(message);
    snackbarTimeoutRef.current = setTimeout(() => setSnackbarMessage(null), 2500);
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="popLayout" custom={dir}>

        {screen === "examAttendanceMembers" && selectedExamName && (
          <motion.div
            key="examAttendanceMembers"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <ExamAttendanceMembersScreen examName={selectedExamName} attended={selectedExamAttended} title={attendanceScreenTitle} subgroupLetter={selectedExamSubgroupLetter ?? undefined} onBack={goBack} />
          </motion.div>
        )}


        {screen === "adminHome" && selectedGroup && (
          <motion.div
            key="adminHome"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GroupMemberScreen
              group={selectedGroup}
              announcement={announcement}
              isAdmin
              onAdminPanel={() => goTo("adminPanel")}
              onEditAnnouncement={() => goTo("adminAnnouncement")}
              onDeleteAnnouncement={() => {
                setAnnouncement({ title: "", body: "", date: "" });
                showSnackbar("Announcement deleted");
              }}
              onViewGroupRules={() => goTo("adminGroupRulesView")}
              onBack={goBack}
              onActivityLog={() => goTo("activity")}
              onRank={() => goTo("rank")}
              onMembers={() => { setMembersAdminMode(true); goTo("members"); }}
              onSubgroups={() => { setSubgroupsAdminMode(true); goTo("subgroups"); }}
              onTodayGoal={() => { setSelectedSubgroup(subgroups.find(s => s.isMyGroup) ?? subgroups[0]); setTodayGoalOverride(computeGroupGoalAggregate(subgroups, "today")); goTo("todayGoal"); }}
              onMonthlyGoal={() => { setSelectedSubgroup(subgroups.find(s => s.isMyGroup) ?? subgroups[0]); setTodayGoalOverride(computeGroupGoalAggregate(subgroups, "monthly")); goTo("monthlyGoal"); }}
              onDiscussion={() => goTo("discussion")}
              onFacebookGroup={() => goTo("facebookGroup")}
              onSelectExam={(examName, isLive) => { setSelectedExamName(examName); setSelectedExamLive(isLive); setSelectedExamList(MANDATORY_EXAMS); goTo("examPage"); }}
              onSelectQuickLink={(link) => { setSelectedQuickLink(link); goTo("quickLinkPage"); }}
              todayGoal={computeGroupGoalAggregate(subgroups, "today")}
              monthlyGoal={computeGroupGoalAggregate(subgroups, "monthly")}
            />
          </motion.div>
        )}

        {screen === "adminGroupRulesView" && selectedGroup && (
          <motion.div
            key="adminGroupRulesView"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminGroupRulesViewScreen group={selectedGroup} onBack={goBack} />
          </motion.div>
        )}

        {screen === "adminPanel" && selectedGroup && (
          <motion.div
            key="adminPanel"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminPanelScreen
              group={selectedGroup}
              onBack={goBack}
              onMyGroup={() => goTo("adminMyGroup")}
              onAddMember={() => setShowAddMember(true)}
              onSelectItem={(item) => {
                if (item.screen === "adminMembersHub" || item.screen === "subgroups" || item.screen === "adminJoiningRequests" || item.screen === "adminAnnouncement" || item.screen === "adminExamCustomisation" || item.screen === "adminGroupSettings" || item.screen === "adminGroupRules") {
                  if (item.screen === "subgroups") setSubgroupsAdminMode(true);
                  goTo(item.screen);
                } else {
                  setSelectedAdminItem(item);
                  goTo("adminComingSoon");
                }
              }}
            />
          </motion.div>
        )}

        {screen === "adminMyGroup" && selectedGroup && (
          <motion.div
            key="adminMyGroup"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminMyGroupScreen group={selectedGroup} onBack={goBack} />
          </motion.div>
        )}

        {screen === "adminMembersHub" && selectedGroup && (
          <motion.div
            key="adminMembersHub"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminMembersHubScreen
              group={selectedGroup}
              onBack={goBack}
              onTotalMembers={() => { setMembersAdminMode(true); goTo("members"); }}
              onSelectZone={(zone) => { setSelectedZone(zone); goTo("adminZoneMembers"); }}
              onAddMember={() => setShowAddMember(true)}
            />
          </motion.div>
        )}

        {screen === "adminZoneMembers" && selectedGroup && selectedZone && (
          <motion.div
            key="adminZoneMembers"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GroupMembersScreen group={selectedGroup} zone={selectedZone} isAdmin onBack={goBack} />
          </motion.div>
        )}

        {screen === "memberAttendance" && selectedGroup && (
          <motion.div
            key="memberAttendance"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GroupMembersScreen group={selectedGroup} isAdmin title="Member attendance" hideCountRow subgroupLetter={memberAttendanceSubgroupLetter ?? undefined} targetPct={memberAttendanceTargetPct ?? undefined} onBack={goBack} />
          </motion.div>
        )}

        {screen === "adminJoiningRequests" && selectedGroup && (
          <motion.div
            key="adminJoiningRequests"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminJoiningRequestsScreen onBack={goBack} />
          </motion.div>
        )}

        {screen === "adminAnnouncement" && (
          <motion.div
            key="adminAnnouncement"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminAnnouncementScreen
              initialTitle={announcement.title}
              initialDescription={announcement.body}
              onBack={goBack}
              onCancel={goBack}
              onUpdate={(title, description) => {
                setAnnouncement({
                  title,
                  body: description,
                  date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
                });
                goBack();
                showSnackbar("Announcement updated");
              }}
            />
          </motion.div>
        )}

        {screen === "adminExamCustomisation" && (
          <motion.div
            key="adminExamCustomisation"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminExamCustomisationScreen onBack={goBack} onSave={() => { goBack(); showSnackbar("Exam customisation saved"); }} />
          </motion.div>
        )}

        {screen === "adminGroupSettings" && selectedGroup && (
          <motion.div
            key="adminGroupSettings"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminGroupSettingsScreen
              group={selectedGroup}
              monthlyGoalTarget={monthlyGoalTarget}
              onBack={goBack}
              onSave={(newMonthlyGoal) => {
                setMonthlyGoalTarget(newMonthlyGoal);
                goBack();
                showSnackbar("Group settings saved");
              }}
            />
          </motion.div>
        )}

        {screen === "adminGroupRules" && (
          <motion.div
            key="adminGroupRules"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminGroupRulesScreen onBack={goBack} onSave={() => { goBack(); showSnackbar("Group rules saved"); }} />
          </motion.div>
        )}

        {screen === "adminComingSoon" && selectedAdminItem && (
          <motion.div
            key="adminComingSoon"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <AdminComingSoonScreen title={selectedAdminItem.label} icon={selectedAdminItem.Icon} onBack={goBack} />
          </motion.div>
        )}

        {screen === "examPage" && selectedExamName && (
          <motion.div
            key="examPage"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <ExamPageScreen
              examName={selectedExamName}
              isLive={selectedExamLive}
              examList={selectedExamList}
              onBack={goBack}
              onSelectQuickLink={(link) => { setSelectedQuickLink(link); goTo("quickLinkPage"); }}
            />
          </motion.div>
        )}

        {screen === "quickLinkPage" && selectedQuickLink && (
          <motion.div
            key="quickLinkPage"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <QuickLinkPageScreen link={selectedQuickLink} onBack={goBack} />
          </motion.div>
        )}

        {screen === "discussion" && selectedGroup && (
          <motion.div
            key="discussion"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <DiscussionScreen onBack={goBack} />
          </motion.div>
        )}

        {screen === "facebookGroup" && selectedGroup && (
          <motion.div
            key="facebookGroup"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <FacebookGroupScreen group={selectedGroup} onBack={goBack} />
          </motion.div>
        )}

        {screen === "activity" && (
          <motion.div
            key="activity"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <ActivityLogScreen onBack={goBack} />
          </motion.div>
        )}

        {screen === "rank" && (
          <motion.div
            key="rank"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GroupRankScreen onBack={goBack} />
          </motion.div>
        )}

        {screen === "members" && selectedGroup && (
          <motion.div
            key="members"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GroupMembersScreen group={selectedGroup} isAdmin={membersAdminMode} onBack={goBack} />
          </motion.div>
        )}

        {screen === "subgroups" && selectedGroup && (
          <motion.div
            key="subgroups"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <SubgroupListScreen
              group={selectedGroup}
              subgroups={subgroups}
              onBack={goBack}
              onDetail={(sg) => { setSelectedSubgroup(sg); goTo("subgroupDetail"); }}
              onCreateNew={subgroupsAdminMode ? () => goTo("adminCreateSubgroup") : undefined}
            />
          </motion.div>
        )}

        {screen === "adminCreateSubgroup" && (
          <motion.div
            key="adminCreateSubgroup"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <CreateSubgroupScreen
              onBack={goBack}
              existingCount={subgroups.length}
              onCreate={(letter, captain, memberCount) => {
                setSubgroups(prev => [
                  ...prev,
                  {
                    letter,
                    captain,
                    members: memberCount,
                    attended: 0,
                    goalPct: 0,
                    monthlyGoalPct: 0,
                    isMyGroup: false,
                    captainRating: 5.0,
                    captainSince: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
                  },
                ]);
                goBack();
                showSnackbar(`Subgroup ${letter} created — captain: ${captain}`);
              }}
            />
          </motion.div>
        )}

        {screen === "subgroupDetail" && selectedSubgroup && (
          <motion.div
            key="subgroupDetail"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <SubgroupDetailScreen
              sg={selectedSubgroup}
              groupName={selectedGroup?.name ?? ""}
              onBack={goBack}
              onTodayGoal={() => { setTodayGoalOverride(null); goTo("todayGoal"); }}
              onMonthlyGoal={() => { setTodayGoalOverride(null); goTo("monthlyGoal"); }}
              onAddMember={() => setShowAddSubgroupMember(true)}
              onCaptainSaved={(name) => { setSelectedSubgroup(prev => prev ? { ...prev, captain: name } : prev); showSnackbar("Captain updated"); }}
              onDelete={() => {
                setSubgroups(prev => prev.filter(s => s.letter !== selectedSubgroup.letter));
                showSnackbar("Subgroup deleted");
                goBack();
              }}
            />
          </motion.div>
        )}

        {screen === "todayGoal" && selectedSubgroup && (
          <motion.div
            key="todayGoal"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GoalDetailScreen
              mode="today"
              sg={selectedSubgroup}
              override={todayGoalOverride ?? undefined}
              onBack={goBack}
              onSelectExam={(exam) => {
                // exam.attended is already scaled to the current context (whole group or
                // this subgroup) by GoalDetailScreen, so it can be used as-is here.
                setSelectedExamName(exam.name);
                setSelectedExamAttended(exam.attended);
                setSelectedExamSubgroupLetter(todayGoalOverride ? null : selectedSubgroup.letter);
                setAttendanceScreenTitle("Exam Attendance");
                goTo("examAttendanceMembers");
              }}
              onViewAttendance={() => { setMemberAttendanceSubgroupLetter(todayGoalOverride ? null : selectedSubgroup.letter); setMemberAttendanceTargetPct(todayGoalOverride ? null : selectedSubgroup.goalPct); goTo("memberAttendance"); }}
            />
          </motion.div>
        )}

        {screen === "monthlyGoal" && selectedSubgroup && (
          <motion.div
            key="monthlyGoal"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <GoalDetailScreen
              mode="monthly"
              sg={selectedSubgroup}
              override={todayGoalOverride ?? undefined}
              monthlyGoalTarget={monthlyGoalTarget}
              onBack={goBack}
              onSelectExam={(exam) => { setSelectedExamName(exam.name); setSelectedExamTotals({ total: exam.total, attended: exam.attended }); goTo("monthlyGoalExamDetail"); }}
              onViewAttendance={() => { setMemberAttendanceSubgroupLetter(todayGoalOverride ? null : selectedSubgroup.letter); setMemberAttendanceTargetPct(todayGoalOverride ? null : selectedSubgroup.monthlyGoalPct); goTo("memberAttendance"); }}
            />
          </motion.div>
        )}

        {screen === "monthlyGoalExamDetail" && selectedExamName && selectedGroup && selectedSubgroup && (
          <motion.div
            key="monthlyGoalExamDetail"
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTrans}
            className="absolute inset-0"
          >
            <MonthlyGoalExamDetailScreen
              examName={selectedExamName}
              group={selectedGroup}
              sg={selectedSubgroup}
              override={todayGoalOverride ?? undefined}
              examTotals={selectedExamTotals ?? undefined}
              onBack={goBack}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {snackbarMessage && <Snackbar message={snackbarMessage} />}
      </AnimatePresence>

      <AnimatePresence>
        {showAddMember && (
          <AddMemberDialog
            onCancel={() => setShowAddMember(false)}
            onAdd={() => { setShowAddMember(false); showSnackbar("Member added"); }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddSubgroupMember && (
          <AddSubgroupMemberSheet
            onCancel={() => setShowAddSubgroupMember(false)}
            onAdd={() => { setShowAddSubgroupMember(false); showSnackbar("Member added"); }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <PrototypeApp />
    </div>
  );
}
