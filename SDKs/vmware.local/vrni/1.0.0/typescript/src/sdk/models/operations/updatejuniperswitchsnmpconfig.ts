import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateJuniperSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateJuniperSwitchSnmpConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @Metadata()
  security: UpdateJuniperSwitchSnmpConfigSecurity;
}


export class UpdateJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
