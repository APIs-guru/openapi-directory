import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3DisruptionStop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stop_id" })
  stopId?: number;

  @SpeakeasyMetadata({ data: "json, name=stop_name" })
  stopName?: string;
}
