import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=radius" })
  radius: number;
}


export class UpdateLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateLocationRequestBody;
}


export class UpdateLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentUser?: shared.CurrentUser;

  @SpeakeasyMetadata()
  statusCode: number;
}
