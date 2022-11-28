import { SpeakeasyBase } from "../../../internal/utils";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
export declare class V3RunsResponse extends SpeakeasyBase {
    runs?: V3Run[];
    status?: V3Status;
}
