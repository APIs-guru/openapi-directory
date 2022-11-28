import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkexportsV1Export extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
