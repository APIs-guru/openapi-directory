import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerFilter } from "./customerfilter";
import { CustomerSort } from "./customersort";


// CustomerQuery
/** 
 * Represents a query (including filtering criteria, sorting criteria, or both) used to search
 * for customer profiles.
**/
export class CustomerQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: CustomerFilter;

  @Metadata({ data: "json, name=sort" })
  sort?: CustomerSort;
}
