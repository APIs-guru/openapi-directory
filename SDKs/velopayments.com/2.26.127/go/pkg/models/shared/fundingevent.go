package shared

import (
	"time"
)

type FundingEvent struct {
	EventDateTime    *time.Time            `json:"eventDateTime"`
	EventID          *string               `json:"eventId"`
	FundingEventType *FundingEventTypeEnum `json:"fundingEventType"`
	Principal        *string               `json:"principal"`
}
