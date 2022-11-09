import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchLoyaltyRewardsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchLoyaltyRewardsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchLoyaltyRewardsRequest;

  @Metadata()
  security: SearchLoyaltyRewardsSecurity;
}


export class SearchLoyaltyRewardsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchLoyaltyRewardsResponse?: shared.SearchLoyaltyRewardsResponse;

  @Metadata()
  statusCode: number;
}
