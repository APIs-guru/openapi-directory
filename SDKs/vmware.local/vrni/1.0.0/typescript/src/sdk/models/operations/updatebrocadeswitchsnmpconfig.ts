import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBrocadeSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateBrocadeSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateBrocadeSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBrocadeSwitchSnmpConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @Metadata()
  security: UpdateBrocadeSwitchSnmpConfigSecurity;
}


export class UpdateBrocadeSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
