import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerTimeAdjustment } from "./tflapipresentationentitiesjourneyplannertimeadjustment";



export class TflApiPresentationEntitiesJourneyPlannerTimeAdjustments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=earlier" })
  earlier?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;

  @SpeakeasyMetadata({ data: "json, name=earliest" })
  earliest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;

  @SpeakeasyMetadata({ data: "json, name=later" })
  later?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;

  @SpeakeasyMetadata({ data: "json, name=latest" })
  latest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
}
