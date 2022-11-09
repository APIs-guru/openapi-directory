import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CatalogObject } from "./catalogobject";
import { CatalogObject } from "./catalogobject";


export class SearchCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=latest_time" })
  latestTime?: string;

  @Metadata({ data: "json, name=objects", elemType: shared.CatalogObject })
  objects?: CatalogObject[];

  @Metadata({ data: "json, name=related_objects", elemType: shared.CatalogObject })
  relatedObjects?: CatalogObject[];
}
