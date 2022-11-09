import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogImage
/** 
 * An image file to use in Square catalogs. It can be associated with catalog
 * items, item variations, and categories.
**/
export class CatalogImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
