import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCiscoSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateCiscoSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateCiscoSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCiscoSwitchSnmpConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @Metadata()
  security: UpdateCiscoSwitchSnmpConfigSecurity;
}


export class UpdateCiscoSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
