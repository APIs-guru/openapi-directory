import { SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { Image } from "./image";
import { Source } from "./source";
export declare enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Attraction
**/
export declare class Attraction extends SpeakeasyBase {
    active?: boolean;
    additionalInfos?: Map<string, string>;
    classifications?: Classification[];
    descriptions?: Map<string, string>;
    discoverable?: boolean;
    images?: Image[];
    names?: Map<string, string>;
    references?: Map<string, string>;
    relationships?: Map<string, any>[];
    source?: Source;
    test?: boolean;
    type: AttractionTypeEnum;
    url?: string;
    version?: number;
}
