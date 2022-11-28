import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPathAttribute } from "./tflapipresentationentitiespathattribute";


export enum TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum {
    North = "North",
    NorthEast = "NorthEast",
    East = "East",
    SouthEast = "SouthEast",
    South = "South",
    SouthWest = "SouthWest",
    West = "West",
    NorthWest = "NorthWest"
}

export enum TflApiPresentationEntitiesInstructionStepTrackTypeEnum {
    CycleSuperHighway = "CycleSuperHighway",
    CanalTowpath = "CanalTowpath",
    QuietRoad = "QuietRoad",
    ProvisionForCyclists = "ProvisionForCyclists",
    BusyRoads = "BusyRoads",
    None = "None",
    PushBike = "PushBike",
    Quietway = "Quietway"
}


export class TflApiPresentationEntitiesInstructionStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cumulativeDistance" })
  cumulativeDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulativeTravelTime" })
  cumulativeTravelTime?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionHeading" })
  descriptionHeading?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=pathAttribute" })
  pathAttribute?: TflApiPresentationEntitiesPathAttribute;

  @SpeakeasyMetadata({ data: "json, name=skyDirection" })
  skyDirection?: number;

  @SpeakeasyMetadata({ data: "json, name=skyDirectionDescription" })
  skyDirectionDescription?: TflApiPresentationEntitiesInstructionStepSkyDirectionDescriptionEnum;

  @SpeakeasyMetadata({ data: "json, name=streetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "json, name=trackType" })
  trackType?: TflApiPresentationEntitiesInstructionStepTrackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=turnDirection" })
  turnDirection?: string;
}
