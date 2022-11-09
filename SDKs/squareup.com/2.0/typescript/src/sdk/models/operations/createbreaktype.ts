import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBreakTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateBreakTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBreakTypeRequest;

  @Metadata()
  security: CreateBreakTypeSecurity;
}


export class CreateBreakTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createBreakTypeResponse?: shared.CreateBreakTypeResponse;

  @Metadata()
  statusCode: number;
}
