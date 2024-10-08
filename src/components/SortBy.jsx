import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SortBy = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="asc">Asc</SelectItem>
        <SelectItem value="dsc">Dsc</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortBy;
