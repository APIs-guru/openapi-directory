import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=photo" })
  photo: string;
}


export class UploadPhotoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "multipart_form, file=true" })
  photo: UploadPhotoRequestBodyPhoto;
}


export class UploadPhotoRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadPhotoRequestBody;
}


export class UploadPhotoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  photoResult?: shared.PhotoResult;

  @Metadata()
  statusCode: number;
}
