import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CatalogIdMapping } from "./catalogidmapping";
import { CatalogObject } from "./catalogobject";


export class BatchUpsertCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=id_mappings", elemType: shared.CatalogIdMapping })
  idMappings?: CatalogIdMapping[];

  @Metadata({ data: "json, name=objects", elemType: shared.CatalogObject })
  objects?: CatalogObject[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
