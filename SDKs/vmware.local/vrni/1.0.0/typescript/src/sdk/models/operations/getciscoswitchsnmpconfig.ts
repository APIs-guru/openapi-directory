import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCiscoSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCiscoSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetCiscoSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCiscoSwitchSnmpConfigPathParams;

  @Metadata()
  security: GetCiscoSwitchSnmpConfigSecurity;
}


export class GetCiscoSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
