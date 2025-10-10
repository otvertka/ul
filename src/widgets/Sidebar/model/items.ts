import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg'


export interface SidebarItemsType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainIcon
    },
    {
        path: RoutePath.about,
        text: 'About site',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true
    },
    {
        path: RoutePath.articles,
        text: 'Articles',
        Icon: ArticlesIcon,
        authOnly: true
    },
] 