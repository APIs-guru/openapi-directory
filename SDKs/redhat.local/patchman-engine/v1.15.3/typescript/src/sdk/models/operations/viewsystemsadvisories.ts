import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ViewSystemsAdvisoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  rhIdentity: shared.SchemeRhIdentity;
}


export class ViewSystemsAdvisoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ControllersSystemsAdvisoriesRequest;

  @SpeakeasyMetadata()
  security: ViewSystemsAdvisoriesSecurity;
}


export class ViewSystemsAdvisoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  controllersSystemsAdvisoriesResponse?: shared.ControllersSystemsAdvisoriesResponse;
}
