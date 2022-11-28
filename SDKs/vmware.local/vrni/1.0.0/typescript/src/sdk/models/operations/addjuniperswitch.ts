import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddJuniperSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AddJuniperSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SwitchDataSourceRequest;

  @SpeakeasyMetadata()
  security: AddJuniperSwitchSecurity;
}


export class AddJuniperSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  switchDataSource?: shared.SwitchDataSource;
}
