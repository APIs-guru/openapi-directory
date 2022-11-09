import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Shift } from "./shift";


// SearchShiftsResponse
/** 
 * The response to a request for `Shift` objects. The response contains
 * the requested `Shift` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class SearchShiftsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=shifts", elemType: shared.Shift })
  shifts?: Shift[];
}
