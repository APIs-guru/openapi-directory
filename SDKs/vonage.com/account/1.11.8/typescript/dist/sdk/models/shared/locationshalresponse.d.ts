import { SpeakeasyBase } from "../../../internal/utils";
import { LocationsEmbeddedObject } from "./locationsembeddedobject";
import { Links } from "./links";
export declare class LocationsHalResponse extends SpeakeasyBase {
    embedded?: LocationsEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}
