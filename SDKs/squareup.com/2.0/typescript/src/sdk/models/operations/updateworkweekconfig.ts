import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateWorkweekConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateWorkweekConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateWorkweekConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateWorkweekConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateWorkweekConfigRequest;

  @Metadata()
  security: UpdateWorkweekConfigSecurity;
}


export class UpdateWorkweekConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateWorkweekConfigResponse?: shared.UpdateWorkweekConfigResponse;
}
