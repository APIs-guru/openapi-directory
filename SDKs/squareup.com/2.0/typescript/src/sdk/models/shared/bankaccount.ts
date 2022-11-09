import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BankAccount
/** 
 * Represents a bank account. For more information about 
 * linking a bank account to a Square account, see 
 * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
**/
export class BankAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_number_suffix" })
  accountNumberSuffix: string;

  @Metadata({ data: "json, name=account_type" })
  accountType: string;

  @Metadata({ data: "json, name=bank_name" })
  bankName?: string;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=creditable" })
  creditable: boolean;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=debit_mandate_reference_id" })
  debitMandateReferenceId?: string;

  @Metadata({ data: "json, name=debitable" })
  debitable: boolean;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=holder_name" })
  holderName: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=primary_bank_identification_number" })
  primaryBankIdentificationNumber: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=secondary_bank_identification_number" })
  secondaryBankIdentificationNumber?: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
