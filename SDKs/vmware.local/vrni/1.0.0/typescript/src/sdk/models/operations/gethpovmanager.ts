import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHpovManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetHpovManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetHpovManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetHpovManagerPathParams;

  @SpeakeasyMetadata()
  security: GetHpovManagerSecurity;
}


export class GetHpovManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  switchDataSource?: shared.SwitchDataSource;
}
