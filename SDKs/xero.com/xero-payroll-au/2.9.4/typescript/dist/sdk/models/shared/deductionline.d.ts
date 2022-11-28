import { SpeakeasyBase } from "../../../internal/utils";
import { DeductionTypeCalculationTypeEnum } from "./deductiontypecalculationtypeenum";
export declare class DeductionLine extends SpeakeasyBase {
    amount?: number;
    calculationType: DeductionTypeCalculationTypeEnum;
    deductionTypeId: string;
    numberOfUnits?: number;
    percentage?: number;
}
