import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CashDrawerShift } from "./cashdrawershift";
import { Error } from "./error";


export class RetrieveCashDrawerShiftResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cash_drawer_shift" })
  cashDrawerShift?: CashDrawerShift;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
