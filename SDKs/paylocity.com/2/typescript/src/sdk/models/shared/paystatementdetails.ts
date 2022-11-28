import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayStatementDetails
/** 
 * The pay statement details model
**/
export class PayStatementDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=checkDate" })
  checkDate?: string;

  @SpeakeasyMetadata({ data: "json, name=det" })
  det?: string;

  @SpeakeasyMetadata({ data: "json, name=detCode" })
  detCode?: string;

  @SpeakeasyMetadata({ data: "json, name=detType" })
  detType?: string;

  @SpeakeasyMetadata({ data: "json, name=eligibleCompensation" })
  eligibleCompensation?: number;

  @SpeakeasyMetadata({ data: "json, name=hours" })
  hours?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionNumber" })
  transactionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionType" })
  transactionType?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
