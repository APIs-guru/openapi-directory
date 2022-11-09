import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CashDrawerShiftSummary } from "./cashdrawershiftsummary";


export class ListCashDrawerShiftsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=items", elemType: shared.CashDrawerShiftSummary })
  items?: CashDrawerShiftSummary[];
}
