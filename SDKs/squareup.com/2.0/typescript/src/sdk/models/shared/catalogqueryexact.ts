import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryExact
/** 
 * The query filter to return the search result by exact match of the specified attribute name and value.
**/
export class CatalogQueryExact extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "json, name=attribute_value" })
  attributeValue: string;
}
