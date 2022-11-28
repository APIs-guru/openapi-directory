import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListNsxvManagersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListNsxvManagersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListNsxvManagersSecurity;
}


export class ListNsxvManagersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
