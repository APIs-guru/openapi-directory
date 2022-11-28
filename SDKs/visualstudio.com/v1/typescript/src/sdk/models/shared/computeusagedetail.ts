import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ComputeUsageDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: number;
}
