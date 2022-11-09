import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Shift } from "./shift";


// UpdateShiftResponse
/** 
 * The response to a request to update a `Shift`. The response contains
 * the updated `Shift` object and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class UpdateShiftResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=shift" })
  shift?: Shift;
}
