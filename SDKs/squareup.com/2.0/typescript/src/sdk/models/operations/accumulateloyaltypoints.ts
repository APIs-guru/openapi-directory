import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccumulateLoyaltyPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class AccumulateLoyaltyPointsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AccumulateLoyaltyPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccumulateLoyaltyPointsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AccumulateLoyaltyPointsRequest;

  @Metadata()
  security: AccumulateLoyaltyPointsSecurity;
}


export class AccumulateLoyaltyPointsResponse extends SpeakeasyBase {
  @Metadata()
  accumulateLoyaltyPointsResponse?: shared.AccumulateLoyaltyPointsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
