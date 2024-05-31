"use client"

import Image from "next/image";

import { cn } from "@/lib/utils";
import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
};


interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    organization: Organization;
    onExpand: (is: string) => void;
}

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}: NavItemProps) => {
    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn(
                    "flex items-center gap-x-2 p-1.5 text-neutral-700 rouned-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                    isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
                )}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image 
                        fill
                        src={organization.imageUrl} 
                        alt={`Конторка ${organization.name}`} 
                        className="rounded-sm object-cover" />
                    </div>
                    <span className="font-medium text-sm">{organization.name}</span>
                </div>
            </AccordionTrigger>

        </AccordionItem >
    )
}

// todo:2:37:52