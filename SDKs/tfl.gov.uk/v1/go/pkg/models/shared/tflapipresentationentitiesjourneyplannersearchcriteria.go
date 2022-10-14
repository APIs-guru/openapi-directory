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
	DateTime        *time.Time                                                              `json:"dateTime,omitempty"`
	DateTimeType    *TflAPIPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeTypeEnum `json:"dateTimeType,omitempty"`
	TimeAdjustments *TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments                `json:"timeAdjustments,omitempty"`
}
