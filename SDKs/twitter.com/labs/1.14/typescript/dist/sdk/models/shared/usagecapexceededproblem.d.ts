import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UsageCapExceededProblemPeriodEnum {
    Daily = "Daily",
    Monthly = "Monthly"
}
export declare enum UsageCapExceededProblemScopeEnum {
    Account = "Account",
    Product = "Product"
}
/**
 * A problem that indicates that a usage cap has been exceeded.
**/
export declare class UsageCapExceededProblem extends SpeakeasyBase {
    detail: string;
    period?: UsageCapExceededProblemPeriodEnum;
    scope?: UsageCapExceededProblemScopeEnum;
    title: string;
    type: string;
}
