import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";



export class V3RunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runs", elemType: V3Run })
  runs?: V3Run[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
