import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayslipSummaryInput extends SpeakeasyBase {
    deductions?: number;
    employeeGroup?: string;
    employeeId?: string;
    firstName?: string;
    lastName?: string;
    netPay?: number;
    payslipId?: string;
    reimbursements?: number;
    super?: number;
    tax?: number;
    wages?: number;
}
export declare class PayslipSummary extends SpeakeasyBase {
    deductions?: number;
    employeeGroup?: string;
    employeeId?: string;
    firstName?: string;
    lastName?: string;
    netPay?: number;
    payslipId?: string;
    reimbursements?: number;
    super?: number;
    tax?: number;
    updatedDateUtc?: string;
    wages?: number;
}
