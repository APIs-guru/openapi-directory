import { SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionMode } from "./v3disruptionmode";
import { V3Status } from "./v3status";
export declare class V3DisruptionModesResponse extends SpeakeasyBase {
    disruptionModes?: V3DisruptionMode[];
    status?: V3Status;
}
