import { SpeakeasyBase } from "../../../internal/utils";
import { PayRunStatusEnum } from "./payrunstatusenum";
import { PayslipSummary } from "./payslipsummary";
import { ValidationError } from "./validationerror";
import { PayslipSummaryInput } from "./payslipsummary";
export declare class PayRun extends SpeakeasyBase {
    deductions?: number;
    netPay?: number;
    payRunId?: string;
    payRunPeriodEndDate?: string;
    payRunPeriodStartDate?: string;
    payRunStatus?: PayRunStatusEnum;
    paymentDate?: string;
    payrollCalendarId: string;
    payslipMessage?: string;
    payslips?: PayslipSummary[];
    reimbursement?: number;
    super?: number;
    tax?: number;
    updatedDateUtc?: string;
    validationErrors?: ValidationError[];
    wages?: number;
}
export declare class PayRunInput extends SpeakeasyBase {
    deductions?: number;
    netPay?: number;
    payRunId?: string;
    payRunPeriodEndDate?: string;
    payRunPeriodStartDate?: string;
    payRunStatus?: PayRunStatusEnum;
    paymentDate?: string;
    payrollCalendarId: string;
    payslipMessage?: string;
    payslips?: PayslipSummaryInput[];
    reimbursement?: number;
    super?: number;
    tax?: number;
    validationErrors?: ValidationError[];
    wages?: number;
}
