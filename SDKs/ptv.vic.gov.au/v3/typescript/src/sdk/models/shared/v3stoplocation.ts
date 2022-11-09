import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V3StopGps } from "./v3stopgps";


export class V3StopLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=gps" })
  gps?: V3StopGps;
}
