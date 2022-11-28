import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";



export class V3RunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: V3Run;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
