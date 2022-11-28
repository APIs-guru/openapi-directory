import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListBrocadeSwitchesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListBrocadeSwitchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListBrocadeSwitchesSecurity;
}


export class ListBrocadeSwitchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
