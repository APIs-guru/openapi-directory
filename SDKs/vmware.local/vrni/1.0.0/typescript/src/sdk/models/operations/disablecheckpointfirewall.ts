import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisableCheckpointFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DisableCheckpointFirewallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DisableCheckpointFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisableCheckpointFirewallPathParams;

  @SpeakeasyMetadata()
  security: DisableCheckpointFirewallSecurity;
}


export class DisableCheckpointFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
