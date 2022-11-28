import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReimbursementLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpenseAccount" })
  expenseAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=ReimbursementTypeID" })
  reimbursementTypeId?: string;
}
