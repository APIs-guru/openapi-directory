import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3DisruptionMode extends SpeakeasyBase {
  @Metadata({ data: "json, name=disruption_mode" })
  disruptionMode?: number;

  @Metadata({ data: "json, name=disruption_mode_name" })
  disruptionModeName?: string;
}
