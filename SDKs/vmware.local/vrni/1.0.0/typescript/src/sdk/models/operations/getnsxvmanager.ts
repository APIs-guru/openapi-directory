import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNsxvManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetNsxvManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetNsxvManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNsxvManagerPathParams;

  @SpeakeasyMetadata()
  security: GetNsxvManagerSecurity;
}


export class GetNsxvManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nsxvManagerDataSource?: shared.NsxvManagerDataSource;

  @SpeakeasyMetadata()
  statusCode: number;
}
