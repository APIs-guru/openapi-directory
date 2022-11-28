import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListHpvcManagersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListHpvcManagersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListHpvcManagersSecurity;
}


export class ListHpvcManagersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
