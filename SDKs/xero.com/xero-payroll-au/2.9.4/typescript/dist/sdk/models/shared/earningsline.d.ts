import { SpeakeasyBase } from "../../../internal/utils";
import { EarningsRateCalculationTypeEnum } from "./earningsratecalculationtypeenum";
export declare class EarningsLine extends SpeakeasyBase {
    amount?: number;
    annualSalary?: number;
    calculationType?: EarningsRateCalculationTypeEnum;
    earningsRateId: string;
    fixedAmount?: number;
    normalNumberOfUnits?: number;
    numberOfUnits?: number;
    numberOfUnitsPerWeek?: number;
    ratePerUnit?: number;
}
