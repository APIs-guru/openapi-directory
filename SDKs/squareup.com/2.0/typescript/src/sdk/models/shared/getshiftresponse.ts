import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Shift } from "./shift";


// GetShiftResponse
/** 
 * A response to a request to get a `Shift`. The response contains
 * the requested `Shift` object and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class GetShiftResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=shift" })
  shift?: Shift;
}
