import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateJuniperSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateJuniperSwitchSnmpConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  security: UpdateJuniperSwitchSnmpConfigSecurity;
}


export class UpdateJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
