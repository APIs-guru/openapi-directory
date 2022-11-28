import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDellSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateDellSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateDellSwitchSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDellSwitchSnmpConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  security: UpdateDellSwitchSnmpConfigSecurity;
}


export class UpdateDellSwitchSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
