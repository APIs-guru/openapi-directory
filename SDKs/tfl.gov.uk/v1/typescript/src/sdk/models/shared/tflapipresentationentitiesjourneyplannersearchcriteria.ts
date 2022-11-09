import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesJourneyPlannerTimeAdjustments } from "./tflapipresentationentitiesjourneyplannertimeadjustments";

export enum TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum {
    Arriving = "Arriving"
,    Departing = "Departing"
}


export class TflApiPresentationEntitiesJourneyPlannerSearchCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateTime" })
  dateTime?: Date;

  @Metadata({ data: "json, name=dateTimeType" })
  dateTimeType?: TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum;

  @Metadata({ data: "json, name=timeAdjustments" })
  timeAdjustments?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustments;
}
