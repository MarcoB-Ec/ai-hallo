import { Card, CardContent, CardHeader } from "@ai-hallo/components/ui/card";
import { Input } from "@ai-hallo/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ai-hallo/components/ui/select";
import Image from "next/image";
import Brandenburtur from "../../../public/images/brandenburtur.jpg";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <div className="border-accent flex items-center justify-between">
        <span>Browse articles</span>
        <span className="flex items-center gap-4">
          <Input type="search" placeholder="Search article by topic" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Basic</SelectItem>
              <SelectItem value="dark">Medium</SelectItem>
              <SelectItem value="system">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 8 }, (_, i) => (
          <Card key={i}>
            <CardHeader>
              <Image src={Brandenburtur} alt="mage" />
            </CardHeader>
            <CardContent>
              This is a card with an image. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque at erat id ligula
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
