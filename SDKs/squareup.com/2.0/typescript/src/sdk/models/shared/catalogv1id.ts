import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogV1Id
/** 
 * A Square API V1 identifier of an item, including the object ID and its associated location ID.
**/
export class CatalogV1Id extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_v1_id" })
  catalogV1Id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;
}
