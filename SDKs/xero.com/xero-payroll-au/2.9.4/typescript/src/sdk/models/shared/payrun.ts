import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayRunStatusEnum } from "./payrunstatusenum";
import { PayslipSummary } from "./payslipsummary";
import { ValidationError } from "./validationerror";
import { PayslipSummaryInput } from "./payslipsummary";



export class PayRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deductions" })
  deductions?: number;

  @SpeakeasyMetadata({ data: "json, name=NetPay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=PayRunID" })
  payRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=PayRunPeriodEndDate" })
  payRunPeriodEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayRunPeriodStartDate" })
  payRunPeriodStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayRunStatus" })
  payRunStatus?: PayRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId: string;

  @SpeakeasyMetadata({ data: "json, name=PayslipMessage" })
  payslipMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Payslips", elemType: PayslipSummary })
  payslips?: PayslipSummary[];

  @SpeakeasyMetadata({ data: "json, name=Reimbursement" })
  reimbursement?: number;

  @SpeakeasyMetadata({ data: "json, name=Super" })
  super?: number;

  @SpeakeasyMetadata({ data: "json, name=Tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];

  @SpeakeasyMetadata({ data: "json, name=Wages" })
  wages?: number;
}


export class PayRunInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Deductions" })
  deductions?: number;

  @SpeakeasyMetadata({ data: "json, name=NetPay" })
  netPay?: number;

  @SpeakeasyMetadata({ data: "json, name=PayRunID" })
  payRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=PayRunPeriodEndDate" })
  payRunPeriodEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayRunPeriodStartDate" })
  payRunPeriodStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayRunStatus" })
  payRunStatus?: PayRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId: string;

  @SpeakeasyMetadata({ data: "json, name=PayslipMessage" })
  payslipMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Payslips", elemType: PayslipSummaryInput })
  payslips?: PayslipSummaryInput[];

  @SpeakeasyMetadata({ data: "json, name=Reimbursement" })
  reimbursement?: number;

  @SpeakeasyMetadata({ data: "json, name=Super" })
  super?: number;

  @SpeakeasyMetadata({ data: "json, name=Tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];

  @SpeakeasyMetadata({ data: "json, name=Wages" })
  wages?: number;
}
