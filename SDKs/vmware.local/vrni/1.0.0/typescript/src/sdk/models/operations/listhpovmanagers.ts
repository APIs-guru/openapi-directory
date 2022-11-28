import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListHpovManagersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListHpovManagersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListHpovManagersSecurity;
}


export class ListHpovManagersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
