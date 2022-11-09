import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Shift } from "./shift";


// UpdateShiftRequest
/** 
 * A request to update a `Shift` object.
**/
export class UpdateShiftRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=shift" })
  shift: Shift;
}
