import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayStatementDetails
/** 
 * The pay statement details model
**/
export class PayStatementDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=checkDate" })
  checkDate?: string;

  @Metadata({ data: "json, name=det" })
  det?: string;

  @Metadata({ data: "json, name=detCode" })
  detCode?: string;

  @Metadata({ data: "json, name=detType" })
  detType?: string;

  @Metadata({ data: "json, name=eligibleCompensation" })
  eligibleCompensation?: number;

  @Metadata({ data: "json, name=hours" })
  hours?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=transactionNumber" })
  transactionNumber?: number;

  @Metadata({ data: "json, name=transactionType" })
  transactionType?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
