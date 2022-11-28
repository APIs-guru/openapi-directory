import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesJourneyPlannerTimeAdjustments } from "./tflapipresentationentitiesjourneyplannertimeadjustments";
export declare enum TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum {
    Arriving = "Arriving",
    Departing = "Departing"
}
export declare class TflApiPresentationEntitiesJourneyPlannerSearchCriteria extends SpeakeasyBase {
    dateTime?: Date;
    dateTimeType?: TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum;
    timeAdjustments?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustments;
}
