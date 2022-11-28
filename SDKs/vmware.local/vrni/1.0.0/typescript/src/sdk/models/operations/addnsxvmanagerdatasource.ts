import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddNsxvManagerDatasourceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AddNsxvManagerDatasourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NsxvManagerDataSourceRequest;

  @SpeakeasyMetadata()
  security: AddNsxvManagerDatasourceSecurity;
}


export class AddNsxvManagerDatasourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nsxvManagerDataSource?: shared.NsxvManagerDataSource;

  @SpeakeasyMetadata()
  statusCode: number;
}
