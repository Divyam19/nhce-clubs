import { SidebarLink } from "@/components/SidebarItems";
import {  Shield, User, HomeIcon ,Send } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
  { href: "/account", title: "Account", icon: User },
  
];

export const additionalLinks: AdditionalLinks[] = [];
