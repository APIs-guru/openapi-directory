import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhotoResultThumbnail
/** 
 * Photo thumbnail data.
**/
export class PhotoResultThumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// PhotoResult
/** 
 * The result of uploading or editing a photo.
**/
export class PhotoResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo_id" })
  photoId?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: PhotoResultThumbnail;
}
