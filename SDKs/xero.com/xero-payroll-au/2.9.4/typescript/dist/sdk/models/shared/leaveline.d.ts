import { SpeakeasyBase } from "../../../internal/utils";
import { LeaveLineCalculationTypeEnum } from "./leavelinecalculationtypeenum";
import { EmploymentTerminationPaymentTypeEnum } from "./employmentterminationpaymenttypeenum";
import { EntitlementFinalPayPayoutTypeEnum } from "./entitlementfinalpaypayouttypeenum";
export declare class LeaveLine extends SpeakeasyBase {
    annualNumberOfUnits?: number;
    calculationType?: LeaveLineCalculationTypeEnum;
    employmentTerminationPaymentType?: EmploymentTerminationPaymentTypeEnum;
    entitlementFinalPayPayoutType?: EntitlementFinalPayPayoutTypeEnum;
    fullTimeNumberOfUnitsPerPeriod?: number;
    includeSuperannuationGuaranteeContribution?: boolean;
    leaveTypeId?: string;
    numberOfUnits?: number;
}
