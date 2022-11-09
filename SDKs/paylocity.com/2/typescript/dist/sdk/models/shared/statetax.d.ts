import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The State Tax model
**/
export declare class StateTax extends SpeakeasyBase {
    amount?: number;
    deductionsAmount?: number;
    dependentsAmount?: number;
    exemptions?: number;
    exemptions2?: number;
    filingStatus?: string;
    higherRate?: boolean;
    otherIncomeAmount?: number;
    percentage?: number;
    specialCheckCalc?: string;
    taxCalculationCode?: string;
    taxCode?: string;
    w4FormYear?: number;
}
