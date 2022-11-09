import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Earning
/** 
 * The employee earning model
**/
export class Earning extends SpeakeasyBase {
  @Metadata({ data: "json, name=agency" })
  agency?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=annualMaximum" })
  annualMaximum?: number;

  @Metadata({ data: "json, name=calculationCode" })
  calculationCode?: string;

  @Metadata({ data: "json, name=costCenter1" })
  costCenter1?: string;

  @Metadata({ data: "json, name=costCenter2" })
  costCenter2?: string;

  @Metadata({ data: "json, name=costCenter3" })
  costCenter3?: string;

  @Metadata({ data: "json, name=earningCode" })
  earningCode: string;

  @Metadata({ data: "json, name=effectiveDate" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=frequency" })
  frequency?: string;

  @Metadata({ data: "json, name=goal" })
  goal?: number;

  @Metadata({ data: "json, name=hoursOrUnits" })
  hoursOrUnits?: number;

  @Metadata({ data: "json, name=isSelfInsured" })
  isSelfInsured?: boolean;

  @Metadata({ data: "json, name=jobCode" })
  jobCode?: string;

  @Metadata({ data: "json, name=miscellaneousInfo" })
  miscellaneousInfo?: string;

  @Metadata({ data: "json, name=paidTowardsGoal" })
  paidTowardsGoal?: number;

  @Metadata({ data: "json, name=payPeriodMaximum" })
  payPeriodMaximum?: number;

  @Metadata({ data: "json, name=payPeriodMinimum" })
  payPeriodMinimum?: number;

  @Metadata({ data: "json, name=rate" })
  rate?: number;

  @Metadata({ data: "json, name=rateCode" })
  rateCode?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate: string;
}
