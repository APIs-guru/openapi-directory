import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListApplicationTiersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListApplicationTiersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListApplicationTiersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListApplicationTiersPathParams;

  @SpeakeasyMetadata()
  security: ListApplicationTiersSecurity;
}


export class ListApplicationTiersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tierListResponse?: shared.TierListResponse;
}
