import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationNumberOfBikes" })
  destinationNumberOfBikes?: number;

  @SpeakeasyMetadata({ data: "json, name=destinationNumberOfEmptySlots" })
  destinationNumberOfEmptySlots?: number;

  @SpeakeasyMetadata({ data: "json, name=originId" })
  originId?: string;

  @SpeakeasyMetadata({ data: "json, name=originNumberOfBikes" })
  originNumberOfBikes?: number;

  @SpeakeasyMetadata({ data: "json, name=originNumberOfEmptySlots" })
  originNumberOfEmptySlots?: number;
}
