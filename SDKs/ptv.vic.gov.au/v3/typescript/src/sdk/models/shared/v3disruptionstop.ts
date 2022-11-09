import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3DisruptionStop extends SpeakeasyBase {
  @Metadata({ data: "json, name=stop_id" })
  stopId?: number;

  @Metadata({ data: "json, name=stop_name" })
  stopName?: string;
}
