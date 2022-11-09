import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhotoResultThumbnail
/** 
 * Photo thumbnail data.
**/
export class PhotoResultThumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// PhotoResult
/** 
 * The result of uploading or editing a photo.
**/
export class PhotoResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo_id" })
  photoId?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: PhotoResultThumbnail;
}
