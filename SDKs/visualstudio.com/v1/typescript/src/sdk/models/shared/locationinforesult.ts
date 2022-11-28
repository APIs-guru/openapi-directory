import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SkuInfoResult } from "./skuinforesult";



export class LocationInfoResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAutoSuspendDelayMinutes" })
  defaultAutoSuspendDelayMinutes?: number[];

  @SpeakeasyMetadata({ data: "json, name=skus", elemType: SkuInfoResult })
  skus?: SkuInfoResult[];
}
