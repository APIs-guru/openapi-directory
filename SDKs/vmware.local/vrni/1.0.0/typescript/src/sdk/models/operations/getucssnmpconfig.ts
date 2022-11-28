import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUcsSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetUcsSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetUcsSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUcsSnmpConfigPathParams;

  @SpeakeasyMetadata()
  security: GetUcsSnmpConfigSecurity;
}


export class GetUcsSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
