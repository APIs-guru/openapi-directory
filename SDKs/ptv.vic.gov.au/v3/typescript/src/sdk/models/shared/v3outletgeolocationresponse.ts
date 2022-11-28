import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3OutletGeolocation } from "./v3outletgeolocation";
import { V3Status } from "./v3status";



export class V3OutletGeolocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outlets", elemType: V3OutletGeolocation })
  outlets?: V3OutletGeolocation[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
