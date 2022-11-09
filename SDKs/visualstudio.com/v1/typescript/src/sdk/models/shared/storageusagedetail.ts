import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StorageUsageDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: number;
}
