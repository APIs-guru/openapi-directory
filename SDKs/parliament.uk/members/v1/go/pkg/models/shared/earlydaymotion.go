package shared

import (
"time")

type EarlyDayMotion struct {
    DateTabled *time.Time `json:"dateTabled,omitempty"`
    ID *int32 `json:"id,omitempty"`
    IsAmendment *bool `json:"isAmendment,omitempty"`
    IsPrayer *bool `json:"isPrayer,omitempty"`
    Number *string `json:"number,omitempty"`
    SponsorsCount *int32 `json:"sponsorsCount,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

