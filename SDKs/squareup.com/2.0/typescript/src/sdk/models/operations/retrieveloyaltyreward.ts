import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveLoyaltyRewardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reward_id" })
  rewardId: string;
}


export class RetrieveLoyaltyRewardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveLoyaltyRewardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveLoyaltyRewardPathParams;

  @Metadata()
  security: RetrieveLoyaltyRewardSecurity;
}


export class RetrieveLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveLoyaltyRewardResponse?: shared.RetrieveLoyaltyRewardResponse;

  @Metadata()
  statusCode: number;
}
