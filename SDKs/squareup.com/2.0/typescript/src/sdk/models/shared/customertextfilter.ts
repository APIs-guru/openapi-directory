import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerTextFilter
/** 
 * A filter to select customers based on exact or fuzzy matching of
 * customer attributes against a specified query. Depending on the customer attributes, 
 * the filter can be case-sensitive. This filter can be exact or fuzzy, but it cannot be both.
**/
export class CustomerTextFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=fuzzy" })
  fuzzy?: string;
}
