import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBrocadeSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBrocadeSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetBrocadeSwitchSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBrocadeSwitchSnmpConfigPathParams;

  @SpeakeasyMetadata()
  security: GetBrocadeSwitchSnmpConfigSecurity;
}


export class GetBrocadeSwitchSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
