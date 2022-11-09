import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BulkexportsV1Export extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
