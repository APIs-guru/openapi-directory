import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUcsSnmpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateUcsSnmpConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateUcsSnmpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUcsSnmpConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @Metadata()
  security: UpdateUcsSnmpConfigSecurity;
}


export class UpdateUcsSnmpConfigResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  snmpConfig?: shared.SnmpConfig;

  @Metadata()
  statusCode: number;
}
