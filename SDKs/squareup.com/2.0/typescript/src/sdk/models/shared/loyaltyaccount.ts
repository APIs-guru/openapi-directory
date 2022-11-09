import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LoyaltyAccountExpiringPointDeadline } from "./loyaltyaccountexpiringpointdeadline";
import { LoyaltyAccountMapping } from "./loyaltyaccountmapping";


// LoyaltyAccount
/** 
 * Describes a loyalty account. For more information, see
 * [Manage Loyalty Accounts Using the Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview).
**/
export class LoyaltyAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=enrolled_at" })
  enrolledAt?: string;

  @Metadata({ data: "json, name=expiring_point_deadlines", elemType: shared.LoyaltyAccountExpiringPointDeadline })
  expiringPointDeadlines?: LoyaltyAccountExpiringPointDeadline[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lifetime_points" })
  lifetimePoints?: number;

  @Metadata({ data: "json, name=mapping" })
  mapping?: LoyaltyAccountMapping;

  @Metadata({ data: "json, name=program_id" })
  programId: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
