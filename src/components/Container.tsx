import React from 'react'
import { cn } from "@/utils/cn";

function Container(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={cn(
                "w-full bg-white border rounded-xl flex py-4 shadow-sm dark:bg-dark_mode dark:border-none",
                props.className
            )}
        />
    );
}

export default Container