import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3Outlet } from "./v3outlet";
import { V3Status } from "./v3status";


export class V3OutletResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=outlets", elemType: shared.V3Outlet })
  outlets?: V3Outlet[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
