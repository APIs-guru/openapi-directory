import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedeemLoyaltyRewardRequest
/** 
 * A request to redeem a loyalty reward.
**/
export class RedeemLoyaltyRewardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;
}
