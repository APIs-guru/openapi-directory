import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPoint } from "./tflapipresentationentitiespoint";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesInstruction } from "./tflapipresentationentitiesinstruction";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
import { TflApiPresentationEntitiesJourneyPlannerObstacle } from "./tflapipresentationentitiesjourneyplannerobstacle";
import { TflApiPresentationEntitiesJourneyPlannerPath } from "./tflapipresentationentitiesjourneyplannerpath";
import { TflApiPresentationEntitiesJourneyPlannerPlannedWork } from "./tflapipresentationentitiesjourneyplannerplannedwork";
import { TflApiPresentationEntitiesJourneyPlannerRouteOption } from "./tflapipresentationentitiesjourneyplannerrouteoption";
export declare class TflApiPresentationEntitiesJourneyPlannerLeg extends SpeakeasyBase {
    arrivalPoint?: TflApiPresentationEntitiesPoint;
    arrivalTime?: Date;
    departurePoint?: TflApiPresentationEntitiesPoint;
    departureTime?: Date;
    disruptions?: TflApiPresentationEntitiesDisruption[];
    distance?: number;
    duration?: number;
    hasFixedLocations?: boolean;
    instruction?: TflApiPresentationEntitiesInstruction;
    isDisrupted?: boolean;
    mode?: TflApiPresentationEntitiesIdentifier;
    obstacles?: TflApiPresentationEntitiesJourneyPlannerObstacle[];
    path?: TflApiPresentationEntitiesJourneyPlannerPath;
    plannedWorks?: TflApiPresentationEntitiesJourneyPlannerPlannedWork[];
    routeOptions?: TflApiPresentationEntitiesJourneyPlannerRouteOption[];
    speed?: string;
}
