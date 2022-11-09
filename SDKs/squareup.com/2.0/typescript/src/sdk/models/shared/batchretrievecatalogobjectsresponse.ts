import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CatalogObject } from "./catalogobject";
import { CatalogObject } from "./catalogobject";


export class BatchRetrieveCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=objects", elemType: shared.CatalogObject })
  objects?: CatalogObject[];

  @Metadata({ data: "json, name=related_objects", elemType: shared.CatalogObject })
  relatedObjects?: CatalogObject[];
}
