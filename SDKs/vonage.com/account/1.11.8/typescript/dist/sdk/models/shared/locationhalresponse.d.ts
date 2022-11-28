import { SpeakeasyBase } from "../../../internal/utils";
import { LocationEmbeddedObject } from "./locationembeddedobject";
import { Links } from "./links";
export declare class LocationHalResponse extends SpeakeasyBase {
    embedded?: LocationEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}
