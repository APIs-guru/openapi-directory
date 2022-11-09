import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AchDetails } from "./achdetails";
import { Error } from "./error";


// BankAccountPaymentDetails
/** 
 * Additional details about BANK_ACCOUNT type payments.
**/
export class BankAccountPaymentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_ownership_type" })
  accountOwnershipType?: string;

  @Metadata({ data: "json, name=ach_details" })
  achDetails?: AchDetails;

  @Metadata({ data: "json, name=bank_name" })
  bankName?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=statement_description" })
  statementDescription?: string;

  @Metadata({ data: "json, name=transfer_type" })
  transferType?: string;
}
