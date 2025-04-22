import Image from "next/image";
import Brandenburtur from "../../../../public/images/brandenburtur.jpg";
export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image alt="An image" src={Brandenburtur} />
      {children}
    </div>
  );
}
