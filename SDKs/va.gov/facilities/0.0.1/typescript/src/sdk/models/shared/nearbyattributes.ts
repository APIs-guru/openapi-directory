import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NearbyAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=max_time" })
  maxTime: number;

  @Metadata({ data: "json, name=min_time" })
  minTime: number;
}
