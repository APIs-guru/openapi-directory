import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCiscoSwitchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCiscoSwitchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetCiscoSwitchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCiscoSwitchPathParams;

  @SpeakeasyMetadata()
  security: GetCiscoSwitchSecurity;
}


export class GetCiscoSwitchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
