import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BreakType } from "./breaktype";


// CreateBreakTypeRequest
/** 
 * A request to create a new `BreakType`.
**/
export class CreateBreakTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_type" })
  breakType: BreakType;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;
}
