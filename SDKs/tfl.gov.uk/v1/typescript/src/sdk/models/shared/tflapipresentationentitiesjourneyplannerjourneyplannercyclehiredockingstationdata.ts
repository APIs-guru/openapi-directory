import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationId" })
  destinationId?: string;

  @Metadata({ data: "json, name=destinationNumberOfBikes" })
  destinationNumberOfBikes?: number;

  @Metadata({ data: "json, name=destinationNumberOfEmptySlots" })
  destinationNumberOfEmptySlots?: number;

  @Metadata({ data: "json, name=originId" })
  originId?: string;

  @Metadata({ data: "json, name=originNumberOfBikes" })
  originNumberOfBikes?: number;

  @Metadata({ data: "json, name=originNumberOfEmptySlots" })
  originNumberOfEmptySlots?: number;
}
