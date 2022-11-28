import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUcsSnmpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateUcsSnmpConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateUcsSnmpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUcsSnmpConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  security: UpdateUcsSnmpConfigSecurity;
}


export class UpdateUcsSnmpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  snmpConfig?: shared.SnmpConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
