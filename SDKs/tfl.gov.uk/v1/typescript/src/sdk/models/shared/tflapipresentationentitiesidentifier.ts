import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";


export enum TflApiPresentationEntitiesIdentifierRouteTypeEnum {
    Unknown = "Unknown",
    All = "All",
    CycleSuperhighways = "Cycle Superhighways",
    Quietways = "Quietways",
    Cycleways = "Cycleways",
    MiniHollands = "Mini-Hollands",
    CentralLondonGrid = "Central London Grid",
    StreetspaceRoute = "Streetspace Route"
}

export enum TflApiPresentationEntitiesIdentifierStatusEnum {
    Unknown = "Unknown",
    All = "All",
    Open = "Open",
    InProgress = "In Progress",
    Planned = "Planned",
    PlannedSubjectToFeasibilityAndConsultation = "Planned - Subject to feasibility and consultation.",
    NotOpen = "Not Open"
}


export class TflApiPresentationEntitiesIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crowding" })
  crowding?: TflApiPresentationEntitiesCrowding;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=routeType" })
  routeType?: TflApiPresentationEntitiesIdentifierRouteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TflApiPresentationEntitiesIdentifierStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
