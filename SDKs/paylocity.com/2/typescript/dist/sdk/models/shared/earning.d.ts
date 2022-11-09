import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The employee earning model
**/
export declare class Earning extends SpeakeasyBase {
    agency?: string;
    amount?: number;
    annualMaximum?: number;
    calculationCode?: string;
    costCenter1?: string;
    costCenter2?: string;
    costCenter3?: string;
    earningCode: string;
    effectiveDate?: string;
    endDate?: string;
    frequency?: string;
    goal?: number;
    hoursOrUnits?: number;
    isSelfInsured?: boolean;
    jobCode?: string;
    miscellaneousInfo?: string;
    paidTowardsGoal?: number;
    payPeriodMaximum?: number;
    payPeriodMinimum?: number;
    rate?: number;
    rateCode?: string;
    startDate: string;
}
