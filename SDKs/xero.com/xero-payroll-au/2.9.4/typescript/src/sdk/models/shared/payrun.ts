import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PayRunStatusEnum } from "./payrunstatusenum";
import { PayslipSummary } from "./payslipsummary";
import { ValidationError } from "./validationerror";


export class PayRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=Deductions" })
  deductions?: number;

  @Metadata({ data: "json, name=NetPay" })
  netPay?: number;

  @Metadata({ data: "json, name=PayRunID" })
  payRunId?: string;

  @Metadata({ data: "json, name=PayRunPeriodEndDate" })
  payRunPeriodEndDate?: string;

  @Metadata({ data: "json, name=PayRunPeriodStartDate" })
  payRunPeriodStartDate?: string;

  @Metadata({ data: "json, name=PayRunStatus" })
  payRunStatus?: PayRunStatusEnum;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: string;

  @Metadata({ data: "json, name=PayrollCalendarID" })
  payrollCalendarId: string;

  @Metadata({ data: "json, name=PayslipMessage" })
  payslipMessage?: string;

  @Metadata({ data: "json, name=Payslips", elemType: shared.PayslipSummary })
  payslips?: PayslipSummary[];

  @Metadata({ data: "json, name=Reimbursement" })
  reimbursement?: number;

  @Metadata({ data: "json, name=Super" })
  super?: number;

  @Metadata({ data: "json, name=Tax" })
  tax?: number;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];

  @Metadata({ data: "json, name=Wages" })
  wages?: number;
}
