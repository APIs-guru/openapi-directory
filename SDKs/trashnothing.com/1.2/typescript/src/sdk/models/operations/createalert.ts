import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAlertRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=search" })
  search: string;

  @Metadata({ data: "multipart_form, name=types" })
  types: string;
}


export class CreateAlertRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: CreateAlertRequestBody;
}


export class CreateAlertResponse extends SpeakeasyBase {
  @Metadata()
  alert?: shared.Alert;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
