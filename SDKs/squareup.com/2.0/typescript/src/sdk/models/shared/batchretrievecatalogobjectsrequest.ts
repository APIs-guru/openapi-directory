import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchRetrieveCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_version" })
  catalogVersion?: number;

  @Metadata({ data: "json, name=include_related_objects" })
  includeRelatedObjects?: boolean;

  @Metadata({ data: "json, name=object_ids" })
  objectIds: string[];
}
