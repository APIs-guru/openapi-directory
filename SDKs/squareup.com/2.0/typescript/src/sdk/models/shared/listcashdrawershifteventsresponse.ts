import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CashDrawerShiftEvent } from "./cashdrawershiftevent";


export class ListCashDrawerShiftEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=events", elemType: shared.CashDrawerShiftEvent })
  events?: CashDrawerShiftEvent[];
}
