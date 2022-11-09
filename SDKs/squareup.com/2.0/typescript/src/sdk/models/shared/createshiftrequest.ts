import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Shift } from "./shift";


// CreateShiftRequest
/** 
 * Represents a request to create a `Shift`.
**/
export class CreateShiftRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=shift" })
  shift: Shift;
}
