import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteBreakTypeResponse
/** 
 * The response to a request to delete a `BreakType`. The response might contain a set 
 * of `Error` objects if the request resulted in errors.
**/
export class DeleteBreakTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
