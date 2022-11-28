import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetProfileImageRequestBodyPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo" })
  photo: string;
}


export class SetProfileImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=crop" })
  crop?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  photo?: SetProfileImageRequestBodyPhoto;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo_id" })
  photoId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=set_default" })
  setDefault?: number;
}


export class SetProfileImage200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: shared.PhotoResult;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: shared.CurrentUser;
}


export class SetProfileImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: SetProfileImageRequestBody;
}


export class SetProfileImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setProfileImage200ApplicationJsonObject?: SetProfileImage200ApplicationJson;
}
