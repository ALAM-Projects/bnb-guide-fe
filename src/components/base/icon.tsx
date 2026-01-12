import * as utils from "@/lib/utils";
import { IconName, IconSize } from "@/types/icon.types";
import { cva } from "class-variance-authority";
import { FC } from "react";
import { LucideIcon } from "lucide-react";
import { ColorType } from "@/types/common.types";

// Import only specific icons you want to use
import {
  Check,
  Heart,
  ThumbsUp,
  HandMetal,
  Loader2,
  UserCircle,
  ChevronDown,
  Calendar,
  RefreshCw,
  Filter,
  Plus,
  CirclePlus,
  ChevronsUpDown,
  CircleArrowRight,
  ArrowRight,
  ArrowLeft,
  TriangleAlert,
  Clock,
  LayoutDashboard,
  ListTodo,
  Bell,
  CalendarClock,
  LogOut,
  CalendarSync,
  X,
  CheckCircle,
  Pencil,
  ClockAlert,
  Inbox,
  ShieldAlert,
  ShieldCheck,
  Hourglass,
  Ban,
  Link,
  Link2,
  CloudUpload,
  File,
  CircleX,
  Undo,
  FileText,
  Text,
  TableProperties,
  Images,
  Archive,
  Newspaper,
  GalleryHorizontalEnd,
  List,
  Italic,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  ListOrdered,
  Code,
  UserSearch,
  ExternalLink,
  Search,
  Mail,
  Phone,
  MapPinHouse,
  Flag,
  VenusAndMars,
  LandPlot,
  Building2,
  Landmark,
  Monitor,
  FolderUp,
  Save,
  User,
  Users,
  Info,
  Eye,
  PanelLeftClose,
  PanelLeftOpen,
  Trash2,
  CloudDownload,
  Table,
  MoreVertical,
  RotateCcw,
  Edit,
  Copy,
  Trash,
  CornerDownRight,
  DollarSign,
  MailIcon,
  ArrowDown,
  ArrowUp,
  ArrowDownAZ,
  ArrowUpAZ,
  ArrowDown01,
  ArrowUp01,
  ArrowUpDown,
  ArrowDownUp,
  CircleAlert,
  Undo2,
  EyeOff,
  Lock,
  BriefcaseBusiness,
  Hand,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
} from "lucide-react";

// Ensure iconRegistry uses IconName
export const iconRegistry = {
  Check,
  Heart,
  ThumbsUp,
  HandMetal,
  Loader2,
  UserCircle,
  ChevronDown,
  Calendar,
  RefreshCw,
  Filter,
  Plus,
  CirclePlus,
  ChevronsUpDown,
  CircleArrowRight,
  ArrowRight,
  ArrowLeft,
  TriangleAlert,
  Clock,
  LayoutDashboard,
  ListTodo,
  Bell,
  User,
  Users,
  CalendarClock,
  LogOut,
  CalendarSync,
  X,
  CheckCircle,
  Pencil,
  ClockAlert,
  Inbox,
  ShieldAlert,
  ShieldCheck,
  ExternalLink,
  Hourglass,
  Ban,
  Link,
  CloudUpload,
  Link2,
  File,
  CircleX,
  Undo,
  FileText,
  Text,
  TableProperties,
  Images,
  Archive,
  Newspaper,
  GalleryHorizontalEnd,
  List,
  Italic,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  ListOrdered,
  Code,
  UserSearch,
  Search,
  Mail,
  Phone,
  MapPinHouse,
  Flag,
  VenusAndMars,
  LandPlot,
  Building2,
  Landmark,
  Monitor,
  FolderUp,
  Save,
  Info,
  Eye,
  PanelLeftClose,
  PanelLeftOpen,
  Trash2,
  CloudDownload,
  Table,
  MoreVertical,
  RotateCcw,
  Edit,
  Copy,
  Trash,
  CornerDownRight,
  DollarSign,
  MailIcon,
  ArrowUp,
  ArrowDown,
  ArrowDownAZ,
  ArrowUpAZ,
  ArrowDown01,
  ArrowUp01,
  ArrowUpDown,
  ArrowDownUp,
  CircleAlert,
  Undo2,
  EyeOff,
  Lock,
  BriefcaseBusiness,
  Hand,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
} as const;

const iconVariants = cva("", {
  variants: {
    size: {
      "5xl": "h-15 w-15",
      "4xl": "h-12 w-12",
      "3xl": "h-10 w-10",
      "2xl": "h-8 w-8",
      xl: "h-7 w-7",
      lg: "h-6 w-6",
      md: "h-5 w-5",
      sm: "h-4 w-4",
      xs: "h-3 w-3",
    },
    color: {
      white: "text-white",
      error: "text-error",
      brand: "text-brand",
      black: "text-black",
      "gray-1": "text-gray-100",
      "gray-2": "text-gray-200",
      "gray-3": "text-gray-300",
      "gray-4": "text-gray-400",
      "gray-5": "text-gray-500",
      "gray-6": "text-gray-600",
      "gray-7": "text-gray-700",
      "gray-8": "text-gray-800",
      "dark-gray": "text-dark-900",
      success: "text-success",
      destructive: "text-destructive",
      warning: "text-warning",
      orange: "text-orange",
      placeholder: "text-placeholder",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

// Update the IconProps interface to use the IconName type
export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: ColorType;
  className?: string;
  onClick?: (e?: React.MouseEvent<SVGSVGElement>) => void;
  disabled?: boolean;
}

const Icon: FC<IconProps> = ({
  name,
  size,
  color,
  className,
  onClick,
  disabled = false,
}) => {
  // Otherwise use the React component approach
  let IconComponent: LucideIcon | undefined;

  if (!IconComponent && name) {
    IconComponent = iconRegistry[name];
  }

  if (!IconComponent) {
    console.log(`Icon not found: ${name}`);
    return null;
  }

  const computedColor = disabled ? "gray-4" : color;

  return (
    <IconComponent
      className={utils.cn(
        iconVariants({ size, color: computedColor, disabled }),
        className,
        {
          "cursor-pointer hover:scale-110 transition-all duration-100":
            onClick && !disabled,
        }
      )}
      onClick={!disabled ? onClick : undefined}
    />
  );
};

export default Icon;
