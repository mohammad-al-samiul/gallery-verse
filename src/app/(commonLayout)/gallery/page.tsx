import UploadButton from "@/components/ui/gallery/uploadButton";
import View from "@/components/ui/gallery/view";
import cloudinary from "cloudinary";

interface IMyImage {
  public_id: string;
}

export default async function Gallery() {
  const res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .execute()) as { resources: IMyImage[] };

  console.log(res?.resources);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl font-bold">Gallery</div>
        <UploadButton />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 grid-cols-1">
        {res.resources.map((item, i) => (
          <div key={i}>
            <View source={item.public_id} />
          </div>
        ))}
      </div>
    </div>
  );
}
