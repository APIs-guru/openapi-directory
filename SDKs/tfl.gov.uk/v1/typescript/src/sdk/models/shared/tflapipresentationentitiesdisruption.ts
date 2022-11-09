import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesRouteSection } from "./tflapipresentationentitiesroutesection";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";

export enum TflApiPresentationEntitiesDisruptionCategoryEnum {
    Undefined = "Undefined"
,    RealTime = "RealTime"
,    PlannedWork = "PlannedWork"
,    Information = "Information"
,    Event = "Event"
,    Crowding = "Crowding"
,    StatusAlert = "StatusAlert"
}


// TflApiPresentationEntitiesDisruption
/** 
 * Represents a disruption to a route within the transport network.
**/
export class TflApiPresentationEntitiesDisruption extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInfo" })
  additionalInfo?: string;

  @Metadata({ data: "json, name=affectedRoutes", elemType: shared.TflApiPresentationEntitiesRouteSection })
  affectedRoutes?: TflApiPresentationEntitiesRouteSection[];

  @Metadata({ data: "json, name=affectedStops", elemType: shared.TflApiPresentationEntitiesStopPoint })
  affectedStops?: TflApiPresentationEntitiesStopPoint[];

  @Metadata({ data: "json, name=category" })
  category?: TflApiPresentationEntitiesDisruptionCategoryEnum;

  @Metadata({ data: "json, name=categoryDescription" })
  categoryDescription?: string;

  @Metadata({ data: "json, name=closureText" })
  closureText?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
