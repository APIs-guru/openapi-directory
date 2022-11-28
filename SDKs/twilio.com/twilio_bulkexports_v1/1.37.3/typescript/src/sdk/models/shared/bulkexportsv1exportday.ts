import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkexportsV1ExportDay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create_date" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
