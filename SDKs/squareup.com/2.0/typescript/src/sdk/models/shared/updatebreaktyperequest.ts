import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BreakType } from "./breaktype";


// UpdateBreakTypeRequest
/** 
 * A request to update a `BreakType`.
**/
export class UpdateBreakTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_type" })
  breakType: BreakType;
}
