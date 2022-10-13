package shared

import (
	"time"
)

type EventFilter struct {
	ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken"`
	EventStatusCode   *int32                               `json:"eventStatusCode"`
	MaxCreationDate   *time.Time                           `json:"maxCreationDate"`
	MinCreationDate   *time.Time                           `json:"minCreationDate"`
	ModifiedSince     *time.Time                           `json:"modifiedSince"`
	TeamID            *string                              `json:"teamId"`
	TextToSearch      *string                              `json:"textToSearch"`
}
