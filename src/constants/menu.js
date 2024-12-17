import {
  ClipboardList,
  UserPlus,
  ThumbsUp,
  Settings,
  LogOut,
  Users,
  User,
  LayoutDashboard,
  NotebookText,
  ShoppingCart
} from "lucide-react";

export const adminMenus = [
  { title: "Organizations", src: Users, path: "/ad" },
  { title: "Accounts", src: User, path: "/ad/accounts" },
  { title: "Accounts Settings", src: Settings, path: "/ad/account-settings" },
  { title: "Logout", src: LogOut, gap: true, path: "/ad/login" },
];

export const elecomMenus = [
  { title: "Election", src: ClipboardList, path: "/e" },
  { title: "Candidates", src: UserPlus, path: "/e/candidates" },
  { title: "Votes", src: ThumbsUp, path: "/e/votes" },
  { title: "Accounts Settings", src: Settings, gap: true, path: "/e/account-settings" },
  { title: "Logout", src: LogOut, gap: true, path: "/e/login" },
];

export const officerMenus=[
  { title: "Dashboard", src: LayoutDashboard, path: "/officer",},
  { title: "Posts", src: NotebookText, path: "/officer/posts",},
  { title: "Shops", src:ShoppingCart, path: "/officer/shops",},
  { title: "Elections", src:ClipboardList, path: "/officer/elections",},
  { title: "Members", src:User, path: "/officer/members",},
  { title: "Accounts Settings", src: Settings, gap: true, path: "/officer/account-settings" },
  { title: "Logout", src: LogOut, gap: true, path: "/officer/login" },
];
