import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SkuInfoResult } from "./skuinforesult";


export class LocationInfoResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAutoSuspendDelayMinutes" })
  defaultAutoSuspendDelayMinutes?: number[];

  @Metadata({ data: "json, name=skus", elemType: shared.SkuInfoResult })
  skus?: SkuInfoResult[];
}
