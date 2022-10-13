package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum string

const (
	TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnumArriving  TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum = "Arriving"
	TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnumDeparting TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum = "Departing"
)

type TflAPIPresentationEntitiesJourneyPlannerSearchCriteria struct {
	DateTime        *time.Time                                                              `json:"dateTime"`
	DateTimeType    *TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum `json:"dateTimeType"`
	TimeAdjustments *TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments                `json:"timeAdjustments"`
}
