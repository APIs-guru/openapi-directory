import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";


export class V3RunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=runs", elemType: shared.V3Run })
  runs?: V3Run[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
