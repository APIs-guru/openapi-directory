import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBrocadeSwitchSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBrocadeSwitchSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetBrocadeSwitchSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBrocadeSwitchSnmpConfigPathParams;

  @Metadata()
  security: GetBrocadeSwitchSnmpConfigSecurity;
}


export class GetBrocadeSwitchSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
