import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteShiftResponse
/** 
 * The response to a request to delete a `Shift`. The response might contain a set of 
 * `Error` objects if the request resulted in errors.
**/
export class DeleteShiftResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
