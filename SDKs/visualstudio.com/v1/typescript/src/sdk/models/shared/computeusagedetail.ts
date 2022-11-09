import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ComputeUsageDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: number;
}
