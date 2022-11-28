import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NonPrimaryStateTax
/** 
 * The Non-Primary State Tax model
**/
export class NonPrimaryStateTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=deductionsAmount" })
  deductionsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=dependentsAmount" })
  dependentsAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions" })
  exemptions?: number;

  @SpeakeasyMetadata({ data: "json, name=exemptions2" })
  exemptions2?: number;

  @SpeakeasyMetadata({ data: "json, name=filingStatus" })
  filingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=higherRate" })
  higherRate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otherIncomeAmount" })
  otherIncomeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=reciprocityCode" })
  reciprocityCode?: string;

  @SpeakeasyMetadata({ data: "json, name=specialCheckCalc" })
  specialCheckCalc?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCalculationCode" })
  taxCalculationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCode" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=w4FormYear" })
  w4FormYear?: number;
}
