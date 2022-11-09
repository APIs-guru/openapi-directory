import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BulkexportsV1ExportDay extends SpeakeasyBase {
  @Metadata({ data: "json, name=create_date" })
  createDate?: string;

  @Metadata({ data: "json, name=day" })
  day?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
