import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesCrowding } from "./tflapipresentationentitiescrowding";

export enum TflApiPresentationEntitiesIdentifierRouteTypeEnum {
    Unknown = "Unknown"
,    All = "All"
,    CycleSuperhighways = "Cycle Superhighways"
,    Quietways = "Quietways"
,    Cycleways = "Cycleways"
,    MiniHollands = "Mini-Hollands"
,    CentralLondonGrid = "Central London Grid"
,    StreetspaceRoute = "Streetspace Route"
}

export enum TflApiPresentationEntitiesIdentifierStatusEnum {
    Unknown = "Unknown"
,    All = "All"
,    Open = "Open"
,    InProgress = "In Progress"
,    Planned = "Planned"
,    PlannedSubjectToFeasibilityAndConsultation = "Planned - Subject to feasibility and consultation."
,    NotOpen = "Not Open"
}


export class TflApiPresentationEntitiesIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=crowding" })
  crowding?: TflApiPresentationEntitiesCrowding;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=routeType" })
  routeType?: TflApiPresentationEntitiesIdentifierRouteTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: TflApiPresentationEntitiesIdentifierStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
