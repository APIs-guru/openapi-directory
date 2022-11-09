import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


// InvoiceRecipient
/** 
 * Provides customer data that Square uses to deliver an invoice.
**/
export class InvoiceRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}
