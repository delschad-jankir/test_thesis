import {
  Users,
  Settings,
  LayoutGrid,
  LucideIcon,
  Book,
  Sparkle,
  Newspaper
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Workspace",
      menus: [
        {
          href: "/data",
          label: "Company Data",
          icon: Book
        },
        {
          href: "/news",
          label: "News",
          icon: Newspaper
        },
        {
          href: "/chat",
          label: "Chatbot",
          icon: Sparkle
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/user",
          label: "User",
          icon: Users
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings
        }
      ]
    }
  ];
}
