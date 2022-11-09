import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogIdMapping
/** 
 * A mapping between a temporary client-supplied ID and a permanent server-generated ID.
 * 
 * When calling [UpsertCatalogObject](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/upsert-catalog-object) or
 * [BatchUpsertCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/batch-upsert-catalog-objects) to
 * create a [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) instance, you can supply
 * a temporary ID for the to-be-created object, especially when the object is to be referenced
 * elsewhere in the same request body. This temporary ID can be any string unique within
 * the call, but must be prefixed by "#".
 * 
 * After the request is submitted and the object created, a permanent server-generated ID is assigned
 * to the new object. The permanent ID is unique across the Square catalog.
**/
export class CatalogIdMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_object_id" })
  clientObjectId?: string;

  @Metadata({ data: "json, name=object_id" })
  objectId?: string;
}
