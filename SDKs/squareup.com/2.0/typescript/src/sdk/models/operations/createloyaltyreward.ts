import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLoyaltyRewardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateLoyaltyRewardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLoyaltyRewardRequest;

  @Metadata()
  security: CreateLoyaltyRewardSecurity;
}


export class CreateLoyaltyRewardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLoyaltyRewardResponse?: shared.CreateLoyaltyRewardResponse;

  @Metadata()
  statusCode: number;
}
