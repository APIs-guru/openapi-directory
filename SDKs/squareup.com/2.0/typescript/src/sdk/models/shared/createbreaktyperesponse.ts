import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BreakType } from "./breaktype";
import { Error } from "./error";


// CreateBreakTypeResponse
/** 
 * The response to the request to create a `BreakType`. The response contains
 * the created `BreakType` object and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class CreateBreakTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_type" })
  breakType?: BreakType;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
