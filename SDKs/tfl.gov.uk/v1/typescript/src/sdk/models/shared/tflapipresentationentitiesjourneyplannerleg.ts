import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPoint } from "./tflapipresentationentitiespoint";
import { TflApiPresentationEntitiesDisruption } from "./tflapipresentationentitiesdisruption";
import { TflApiPresentationEntitiesInstruction } from "./tflapipresentationentitiesinstruction";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";
import { TflApiPresentationEntitiesJourneyPlannerObstacle } from "./tflapipresentationentitiesjourneyplannerobstacle";
import { TflApiPresentationEntitiesJourneyPlannerPath } from "./tflapipresentationentitiesjourneyplannerpath";
import { TflApiPresentationEntitiesJourneyPlannerPlannedWork } from "./tflapipresentationentitiesjourneyplannerplannedwork";
import { TflApiPresentationEntitiesJourneyPlannerRouteOption } from "./tflapipresentationentitiesjourneyplannerrouteoption";



export class TflApiPresentationEntitiesJourneyPlannerLeg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrivalPoint" })
  arrivalPoint?: TflApiPresentationEntitiesPoint;

  @SpeakeasyMetadata({ data: "json, name=arrivalTime" })
  arrivalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=departurePoint" })
  departurePoint?: TflApiPresentationEntitiesPoint;

  @SpeakeasyMetadata({ data: "json, name=departureTime" })
  departureTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=disruptions", elemType: TflApiPresentationEntitiesDisruption })
  disruptions?: TflApiPresentationEntitiesDisruption[];

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=hasFixedLocations" })
  hasFixedLocations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instruction" })
  instruction?: TflApiPresentationEntitiesInstruction;

  @SpeakeasyMetadata({ data: "json, name=isDisrupted" })
  isDisrupted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: TflApiPresentationEntitiesIdentifier;

  @SpeakeasyMetadata({ data: "json, name=obstacles", elemType: TflApiPresentationEntitiesJourneyPlannerObstacle })
  obstacles?: TflApiPresentationEntitiesJourneyPlannerObstacle[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: TflApiPresentationEntitiesJourneyPlannerPath;

  @SpeakeasyMetadata({ data: "json, name=plannedWorks", elemType: TflApiPresentationEntitiesJourneyPlannerPlannedWork })
  plannedWorks?: TflApiPresentationEntitiesJourneyPlannerPlannedWork[];

  @SpeakeasyMetadata({ data: "json, name=routeOptions", elemType: TflApiPresentationEntitiesJourneyPlannerRouteOption })
  routeOptions?: TflApiPresentationEntitiesJourneyPlannerRouteOption[];

  @SpeakeasyMetadata({ data: "json, name=speed" })
  speed?: string;
}
