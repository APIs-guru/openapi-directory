import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogCategory
/** 
 * A category to which a `CatalogItem` instance belongs.
**/
export class CatalogCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
