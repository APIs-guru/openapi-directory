import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLoyaltyRewardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reward_id" })
  rewardId: string;
}


export class DeleteLoyaltyRewardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteLoyaltyRewardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLoyaltyRewardPathParams;

  @Metadata()
  security: DeleteLoyaltyRewardSecurity;
}


export class DeleteLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteLoyaltyRewardResponse?: shared.DeleteLoyaltyRewardResponse;

  @Metadata()
  statusCode: number;
}
