import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerTimeAdjustments } from "./tflapipresentationentitiesjourneyplannertimeadjustments";


export enum TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum {
    Arriving = "Arriving",
    Departing = "Departing"
}


export class TflApiPresentationEntitiesJourneyPlannerSearchCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateTimeType" })
  dateTimeType?: TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeAdjustments" })
  timeAdjustments?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustments;
}
