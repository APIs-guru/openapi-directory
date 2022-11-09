import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQuerySortedAttribute
/** 
 * The query expression to specify the key to sort search results.
**/
export class CatalogQuerySortedAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "json, name=initial_attribute_value" })
  initialAttributeValue?: string;

  @Metadata({ data: "json, name=sort_order" })
  sortOrder?: string;
}
