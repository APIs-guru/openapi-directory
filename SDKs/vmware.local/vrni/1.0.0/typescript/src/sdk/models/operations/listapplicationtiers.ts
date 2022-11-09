import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListApplicationTiersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ListApplicationTiersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ListApplicationTiersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListApplicationTiersPathParams;

  @Metadata()
  security: ListApplicationTiersSecurity;
}


export class ListApplicationTiersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tierListResponse?: shared.TierListResponse;
}
