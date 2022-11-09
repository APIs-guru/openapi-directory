import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCheckpointFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCheckpointFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetCheckpointFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCheckpointFirewallPathParams;

  @Metadata()
  security: GetCheckpointFirewallSecurity;
}


export class GetCheckpointFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  switchDataSource?: shared.SwitchDataSource;
}
