import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AchDetails
/** 
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.
**/
export class AchDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_number_suffix" })
  accountNumberSuffix?: string;

  @Metadata({ data: "json, name=account_type" })
  accountType?: string;

  @Metadata({ data: "json, name=routing_number" })
  routingNumber?: string;
}
