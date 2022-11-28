import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
export declare enum ExtensionDataRelatedEntityTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * This class defines an extenstion data on the Publish API
**/
export declare class ExtensionData extends SpeakeasyBase {
    data: Map<string, any>;
    relatedEntityId?: string;
    relatedEntitySource?: Source;
    relatedEntityType: ExtensionDataRelatedEntityTypeEnum;
    source: string;
    type: string;
    versionNumber?: number;
}
