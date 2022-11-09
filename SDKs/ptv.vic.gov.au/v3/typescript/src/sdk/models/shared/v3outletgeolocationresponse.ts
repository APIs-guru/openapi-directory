import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3OutletGeolocation } from "./v3outletgeolocation";
import { V3Status } from "./v3status";


export class V3OutletGeolocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=outlets", elemType: shared.V3OutletGeolocation })
  outlets?: V3OutletGeolocation[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
