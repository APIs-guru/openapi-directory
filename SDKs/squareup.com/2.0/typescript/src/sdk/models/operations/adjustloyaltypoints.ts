import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdjustLoyaltyPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class AdjustLoyaltyPointsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AdjustLoyaltyPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdjustLoyaltyPointsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AdjustLoyaltyPointsRequest;

  @Metadata()
  security: AdjustLoyaltyPointsSecurity;
}


export class AdjustLoyaltyPointsResponse extends SpeakeasyBase {
  @Metadata()
  adjustLoyaltyPointsResponse?: shared.AdjustLoyaltyPointsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
