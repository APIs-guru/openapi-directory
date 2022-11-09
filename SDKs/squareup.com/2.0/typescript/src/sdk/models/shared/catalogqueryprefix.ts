import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryPrefix
/** 
 * The query filter to return the search result whose named attribute values are prefixed by the specified attribute value.
**/
export class CatalogQueryPrefix extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "json, name=attribute_prefix" })
  attributePrefix: string;
}
