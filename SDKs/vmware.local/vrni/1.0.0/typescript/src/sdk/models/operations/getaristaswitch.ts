import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAristaSwitchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetAristaSwitchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetAristaSwitchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAristaSwitchPathParams;

  @Metadata()
  security: GetAristaSwitchSecurity;
}


export class GetAristaSwitchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  switchDataSource?: shared.SwitchDataSource;
}
