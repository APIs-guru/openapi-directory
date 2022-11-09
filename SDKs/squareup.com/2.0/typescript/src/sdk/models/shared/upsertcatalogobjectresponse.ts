import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogObject } from "./catalogobject";
import { Error } from "./error";
import { CatalogIdMapping } from "./catalogidmapping";


export class UpsertCatalogObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_object" })
  catalogObject?: CatalogObject;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=id_mappings", elemType: shared.CatalogIdMapping })
  idMappings?: CatalogIdMapping[];
}
