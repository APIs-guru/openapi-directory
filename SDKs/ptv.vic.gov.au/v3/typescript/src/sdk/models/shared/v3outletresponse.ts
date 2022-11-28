import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3Outlet } from "./v3outlet";
import { V3Status } from "./v3status";



export class V3OutletResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outlets", elemType: V3Outlet })
  outlets?: V3Outlet[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
