import Image from "next/image";
import Brandenburtur from "../../../public/images/brandenburtur.jpg";

export default function ArticlesPage() {
  return (
    <div>
      <div className="card card-xs card-border w-80 shadow-xl">
        <figure>
          <Image src={Brandenburtur} alt="Brandenburtur" placeholder="blur" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          {/* <p className="card-side">description</p> */}
        </div>
      </div>
    </div>
  );
}
