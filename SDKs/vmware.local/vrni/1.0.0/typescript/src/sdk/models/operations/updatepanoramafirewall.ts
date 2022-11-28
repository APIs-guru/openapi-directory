import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePanoramaFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatePanoramaFirewallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdatePanoramaFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePanoramaFirewallPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSource;

  @SpeakeasyMetadata()
  security: UpdatePanoramaFirewallSecurity;
}


export class UpdatePanoramaFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  switchDataSource?: shared.SwitchDataSource;
}
