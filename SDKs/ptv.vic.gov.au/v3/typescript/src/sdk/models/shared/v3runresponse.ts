import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";


export class V3RunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=run" })
  run?: V3Run;

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
