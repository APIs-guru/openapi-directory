import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ViewAdvisoriesSystemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ViewAdvisoriesSystemsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ControllersSystemsAdvisoriesRequest;

  @Metadata()
  security: ViewAdvisoriesSystemsSecurity;
}


export class ViewAdvisoriesSystemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  controllersAdvisoriesSystemsResponse?: shared.ControllersAdvisoriesSystemsResponse;
}
