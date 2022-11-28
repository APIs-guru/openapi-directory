import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ViewAdvisoriesSystemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ViewAdvisoriesSystemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ControllersSystemsAdvisoriesRequest;

  @SpeakeasyMetadata()
  security: ViewAdvisoriesSystemsSecurity;
}


export class ViewAdvisoriesSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersAdvisoriesSystemsResponse?: shared.ControllersAdvisoriesSystemsResponse;
}
