import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Area } from "./area";
import { City } from "./city";
import { Country } from "./country";
import { Location } from "./location";
import { State } from "./state";
/**
 * Place
**/
export declare class Place extends SpeakeasyBase {
    address?: Address;
    area?: Area;
    city?: City;
    country?: Country;
    location?: Location;
    names?: Map<string, string>;
    postalCode?: string;
    state?: State;
}
