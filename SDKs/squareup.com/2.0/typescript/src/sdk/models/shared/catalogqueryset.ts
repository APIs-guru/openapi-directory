import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQuerySet
/** 
 * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
 * the `attribute_values`.
**/
export class CatalogQuerySet extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "json, name=attribute_values" })
  attributeValues: string[];
}
