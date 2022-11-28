import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableCheckpointFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EnableCheckpointFirewallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class EnableCheckpointFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnableCheckpointFirewallPathParams;

  @SpeakeasyMetadata()
  security: EnableCheckpointFirewallSecurity;
}


export class EnableCheckpointFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
