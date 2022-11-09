import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShiftFilter } from "./shiftfilter";
import { ShiftSort } from "./shiftsort";


// ShiftQuery
/** 
 * The parameters of a `Shift` search query, which includes filter and sort options.
**/
export class ShiftQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: ShiftFilter;

  @Metadata({ data: "json, name=sort" })
  sort?: ShiftSort;
}
