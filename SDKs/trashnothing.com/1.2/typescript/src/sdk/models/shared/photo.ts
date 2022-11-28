import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhotoImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blurhash" })
  blurhash?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: PhotoImages })
  images?: PhotoImages[];

  @SpeakeasyMetadata({ data: "json, name=photo_id" })
  photoId?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
