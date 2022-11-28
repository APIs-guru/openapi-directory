import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EarningsRateCalculationTypeEnum } from "./earningsratecalculationtypeenum";



export class EarningsLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=AnnualSalary" })
  annualSalary?: number;

  @SpeakeasyMetadata({ data: "json, name=CalculationType" })
  calculationType?: EarningsRateCalculationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EarningsRateID" })
  earningsRateId: string;

  @SpeakeasyMetadata({ data: "json, name=FixedAmount" })
  fixedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=NormalNumberOfUnits" })
  normalNumberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnitsPerWeek" })
  numberOfUnitsPerWeek?: number;

  @SpeakeasyMetadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: number;
}
