import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogObject } from "./catalogobject";


// CatalogObjectBatch
/** 
 * A batch of catalog objects.
**/
export class CatalogObjectBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=objects", elemType: shared.CatalogObject })
  objects: CatalogObject[];
}
