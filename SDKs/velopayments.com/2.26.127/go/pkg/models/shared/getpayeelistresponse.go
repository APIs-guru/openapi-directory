package shared

import (
	"time"
)

type GetPayeeListResponse struct {
	Company                         *GetPayeeListResponseCompany    `json:"company,omitempty"`
	Country                         *string                         `json:"country,omitempty"`
	Created                         *time.Time                      `json:"created,omitempty"`
	Disabled                        *bool                           `json:"disabled,omitempty"`
	DisabledComment                 *string                         `json:"disabledComment,omitempty"`
	DisabledUpdatedTimestamp        *time.Time                      `json:"disabledUpdatedTimestamp,omitempty"`
	DisplayName                     *string                         `json:"displayName,omitempty"`
	Email                           *string                         `json:"email,omitempty"`
	Individual                      *GetPayeeListResponseIndividual `json:"individual,omitempty"`
	Language                        *string                         `json:"language,omitempty"`
	OnboardedStatus                 *OnboardedStatus2Enum           `json:"onboardedStatus,omitempty"`
	PayeeID                         *string                         `json:"payeeId,omitempty"`
	PayeeType                       *PayeeTypeEnum                  `json:"payeeType,omitempty"`
	PayorRefs                       []PayeePayorRefV3               `json:"payorRefs,omitempty"`
	WatchlistOverrideComment        *string                         `json:"watchlistOverrideComment,omitempty"`
	WatchlistStatus                 *WatchlistStatusEnum            `json:"watchlistStatus,omitempty"`
	WatchlistStatusUpdatedTimestamp *string                         `json:"watchlistStatusUpdatedTimestamp,omitempty"`
}
