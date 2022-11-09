import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesPathAttribute } from "./tflapipresentationentitiespathattribute";

export enum TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum {
    North = "North"
,    NorthEast = "NorthEast"
,    East = "East"
,    SouthEast = "SouthEast"
,    South = "South"
,    SouthWest = "SouthWest"
,    West = "West"
,    NorthWest = "NorthWest"
}

export enum TflApiPresentationEntitiesInstructionStepTrackTypeEnum {
    CycleSuperHighway = "CycleSuperHighway"
,    CanalTowpath = "CanalTowpath"
,    QuietRoad = "QuietRoad"
,    ProvisionForCyclists = "ProvisionForCyclists"
,    BusyRoads = "BusyRoads"
,    None = "None"
,    PushBike = "PushBike"
,    Quietway = "Quietway"
}


export class TflApiPresentationEntitiesInstructionStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=cumulativeDistance" })
  cumulativeDistance?: number;

  @Metadata({ data: "json, name=cumulativeTravelTime" })
  cumulativeTravelTime?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptionHeading" })
  descriptionHeading?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=pathAttribute" })
  pathAttribute?: TflApiPresentationEntitiesPathAttribute;

  @Metadata({ data: "json, name=skyDirection" })
  skyDirection?: number;

  @Metadata({ data: "json, name=skyDirectionDescription" })
  skyDirectionDescription?: TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum;

  @Metadata({ data: "json, name=streetName" })
  streetName?: string;

  @Metadata({ data: "json, name=trackType" })
  trackType?: TflApiPresentationEntitiesInstructionStepTrackTypeEnum;

  @Metadata({ data: "json, name=turnDirection" })
  turnDirection?: string;
}
