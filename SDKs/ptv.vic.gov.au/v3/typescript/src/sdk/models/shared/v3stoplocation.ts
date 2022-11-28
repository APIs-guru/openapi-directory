import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3StopGps } from "./v3stopgps";



export class V3StopLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gps" })
  gps?: V3StopGps;
}
