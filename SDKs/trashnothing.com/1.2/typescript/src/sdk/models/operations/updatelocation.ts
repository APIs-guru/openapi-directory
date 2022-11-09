import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=latitude" })
  latitude: number;

  @Metadata({ data: "multipart_form, name=longitude" })
  longitude: number;

  @Metadata({ data: "multipart_form, name=name" })
  name: string;

  @Metadata({ data: "multipart_form, name=radius" })
  radius: number;
}


export class UpdateLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateLocationRequestBody;
}


export class UpdateLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentUser?: shared.CurrentUser;

  @Metadata()
  statusCode: number;
}
