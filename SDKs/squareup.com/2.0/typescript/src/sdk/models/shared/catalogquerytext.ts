import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryText
/** 
 * The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case.
**/
export class CatalogQueryText extends SpeakeasyBase {
  @Metadata({ data: "json, name=keywords" })
  keywords: string[];
}
