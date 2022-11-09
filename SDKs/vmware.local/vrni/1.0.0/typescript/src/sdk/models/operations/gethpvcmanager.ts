import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHpvcManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetHpvcManagerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetHpvcManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHpvcManagerPathParams;

  @Metadata()
  security: GetHpvcManagerSecurity;
}


export class GetHpvcManagerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  switchDataSource?: shared.SwitchDataSource;
}
