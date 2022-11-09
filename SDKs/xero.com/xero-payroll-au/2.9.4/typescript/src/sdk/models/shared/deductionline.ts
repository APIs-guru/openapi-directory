import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeductionTypeCalculationTypeEnum } from "./deductiontypecalculationtypeenum";


export class DeductionLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=CalculationType" })
  calculationType: DeductionTypeCalculationTypeEnum;

  @Metadata({ data: "json, name=DeductionTypeID" })
  deductionTypeId: string;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @Metadata({ data: "json, name=Percentage" })
  percentage?: number;
}
