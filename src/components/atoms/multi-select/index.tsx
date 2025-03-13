"use client";

import { useState } from "react";
import { Command, CommandList, CommandItem } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown, X } from "lucide-react";
import { Label } from "@/components/ui/label";

interface Option {
    id: number;
    name: string;
}

interface MultiSelectProps {
    label: string;
    options: Option[];
    selected: string[];
    setSelected: (selected: string[]) => void;
    placeholder?: string;
    description?: string;
}

export const MultiSelect = ({
    label,
    options,
    selected,
    setSelected,
    placeholder = "Выберите...",
    description,
}: MultiSelectProps) => {
    const [open, setOpen] = useState(false);

    const toggleOption = (name: string) => {
        setSelected(selected.includes(name) ? selected.filter((s) => s !== name) : [...selected, name]);
    };

    return (
        <div className="w-full">
            <Label className="mb-2">{label}</Label>
            <div className="flex flex-wrap gap-2 border-b-2 p-2 bg-tranparent cursor-pointer" onClick={() => setOpen(true)}>
                {selected.length > 0 ? (
                    selected.map((name) => {
                        const option = options.find((o) => o.name === name);
                        return (
                            <Badge key={name} variant="service" className="flex items-center gap-1">
                                {option?.name}
                                <X className="h-4 w-4 cursor-pointer" onClick={(e) => {
                                    e.stopPropagation();
                                    toggleOption(name);
                                }} />
                            </Badge>
                        );
                    })
                ) : (
                    <span className="text-muted-foreground">{placeholder}</span>
                )}

                <ChevronDown className="ml-auto h-4 w-4 text-secondary" />
            </div>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <span></span>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandList className="max-h-[230px] overflow-y-auto p-2">
                            {options.map(({ id, name }) => (
                                <CommandItem key={id} onSelect={() => toggleOption(name)} className="cursor-pointer min-w-28">
                                    <Check className={`mr-2 h-4 w-4 ${selected.includes(name) ? "opacity-100" : "opacity-0"}`} />
                                    {name}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            {description && <p className="text-xs text-gray mt-2">{description}</p>}
        </div>
    );
}
