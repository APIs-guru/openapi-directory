import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Earning
/** 
 * The employee earning model
**/
export class Earning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agency" })
  agency?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=annualMaximum" })
  annualMaximum?: number;

  @SpeakeasyMetadata({ data: "json, name=calculationCode" })
  calculationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @SpeakeasyMetadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @SpeakeasyMetadata({ data: "json, name=earningCode" })
  earningCode: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=goal" })
  goal?: number;

  @SpeakeasyMetadata({ data: "json, name=hoursOrUnits" })
  hoursOrUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=isSelfInsured" })
  isSelfInsured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobCode" })
  jobCode?: string;

  @SpeakeasyMetadata({ data: "json, name=miscellaneousInfo" })
  miscellaneousInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=paidTowardsGoal" })
  paidTowardsGoal?: number;

  @SpeakeasyMetadata({ data: "json, name=payPeriodMaximum" })
  payPeriodMaximum?: number;

  @SpeakeasyMetadata({ data: "json, name=payPeriodMinimum" })
  payPeriodMinimum?: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=rateCode" })
  rateCode?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: string;
}
