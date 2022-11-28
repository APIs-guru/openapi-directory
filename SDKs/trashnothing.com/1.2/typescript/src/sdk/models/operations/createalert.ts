import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAlertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=search" })
  search: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=types" })
  types: string;
}


export class CreateAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: CreateAlertRequestBody;
}


export class CreateAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alert?: shared.Alert;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
