import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


// CreateCustomerCardRequest
/** 
 * Defines the fields that are included in the request body of a request
 * to the `CreateCustomerCard` endpoint.
**/
export class CreateCustomerCardRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @Metadata({ data: "json, name=card_nonce" })
  cardNonce: string;

  @Metadata({ data: "json, name=cardholder_name" })
  cardholderName?: string;

  @Metadata({ data: "json, name=verification_token" })
  verificationToken?: string;
}
