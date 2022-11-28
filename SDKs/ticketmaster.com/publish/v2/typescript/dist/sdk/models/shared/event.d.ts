import { SpeakeasyBase } from "../../../internal/utils";
import { Attraction } from "./attraction";
import { Classification } from "./classification";
import { EventDates } from "./eventdates";
import { Image } from "./image";
import { Location } from "./location";
import { Place } from "./place";
import { PriceRange } from "./pricerange";
import { Promoter } from "./promoter";
import { PublicVisibility } from "./publicvisibility";
import { EventSalesDates } from "./eventsalesdates";
import { Source } from "./source";
import { Venue } from "./venue";
export declare enum EventTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Event
**/
export declare class Event extends SpeakeasyBase {
    active?: boolean;
    additionalInfos?: Map<string, string>;
    attractions?: Attraction[];
    classifications?: Classification[];
    dates?: EventDates;
    descriptions?: Map<string, string>;
    discoverable?: boolean;
    distance?: number;
    images?: Image[];
    infos?: Map<string, string>;
    location?: Location;
    names?: Map<string, string>;
    place?: Place;
    pleaseNotes?: Map<string, string>;
    priceRanges?: PriceRange[];
    promoter?: Promoter;
    publicVisibility?: PublicVisibility;
    references?: Map<string, string>;
    relationships?: Map<string, any>[];
    sales?: EventSalesDates;
    source?: Source;
    test?: boolean;
    type: EventTypeEnum;
    units?: string;
    url?: string;
    venue?: Venue;
    version?: number;
}
