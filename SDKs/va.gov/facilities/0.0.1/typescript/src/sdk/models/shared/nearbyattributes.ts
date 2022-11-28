import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NearbyAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max_time" })
  maxTime: number;

  @SpeakeasyMetadata({ data: "json, name=min_time" })
  minTime: number;
}
