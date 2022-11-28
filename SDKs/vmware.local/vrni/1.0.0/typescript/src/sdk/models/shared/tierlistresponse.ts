import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tier } from "./tier";



export class TierListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: Tier })
  results?: Tier[];
}
