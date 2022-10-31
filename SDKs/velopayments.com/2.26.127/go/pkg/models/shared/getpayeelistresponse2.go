package shared

import (
"time")

type GetPayeeListResponse2 struct {
    Company *GetPayeeListResponseCompany2 `json:"company,omitempty"`
    Country *string `json:"country,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    DisabledComment *string `json:"disabledComment,omitempty"`
    DisabledUpdatedTimestamp *time.Time `json:"disabledUpdatedTimestamp,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    Individual *GetPayeeListResponseIndividual2 `json:"individual,omitempty"`
    Language *string `json:"language,omitempty"`
    OnboardedStatus *OnboardedStatusEnum `json:"onboardedStatus,omitempty"`
    PayeeID *string `json:"payeeId,omitempty"`
    PayeeType *PayeeTypeEnum `json:"payeeType,omitempty"`
    PayorRefs []PayeePayorRef `json:"payorRefs,omitempty"`
    WatchlistOverrideComment *string `json:"watchlistOverrideComment,omitempty"`
    WatchlistStatus *WatchlistStatus2Enum `json:"watchlistStatus,omitempty"`
    WatchlistStatusUpdatedTimestamp *string `json:"watchlistStatusUpdatedTimestamp,omitempty"`
    
}

