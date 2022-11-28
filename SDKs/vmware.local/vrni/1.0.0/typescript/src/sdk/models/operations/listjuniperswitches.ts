import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListJuniperSwitchesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListJuniperSwitchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListJuniperSwitchesSecurity;
}


export class ListJuniperSwitchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataSourceListResponse?: shared.DataSourceListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
