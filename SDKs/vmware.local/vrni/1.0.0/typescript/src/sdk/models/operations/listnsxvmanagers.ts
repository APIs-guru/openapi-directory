import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListNsxvManagersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListNsxvManagersRequest extends SpeakeasyBase {
  @Metadata()
  security: ListNsxvManagersSecurity;
}


export class ListNsxvManagersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @Metadata()
  statusCode: number;
}
