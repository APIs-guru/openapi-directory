import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchRetrieveInventoryCountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_object_ids" })
  catalogObjectIds?: string[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=location_ids" })
  locationIds?: string[];

  @Metadata({ data: "json, name=states" })
  states?: string[];

  @Metadata({ data: "json, name=updated_after" })
  updatedAfter?: string;
}
