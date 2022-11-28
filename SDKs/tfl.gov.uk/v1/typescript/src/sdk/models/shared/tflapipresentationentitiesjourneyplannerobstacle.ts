import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesJourneyPlannerObstacle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incline" })
  incline?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=stopId" })
  stopId?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
