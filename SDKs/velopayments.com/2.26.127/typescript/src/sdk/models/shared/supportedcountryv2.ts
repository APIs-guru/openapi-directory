import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionV2 } from "./regionv2";


export class SupportedCountryV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencies" })
  currencies?: string[];

  @Metadata({ data: "json, name=isoCountryCode" })
  isoCountryCode?: string;

  @Metadata({ data: "json, name=regions", elemType: shared.RegionV2 })
  regions?: RegionV2[];
}
