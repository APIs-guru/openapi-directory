import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StorageUsageDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}
