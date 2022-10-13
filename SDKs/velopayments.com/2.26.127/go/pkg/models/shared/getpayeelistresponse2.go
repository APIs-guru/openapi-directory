package shared

import (
	"time"
)

type GetPayeeListResponse2 struct {
	Company                         *GetPayeeListResponseCompany2    `json:"company"`
	Country                         *string                          `json:"country"`
	Created                         *time.Time                       `json:"created"`
	Disabled                        *bool                            `json:"disabled"`
	DisabledComment                 *string                          `json:"disabledComment"`
	DisabledUpdatedTimestamp        *time.Time                       `json:"disabledUpdatedTimestamp"`
	DisplayName                     *string                          `json:"displayName"`
	Email                           *string                          `json:"email"`
	Individual                      *GetPayeeListResponseIndividual2 `json:"individual"`
	Language                        *string                          `json:"language"`
	OnboardedStatus                 *OnboardedStatusEnum             `json:"onboardedStatus"`
	PayeeID                         *string                          `json:"payeeId"`
	PayeeType                       *PayeeTypeEnum                   `json:"payeeType"`
	PayorRefs                       []PayeePayorRef                  `json:"payorRefs"`
	WatchlistOverrideComment        *string                          `json:"watchlistOverrideComment"`
	WatchlistStatus                 *WatchlistStatus2Enum            `json:"watchlistStatus"`
	WatchlistStatusUpdatedTimestamp *string                          `json:"watchlistStatusUpdatedTimestamp"`
}
