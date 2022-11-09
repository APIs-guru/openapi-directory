import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectedApplication } from "./connectedapplication";
/**
 * Describes the connected application for a particular end user.
**/
export declare class ItemApplicationListResponse extends SpeakeasyBase {
    applications: ConnectedApplication[];
    requestId?: string;
}
