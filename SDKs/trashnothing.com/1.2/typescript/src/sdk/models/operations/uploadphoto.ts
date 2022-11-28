import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo" })
  photo: string;
}


export class UploadPhotoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  photo: UploadPhotoRequestBodyPhoto;
}


export class UploadPhotoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadPhotoRequestBody;
}


export class UploadPhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  photoResult?: shared.PhotoResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
