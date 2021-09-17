import { SidebarItem } from './types'

// function createSidebarItem(
//     title: string = 'Title',
//     children?: Array<SidebarItem>
// ): SidebarItem {
//     if (children) {
//         return {
//             hidden: false,
//             title: title,
//             child: children
//         }
//     }

//   return {
//     title: title,
//     href: '#',
//     icon: '',
//   };
// }

// console.log(createSidebarItem('Sample'));

function createSidebarItem(title: string, href: string, iconName: string, hidden: boolean, children?: Array<SidebarItem>): SidebarItem {
    if (children) {
        return {
            hidden: hidden,
            href: href,
            title: title,
            icon: {
                name: iconName,
            },
            child: children,
        }
    }
    return {
        hidden: hidden,
        href: href,
        title: title,
        icon: {
            name: iconName,
        },
    }
}

let dashboard = createSidebarItem('Dashboard', '/dashboard', 'template', false);
let project = createSidebarItem('Projects', '/projects', 'collection', false, [dashboard]);

console.log(project);
