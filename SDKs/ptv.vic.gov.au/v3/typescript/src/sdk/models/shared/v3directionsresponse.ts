import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V3DirectionWithDescription } from "./v3directionwithdescription";
import { V3Status } from "./v3status";


export class V3DirectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=directions", elemType: shared.V3DirectionWithDescription })
  directions?: V3DirectionWithDescription[];

  @Metadata({ data: "json, name=status" })
  status?: V3Status;
}
