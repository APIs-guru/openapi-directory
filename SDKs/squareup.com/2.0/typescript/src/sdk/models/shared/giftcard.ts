import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCard
/** 
 * Represents a Square gift card.
**/
export class GiftCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance_money" })
  balanceMoney?: Money;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_ids" })
  customerIds?: string[];

  @Metadata({ data: "json, name=gan" })
  gan?: string;

  @Metadata({ data: "json, name=gan_source" })
  ganSource?: any;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=state" })
  state?: any;

  @Metadata({ data: "json, name=type" })
  type: any;
}
