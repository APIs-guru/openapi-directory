import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBreakTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateBreakTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateBreakTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBreakTypePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateBreakTypeRequest;

  @Metadata()
  security: UpdateBreakTypeSecurity;
}


export class UpdateBreakTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateBreakTypeResponse?: shared.UpdateBreakTypeResponse;
}
