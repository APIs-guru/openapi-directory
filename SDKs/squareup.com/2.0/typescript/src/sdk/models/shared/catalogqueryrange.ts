import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryRange
/** 
 * The query filter to return the search result whose named attribute values fall between the specified range.
**/
export class CatalogQueryRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute_max_value" })
  attributeMaxValue?: number;

  @Metadata({ data: "json, name=attribute_min_value" })
  attributeMinValue?: number;

  @Metadata({ data: "json, name=attribute_name" })
  attributeName: string;
}
