import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCiscoSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCiscoSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetCiscoSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCiscoSwitchPathParams;

  @Metadata()
  security: GetCiscoSwitchSecurity;
}


export class GetCiscoSwitchResponse extends SpeakeasyBase {
  @Metadata()
  ciscoSwitchDataSource?: shared.CiscoSwitchDataSource;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
