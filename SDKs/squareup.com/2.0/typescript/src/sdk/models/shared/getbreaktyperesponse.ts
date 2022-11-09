import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BreakType } from "./breaktype";
import { Error } from "./error";


// GetBreakTypeResponse
/** 
 * The response to a request to get a `BreakType`. The response contains
 * the requested `BreakType` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class GetBreakTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_type" })
  breakType?: BreakType;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
