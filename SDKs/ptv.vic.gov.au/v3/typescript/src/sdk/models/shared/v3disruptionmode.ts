import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3DisruptionMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disruption_mode" })
  disruptionMode?: number;

  @SpeakeasyMetadata({ data: "json, name=disruption_mode_name" })
  disruptionModeName?: string;
}
