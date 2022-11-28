import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceUsageDetail } from "./resourceusagedetail";
import { Sku } from "./sku";



export class EnvironmentUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endState" })
  endState?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUsage" })
  resourceUsage?: ResourceUsageDetail;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: Sku;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: Map<string, number>;
}
