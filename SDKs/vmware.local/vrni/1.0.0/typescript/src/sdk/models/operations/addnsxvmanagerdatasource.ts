import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddNsxvManagerDatasourceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class AddNsxvManagerDatasourceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.NsxvManagerDataSourceRequest;

  @Metadata()
  security: AddNsxvManagerDatasourceSecurity;
}


export class AddNsxvManagerDatasourceResponse extends SpeakeasyBase {
  @Metadata()
  apiError?: shared.ApiError;

  @Metadata()
  contentType: string;

  @Metadata()
  nsxvManagerDataSource?: shared.NsxvManagerDataSource;

  @Metadata()
  statusCode: number;
}
