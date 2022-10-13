package shared

import (
	"time"
)

type GetPayeeListResponse struct {
	Company                         *GetPayeeListResponseCompany    `json:"company"`
	Country                         *string                         `json:"country"`
	Created                         *time.Time                      `json:"created"`
	Disabled                        *bool                           `json:"disabled"`
	DisabledComment                 *string                         `json:"disabledComment"`
	DisabledUpdatedTimestamp        *time.Time                      `json:"disabledUpdatedTimestamp"`
	DisplayName                     *string                         `json:"displayName"`
	Email                           *string                         `json:"email"`
	Individual                      *GetPayeeListResponseIndividual `json:"individual"`
	Language                        *string                         `json:"language"`
	OnboardedStatus                 *OnboardedStatus2Enum           `json:"onboardedStatus"`
	PayeeID                         *string                         `json:"payeeId"`
	PayeeType                       *PayeeTypeEnum                  `json:"payeeType"`
	PayorRefs                       []PayeePayorRefV3               `json:"payorRefs"`
	WatchlistOverrideComment        *string                         `json:"watchlistOverrideComment"`
	WatchlistStatus                 *WatchlistStatusEnum            `json:"watchlistStatus"`
	WatchlistStatusUpdatedTimestamp *string                         `json:"watchlistStatusUpdatedTimestamp"`
}
