import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisableCheckpointFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DisableCheckpointFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class DisableCheckpointFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisableCheckpointFirewallPathParams;

  @Metadata()
  security: DisableCheckpointFirewallSecurity;
}


export class DisableCheckpointFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
