import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDellSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDellSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDellSwitchSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDellSwitchSnmpConfigPathParams;

  @SpeakeasyMetadata()
  security: GetDellSwitchSnmpConfigSecurity;
}


export class GetDellSwitchSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
