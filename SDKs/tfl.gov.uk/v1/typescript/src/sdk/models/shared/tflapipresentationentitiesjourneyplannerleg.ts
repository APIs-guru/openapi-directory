import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesPoint } from "./tflapipresentationentitiespoint";
import { TflApiPresentationEntitiesPoint } from "./tflapipresentationentitiespoint";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesInstruction } from "./tflapipresentationentitiesinstruction";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
import { TflApiPresentationEntitiesJourneyPlannerObstacle } from "./tflapipresentationentitiesjourneyplannerobstacle";
import { TflApiPresentationEntitiesJourneyPlannerPath } from "./tflapipresentationentitiesjourneyplannerpath";
import { TflApiPresentationEntitiesJourneyPlannerPlannedWork } from "./tflapipresentationentitiesjourneyplannerplannedwork";
import { TflApiPresentationEntitiesJourneyPlannerRouteOption } from "./tflapipresentationentitiesjourneyplannerrouteoption";


export class TflApiPresentationEntitiesJourneyPlannerLeg extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrivalPoint" })
  arrivalPoint?: TflApiPresentationEntitiesPoint;

  @Metadata({ data: "json, name=arrivalTime" })
  arrivalTime?: Date;

  @Metadata({ data: "json, name=departurePoint" })
  departurePoint?: TflApiPresentationEntitiesPoint;

  @Metadata({ data: "json, name=departureTime" })
  departureTime?: Date;

  @Metadata({ data: "json, name=disruptions", elemType: shared.TflApiPresentationEntitiesDisruption })
  disruptions?: TflApiPresentationEntitiesDisruption[];

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=hasFixedLocations" })
  hasFixedLocations?: boolean;

  @Metadata({ data: "json, name=instruction" })
  instruction?: TflApiPresentationEntitiesInstruction;

  @Metadata({ data: "json, name=isDisrupted" })
  isDisrupted?: boolean;

  @Metadata({ data: "json, name=mode" })
  mode?: TflApiPresentationEntitiesIdentifier;

  @Metadata({ data: "json, name=obstacles", elemType: shared.TflApiPresentationEntitiesJourneyPlannerObstacle })
  obstacles?: TflApiPresentationEntitiesJourneyPlannerObstacle[];

  @Metadata({ data: "json, name=path" })
  path?: TflApiPresentationEntitiesJourneyPlannerPath;

  @Metadata({ data: "json, name=plannedWorks", elemType: shared.TflApiPresentationEntitiesJourneyPlannerPlannedWork })
  plannedWorks?: TflApiPresentationEntitiesJourneyPlannerPlannedWork[];

  @Metadata({ data: "json, name=routeOptions", elemType: shared.TflApiPresentationEntitiesJourneyPlannerRouteOption })
  routeOptions?: TflApiPresentationEntitiesJourneyPlannerRouteOption[];

  @Metadata({ data: "json, name=speed" })
  speed?: string;
}
