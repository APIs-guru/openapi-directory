import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBreakTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBreakTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetBreakTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBreakTypePathParams;

  @Metadata()
  security: GetBreakTypeSecurity;
}


export class GetBreakTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBreakTypeResponse?: shared.GetBreakTypeResponse;

  @Metadata()
  statusCode: number;
}
