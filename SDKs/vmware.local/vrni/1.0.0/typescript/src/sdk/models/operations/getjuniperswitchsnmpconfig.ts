import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJuniperSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJuniperSwitchSnmpConfigPathParams;

  @SpeakeasyMetadata()
  security: GetJuniperSwitchSnmpConfigSecurity;
}


export class GetJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
