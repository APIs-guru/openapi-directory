import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EndUserRouteEmbeddedObject } from "./enduserrouteembeddedobject";
import { Links } from "./links";
export declare class EndUserRouteHalResponse extends SpeakeasyBase {
    embedded?: EndUserRouteEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}
