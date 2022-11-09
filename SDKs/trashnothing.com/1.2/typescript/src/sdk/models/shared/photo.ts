import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PhotoImages extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=blurhash" })
  blurhash?: string;

  @Metadata({ data: "json, name=images", elemType: shared.PhotoImages })
  images?: PhotoImages[];

  @Metadata({ data: "json, name=photo_id" })
  photoId?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
