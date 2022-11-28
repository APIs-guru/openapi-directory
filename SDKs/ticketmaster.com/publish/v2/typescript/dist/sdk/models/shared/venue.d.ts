import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { VenueBoxOfficeInfo } from "./venueboxofficeinfo";
import { City } from "./city";
import { Country } from "./country";
import { Dma } from "./dma";
import { VenueGeneralInfo } from "./venuegeneralinfo";
import { Image } from "./image";
import { Location } from "./location";
import { Market } from "./market";
import { Social } from "./social";
import { Source } from "./source";
import { State } from "./state";
export declare enum VenueTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Venue
**/
export declare class Venue extends SpeakeasyBase {
    accessibleSeatingDetails?: Map<string, string>;
    active?: boolean;
    additionalInfos?: Map<string, string>;
    address?: Address;
    boxOfficeInfo?: VenueBoxOfficeInfo;
    city?: City;
    country?: Country;
    currency?: string;
    descriptions?: Map<string, string>;
    discoverable?: boolean;
    distance?: number;
    dma?: Dma[];
    generalInfo?: VenueGeneralInfo;
    images?: Image[];
    location?: Location;
    markets?: Market[];
    names?: Map<string, string>;
    parkingDetails?: Map<string, string>;
    postalCode?: string;
    references?: Map<string, string>;
    relationships?: Map<string, any>[];
    social?: Social;
    source?: Source;
    state?: State;
    test?: boolean;
    timezone?: string;
    type: VenueTypeEnum;
    units?: string;
    url?: string;
    version?: number;
}
