import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDeleteCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=object_ids" })
  objectIds?: string[];
}
