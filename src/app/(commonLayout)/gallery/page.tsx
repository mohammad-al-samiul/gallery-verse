import UploadButton from "@/components/ui/gallery/uploadButton";
import cloudinary from "cloudinary";

interface IMyImage {
  public_id: string;
}

export default async function Gallery() {
  let res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(5)
    .execute()) as { resources: IMyImage[] };

  console.log(res?.resources);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl font-bold">Gallery</div>
        <UploadButton />
      </div>

      {/* You can add gallery content here */}
    </div>
  );
}
