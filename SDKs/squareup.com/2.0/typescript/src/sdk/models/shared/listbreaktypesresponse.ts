import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BreakType } from "./breaktype";
import { Error } from "./error";


// ListBreakTypesResponse
/** 
 * The response to a request for a set of `BreakType` objects. The response contains
 * the requested `BreakType` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class ListBreakTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=break_types", elemType: shared.BreakType })
  breakTypes?: BreakType[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
