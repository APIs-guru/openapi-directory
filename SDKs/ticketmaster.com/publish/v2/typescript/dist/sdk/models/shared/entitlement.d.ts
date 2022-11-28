import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
export declare enum EntitlementRelatedEntityTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
export declare enum EntitlementSourceEnum {
    Ticketmaster = "ticketmaster"
}
/**
 * This class defines an entitlement data on the Publish API
**/
export declare class Entitlement extends SpeakeasyBase {
    data: Map<string, any>;
    relatedEntityId?: string;
    relatedEntitySource?: Source;
    relatedEntityType: EntitlementRelatedEntityTypeEnum;
    source: EntitlementSourceEnum;
    versionNumber?: number;
}
