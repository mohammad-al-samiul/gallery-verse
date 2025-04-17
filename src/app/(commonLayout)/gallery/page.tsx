import UploadButton from "@/components/ui/gallery/uploadButton";
import View from "@/components/ui/gallery/view";
import { ImageList } from "@mui/material";
import cloudinary from "cloudinary";

interface IMyImage {
  public_id: string;
}

export default async function Gallery() {
  const res = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .execute()) as { resources: IMyImage[] };

  //console.log(res?.resources);
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl font-bold">Gallery</div>
        <UploadButton />
      </div>

      <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {res.resources.map((item, i) => (
          <View key={i} source={item.public_id} />
        ))}
      </ImageList>
    </div>
  );
}
