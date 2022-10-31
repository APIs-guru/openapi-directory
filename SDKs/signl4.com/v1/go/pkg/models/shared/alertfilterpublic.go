package shared

import (
"time")

type AlertFilterPublic struct {
    AlertIds []string `json:"alertIds,omitempty"`
    AlertsAfterID *string `json:"alertsAfterId,omitempty"`
    CategoryIds []string `json:"categoryIds,omitempty"`
    ContinuationToken *PagedResultsPublicContinuationToken `json:"continuationToken,omitempty"`
    MaxCreationDate *time.Time `json:"maxCreationDate,omitempty"`
    MinCreationDate *time.Time `json:"minCreationDate,omitempty"`
    ModifiedSince *time.Time `json:"modifiedSince,omitempty"`
    ShowPersonalHiddenCategories *bool `json:"showPersonalHiddenCategories,omitempty"`
    StatusCodes *int32 `json:"statusCodes,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    TextToSearch *string `json:"textToSearch,omitempty"`
    
}

