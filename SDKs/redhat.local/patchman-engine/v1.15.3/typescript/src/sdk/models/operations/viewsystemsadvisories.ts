import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ViewSystemsAdvisoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ViewSystemsAdvisoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ControllersSystemsAdvisoriesRequest;

  @Metadata()
  security: ViewSystemsAdvisoriesSecurity;
}


export class ViewSystemsAdvisoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersSystemsAdvisoriesResponse?: shared.ControllersSystemsAdvisoriesResponse;
}
