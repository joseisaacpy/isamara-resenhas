"use client";
import { Button } from "./ui/button";

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function SelectCategory({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {categories.map((cat) => (
        <Button
          key={cat}
          onClick={() => onSelect(cat)}
          variant={cat === selected ? "default" : "outline"}
        >
          {cat.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
