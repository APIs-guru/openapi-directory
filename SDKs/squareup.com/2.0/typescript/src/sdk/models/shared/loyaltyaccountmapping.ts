import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyAccountMapping
/** 
 * Represents the mapping that associates a loyalty account with a buyer. 
 * 
 * Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see 
 * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
**/
export class LoyaltyAccountMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}
