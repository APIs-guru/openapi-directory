import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesRouteSection } from "./tflapipresentationentitiesroutesection";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";


export enum TflApiPresentationEntitiesDisruptionCategoryEnum {
    Undefined = "Undefined",
    RealTime = "RealTime",
    PlannedWork = "PlannedWork",
    Information = "Information",
    Event = "Event",
    Crowding = "Crowding",
    StatusAlert = "StatusAlert"
}


// TflApiPresentationEntitiesDisruption
/** 
 * Represents a disruption to a route within the transport network.
**/
export class TflApiPresentationEntitiesDisruption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInfo" })
  additionalInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=affectedRoutes", elemType: TflApiPresentationEntitiesRouteSection })
  affectedRoutes?: TflApiPresentationEntitiesRouteSection[];

  @SpeakeasyMetadata({ data: "json, name=affectedStops", elemType: TflApiPresentationEntitiesStopPoint })
  affectedStops?: TflApiPresentationEntitiesStopPoint[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: TflApiPresentationEntitiesDisruptionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=categoryDescription" })
  categoryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=closureText" })
  closureText?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
