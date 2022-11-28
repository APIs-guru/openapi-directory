import { SpeakeasyBase } from "../../../internal/utils";
import { V3DirectionWithDescription } from "./v3directionwithdescription";
import { V3Status } from "./v3status";
export declare class V3DirectionsResponse extends SpeakeasyBase {
    directions?: V3DirectionWithDescription[];
    status?: V3Status;
}
