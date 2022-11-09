import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCheckpointFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateCheckpointFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateCheckpointFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCheckpointFirewallPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSource;

  @Metadata()
  security: UpdateCheckpointFirewallSecurity;
}


export class UpdateCheckpointFirewallResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  switchDataSource?: shared.SwitchDataSource;
}
