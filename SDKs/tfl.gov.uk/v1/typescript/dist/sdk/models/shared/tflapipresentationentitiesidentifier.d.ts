import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";
export declare enum TflApiPresentationEntitiesIdentifierRouteTypeEnum {
    Unknown = "Unknown",
    All = "All",
    CycleSuperhighways = "Cycle Superhighways",
    Quietways = "Quietways",
    Cycleways = "Cycleways",
    MiniHollands = "Mini-Hollands",
    CentralLondonGrid = "Central London Grid",
    StreetspaceRoute = "Streetspace Route"
}
export declare enum TflApiPresentationEntitiesIdentifierStatusEnum {
    Unknown = "Unknown",
    All = "All",
    Open = "Open",
    InProgress = "In Progress",
    Planned = "Planned",
    PlannedSubjectToFeasibilityAndConsultation = "Planned - Subject to feasibility and consultation.",
    NotOpen = "Not Open"
}
export declare class TflApiPresentationEntitiesIdentifier extends SpeakeasyBase {
    crowding?: TflApiPresentationEntitiesCrowding;
    fullName?: string;
    id?: string;
    name?: string;
    routeType?: TflApiPresentationEntitiesIdentifierRouteTypeEnum;
    status?: TflApiPresentationEntitiesIdentifierStatusEnum;
    type?: string;
    uri?: string;
}
