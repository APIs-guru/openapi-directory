import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
**/
export declare class Alert extends SpeakeasyBase {
    alertId?: string;
    lastSent?: Date;
    search?: string;
    sendCount?: number;
    types?: string[];
    userId?: string;
}
