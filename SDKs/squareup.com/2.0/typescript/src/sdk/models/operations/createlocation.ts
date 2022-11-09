import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLocationRequest;

  @Metadata()
  security: CreateLocationSecurity;
}


export class CreateLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLocationResponse?: shared.CreateLocationResponse;

  @Metadata()
  statusCode: number;
}
