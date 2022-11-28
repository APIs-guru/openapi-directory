import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionV2 } from "./regionv2";



export class SupportedCountryV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencies" })
  currencies?: string[];

  @SpeakeasyMetadata({ data: "json, name=isoCountryCode" })
  isoCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: RegionV2 })
  regions?: RegionV2[];
}
