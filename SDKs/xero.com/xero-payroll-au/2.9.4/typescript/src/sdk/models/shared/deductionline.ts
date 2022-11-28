import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeductionTypeCalculationTypeEnum } from "./deductiontypecalculationtypeenum";



export class DeductionLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=CalculationType" })
  calculationType: DeductionTypeCalculationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DeductionTypeID" })
  deductionTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage?: number;
}
