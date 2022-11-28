import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V3DirectionWithDescription } from "./v3directionwithdescription";
import { V3Status } from "./v3status";



export class V3DirectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directions", elemType: V3DirectionWithDescription })
  directions?: V3DirectionWithDescription[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: V3Status;
}
