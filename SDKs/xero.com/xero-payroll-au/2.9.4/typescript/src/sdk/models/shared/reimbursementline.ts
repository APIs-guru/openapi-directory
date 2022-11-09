import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReimbursementLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount?: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ExpenseAccount" })
  expenseAccount?: string;

  @Metadata({ data: "json, name=ReimbursementTypeID" })
  reimbursementTypeId?: string;
}
