import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesRouteSection } from "./tflapipresentationentitiesroutesection";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";
export declare enum TflApiPresentationEntitiesDisruptionCategoryEnum {
    Undefined = "Undefined",
    RealTime = "RealTime",
    PlannedWork = "PlannedWork",
    Information = "Information",
    Event = "Event",
    Crowding = "Crowding",
    StatusAlert = "StatusAlert"
}
/**
 * Represents a disruption to a route within the transport network.
**/
export declare class TflApiPresentationEntitiesDisruption extends SpeakeasyBase {
    additionalInfo?: string;
    affectedRoutes?: TflApiPresentationEntitiesRouteSection[];
    affectedStops?: TflApiPresentationEntitiesStopPoint[];
    category?: TflApiPresentationEntitiesDisruptionCategoryEnum;
    categoryDescription?: string;
    closureText?: string;
    created?: Date;
    description?: string;
    lastUpdate?: Date;
    summary?: string;
    type?: string;
}
