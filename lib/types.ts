export interface SidebarItem {
    hidden?: boolean;
    title: string;
    icon: string;
    child?: SidebarItem[];
}
