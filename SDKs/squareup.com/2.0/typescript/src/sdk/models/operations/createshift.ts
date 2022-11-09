import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateShiftSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateShiftRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateShiftRequest;

  @Metadata()
  security: CreateShiftSecurity;
}


export class CreateShiftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createShiftResponse?: shared.CreateShiftResponse;

  @Metadata()
  statusCode: number;
}
