import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RedeemLoyaltyRewardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reward_id" })
  rewardId: string;
}


export class RedeemLoyaltyRewardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RedeemLoyaltyRewardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RedeemLoyaltyRewardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RedeemLoyaltyRewardRequest;

  @Metadata()
  security: RedeemLoyaltyRewardSecurity;
}


export class RedeemLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  redeemLoyaltyRewardResponse?: shared.RedeemLoyaltyRewardResponse;

  @Metadata()
  statusCode: number;
}
