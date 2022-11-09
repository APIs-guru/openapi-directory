import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerObstacle extends SpeakeasyBase {
  @Metadata({ data: "json, name=incline" })
  incline?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=stopId" })
  stopId?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
