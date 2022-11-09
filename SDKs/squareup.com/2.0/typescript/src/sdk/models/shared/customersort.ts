import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerSort
/** 
 * Specifies how searched customers profiles are sorted, including the sort key and sort order.
**/
export class CustomerSort extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=order" })
  order?: string;
}
