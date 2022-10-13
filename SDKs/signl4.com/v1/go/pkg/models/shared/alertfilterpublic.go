package shared

import (
	"time"
)

type AlertFilterPublic struct {
	AlertIds                     []string                             `json:"alertIds"`
	AlertsAfterID                *string                              `json:"alertsAfterId"`
	CategoryIds                  []string                             `json:"categoryIds"`
	ContinuationToken            *PagedResultsPublicContinuationToken `json:"continuationToken"`
	MaxCreationDate              *time.Time                           `json:"maxCreationDate"`
	MinCreationDate              *time.Time                           `json:"minCreationDate"`
	ModifiedSince                *time.Time                           `json:"modifiedSince"`
	ShowPersonalHiddenCategories *bool                                `json:"showPersonalHiddenCategories"`
	StatusCodes                  *int32                               `json:"statusCodes"`
	TeamID                       *string                              `json:"teamId"`
	TextToSearch                 *string                              `json:"textToSearch"`
}
