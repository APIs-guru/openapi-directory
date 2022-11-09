import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShiftQuery } from "./shiftquery";


// SearchShiftsRequest
/** 
 * A request for a filtered and sorted set of `Shift` objects.
**/
export class SearchShiftsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: ShiftQuery;
}
