import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceUsageDetail } from "./resourceusagedetail";
import { Sku } from "./sku";


export class EnvironmentUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=endState" })
  endState?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resourceUsage" })
  resourceUsage?: ResourceUsageDetail;

  @Metadata({ data: "json, name=sku" })
  sku?: Sku;

  @Metadata({ data: "json, name=usage" })
  usage?: Map<string, number>;
}
