package shared

import (
"time")

type FundingEvent struct {
    EventDateTime *time.Time `json:"eventDateTime,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    FundingEventType *FundingEventTypeEnum `json:"fundingEventType,omitempty"`
    Principal *string `json:"principal,omitempty"`
    
}

