package shared

import (
"time")

type EventFilter struct {
    ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken,omitempty"`
    EventStatusCode *int32 `json:"eventStatusCode,omitempty"`
    MaxCreationDate *time.Time `json:"maxCreationDate,omitempty"`
    MinCreationDate *time.Time `json:"minCreationDate,omitempty"`
    ModifiedSince *time.Time `json:"modifiedSince,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    TextToSearch *string `json:"textToSearch,omitempty"`
    
}

