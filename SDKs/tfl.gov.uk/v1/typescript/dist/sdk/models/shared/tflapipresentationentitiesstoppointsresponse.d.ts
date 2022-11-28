import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";
/**
 * A paged response containing StopPoints
**/
export declare class TflApiPresentationEntitiesStopPointsResponse extends SpeakeasyBase {
    centrePoint?: number[];
    page?: number;
    pageSize?: number;
    stopPoints?: TflApiPresentationEntitiesStopPoint[];
    total?: number;
}
