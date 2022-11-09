import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EarningsRateCalculationTypeEnum } from "./earningsratecalculationtypeenum";


export class EarningsLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=AnnualSalary" })
  annualSalary?: number;

  @Metadata({ data: "json, name=CalculationType" })
  calculationType?: EarningsRateCalculationTypeEnum;

  @Metadata({ data: "json, name=EarningsRateID" })
  earningsRateId: string;

  @Metadata({ data: "json, name=FixedAmount" })
  fixedAmount?: number;

  @Metadata({ data: "json, name=NormalNumberOfUnits" })
  normalNumberOfUnits?: number;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @Metadata({ data: "json, name=NumberOfUnitsPerWeek" })
  numberOfUnitsPerWeek?: number;

  @Metadata({ data: "json, name=RatePerUnit" })
  ratePerUnit?: number;
}
