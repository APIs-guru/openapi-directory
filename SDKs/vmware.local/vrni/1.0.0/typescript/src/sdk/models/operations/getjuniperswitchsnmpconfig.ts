import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJuniperSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetJuniperSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetJuniperSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJuniperSwitchSnmpConfigPathParams;

  @Metadata()
  security: GetJuniperSwitchSnmpConfigSecurity;
}


export class GetJuniperSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
