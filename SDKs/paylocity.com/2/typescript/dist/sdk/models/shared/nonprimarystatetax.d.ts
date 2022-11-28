import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Non-Primary State Tax model
**/
export declare class NonPrimaryStateTax extends SpeakeasyBase {
    amount?: number;
    deductionsAmount?: number;
    dependentsAmount?: number;
    exemptions?: number;
    exemptions2?: number;
    filingStatus?: string;
    higherRate?: boolean;
    otherIncomeAmount?: number;
    percentage?: number;
    reciprocityCode?: string;
    specialCheckCalc?: string;
    taxCalculationCode?: string;
    taxCode?: string;
    w4FormYear?: number;
}
