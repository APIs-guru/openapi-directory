import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogObjectReference
/** 
 * A reference to a Catalog object at a specific version. In general this is
 * used as an entry point into a graph of catalog objects, where the objects exist
 * at a specific version.
**/
export class CatalogObjectReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=object_id" })
  objectId?: string;
}
