import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPathAttribute } from "./tflapipresentationentitiespathattribute";
export declare enum TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum {
    North = "North",
    NorthEast = "NorthEast",
    East = "East",
    SouthEast = "SouthEast",
    South = "South",
    SouthWest = "SouthWest",
    West = "West",
    NorthWest = "NorthWest"
}
export declare enum TflApiPresentationEntitiesInstructionStepTrackTypeEnum {
    CycleSuperHighway = "CycleSuperHighway",
    CanalTowpath = "CanalTowpath",
    QuietRoad = "QuietRoad",
    ProvisionForCyclists = "ProvisionForCyclists",
    BusyRoads = "BusyRoads",
    None = "None",
    PushBike = "PushBike",
    Quietway = "Quietway"
}
export declare class TflApiPresentationEntitiesInstructionStep extends SpeakeasyBase {
    cumulativeDistance?: number;
    cumulativeTravelTime?: number;
    description?: string;
    descriptionHeading?: string;
    distance?: number;
    latitude?: number;
    longitude?: number;
    pathAttribute?: TflApiPresentationEntitiesPathAttribute;
    skyDirection?: number;
    skyDirectionDescription?: TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum;
    streetName?: string;
    trackType?: TflApiPresentationEntitiesInstructionStepTrackTypeEnum;
    turnDirection?: string;
}
