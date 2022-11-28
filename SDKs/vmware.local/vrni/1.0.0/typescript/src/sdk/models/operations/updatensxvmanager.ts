import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNsxvManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateNsxvManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class UpdateNsxvManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNsxvManagerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NsxvManagerDataSource;

  @SpeakeasyMetadata()
  security: UpdateNsxvManagerSecurity;
}


export class UpdateNsxvManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nsxvManagerDataSource?: shared.NsxvManagerDataSource;

  @SpeakeasyMetadata()
  statusCode: number;
}
