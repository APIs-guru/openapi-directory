import { SpeakeasyBase } from "../../../internal/utils";
import { V3Status } from "./v3status";
/**
 * An error response
**/
export declare class V3ErrorResponse extends SpeakeasyBase {
    message?: string;
    status?: V3Status;
}
