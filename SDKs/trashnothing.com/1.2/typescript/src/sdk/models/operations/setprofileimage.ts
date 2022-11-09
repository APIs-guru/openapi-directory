import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetProfileImageRequestBodyPhoto extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=photo" })
  photo: string;
}


export class SetProfileImageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=crop" })
  crop?: string;

  @Metadata({ data: "multipart_form, name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "multipart_form, file=true" })
  photo?: SetProfileImageRequestBodyPhoto;

  @Metadata({ data: "multipart_form, name=photo_id" })
  photoId?: string;

  @Metadata({ data: "multipart_form, name=set_default" })
  setDefault?: number;
}


export class SetProfileImageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: SetProfileImageRequestBody;
}


export class SetProfileImage200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo" })
  photo?: shared.PhotoResult;

  @Metadata({ data: "json, name=user" })
  user?: shared.CurrentUser;
}


export class SetProfileImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setProfileImage200ApplicationJsonObject?: SetProfileImage200ApplicationJson;
}
