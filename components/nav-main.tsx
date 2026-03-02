'use client';

import { MoreHorizontal, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile, state } = useSidebar();
  const open = state === 'expanded';

  const childVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item, index) => (
          <DropdownMenu key={item.title}>
            <SidebarMenuItem asChild>
              <motion.li
                variants={childVariants}
                transition={{ duration: 0.3 }}>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    {item.title} <MoreHorizontal className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {item.items?.length ? (
                  <DropdownMenuContent
                    side={isMobile ? 'bottom' : 'right'}
                    align={isMobile ? 'end' : 'start'}
                    className="min-w-56 rounded-lg">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem asChild key={subItem.title}>
                        <a href={subItem.url}>{subItem.title}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                ) : null}
              </motion.li>
            </SidebarMenuItem>
          </DropdownMenu>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
