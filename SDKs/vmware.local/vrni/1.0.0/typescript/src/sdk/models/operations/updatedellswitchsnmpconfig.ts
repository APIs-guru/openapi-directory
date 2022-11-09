import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDellSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateDellSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateDellSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDellSwitchSnmpConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @Metadata()
  security: UpdateDellSwitchSnmpConfigSecurity;
}


export class UpdateDellSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
