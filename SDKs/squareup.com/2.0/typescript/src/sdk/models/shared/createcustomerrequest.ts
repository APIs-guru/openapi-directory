import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


// CreateCustomerRequest
/** 
 * Defines the body parameters that can be included in a request to the
 * `CreateCustomer` endpoint.
**/
export class CreateCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=birthday" })
  birthday?: string;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;
}
