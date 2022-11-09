import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayslipSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Deductions" })
  deductions?: number;

  @Metadata({ data: "json, name=EmployeeGroup" })
  employeeGroup?: string;

  @Metadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=NetPay" })
  netPay?: number;

  @Metadata({ data: "json, name=PayslipID" })
  payslipId?: string;

  @Metadata({ data: "json, name=Reimbursements" })
  reimbursements?: number;

  @Metadata({ data: "json, name=Super" })
  super?: number;

  @Metadata({ data: "json, name=Tax" })
  tax?: number;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=Wages" })
  wages?: number;
}
