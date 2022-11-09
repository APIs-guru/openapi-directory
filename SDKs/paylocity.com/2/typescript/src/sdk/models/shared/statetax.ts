import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StateTax
/** 
 * The State Tax model
**/
export class StateTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @Metadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @Metadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @Metadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @Metadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @Metadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @Metadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=specialCheckCalc" })
  specialCheckCalc?: string;

  @Metadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @Metadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @Metadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}
