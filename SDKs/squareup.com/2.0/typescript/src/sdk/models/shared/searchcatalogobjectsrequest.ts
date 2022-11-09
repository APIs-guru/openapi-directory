import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CatalogQuery } from "./catalogquery";


export class SearchCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=begin_time" })
  beginTime?: string;

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=include_deleted_objects" })
  includeDeletedObjects?: boolean;

  @Metadata({ data: "json, name=include_related_objects" })
  includeRelatedObjects?: boolean;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=object_types" })
  objectTypes?: string[];

  @Metadata({ data: "json, name=query" })
  query?: CatalogQuery;
}
