import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Shift } from "./shift";


// CreateShiftResponse
/** 
 * The response to a request to create a `Shift`. The response contains
 * the created `Shift` object and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class CreateShiftResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=shift" })
  shift?: Shift;
}
