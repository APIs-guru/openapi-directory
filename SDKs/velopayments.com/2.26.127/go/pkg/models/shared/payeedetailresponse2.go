package shared

import (
	"time"
)

type PayeeDetailResponse2 struct {
	AcceptTermsAndConditionsTimestamp   *time.Time            `json:"acceptTermsAndConditionsTimestamp"`
	Address                             *PayeeAddress2        `json:"address"`
	CellphoneNumber                     *string               `json:"cellphoneNumber"`
	Challenge                           *Challenge2           `json:"challenge"`
	Company                             *Company2             `json:"company"`
	Country                             *string               `json:"country"`
	Created                             *time.Time            `json:"created"`
	Disabled                            *bool                 `json:"disabled"`
	DisabledComment                     *string               `json:"disabledComment"`
	DisabledUpdatedTimestamp            *time.Time            `json:"disabledUpdatedTimestamp"`
	DisplayName                         *string               `json:"displayName"`
	Email                               *string               `json:"email"`
	EnhancedKycCompleted                *bool                 `json:"enhancedKycCompleted"`
	GracePeriodEndDate                  *time.Time            `json:"gracePeriodEndDate"`
	Individual                          *Individual2          `json:"individual"`
	KycCompletedTimestamp               *string               `json:"kycCompletedTimestamp"`
	Language                            *string               `json:"language"`
	MarketingOptInDecision              *bool                 `json:"marketingOptInDecision"`
	MarketingOptInTimestamp             *string               `json:"marketingOptInTimestamp"`
	OnboardedStatus                     *OnboardedStatusEnum  `json:"onboardedStatus"`
	PausePayment                        *bool                 `json:"pausePayment"`
	PausePaymentTimestamp               *string               `json:"pausePaymentTimestamp"`
	PayeeID                             *string               `json:"payeeId"`
	PayeeType                           *PayeeTypeEnum        `json:"payeeType"`
	PayorRefs                           []PayeePayorRef       `json:"payorRefs"`
	WatchlistOverrideComment            *string               `json:"watchlistOverrideComment"`
	WatchlistOverrideExpiresAtTimestamp *time.Time            `json:"watchlistOverrideExpiresAtTimestamp"`
	WatchlistStatus                     *WatchlistStatus2Enum `json:"watchlistStatus"`
	WatchlistStatusUpdatedTimestamp     *string               `json:"watchlistStatusUpdatedTimestamp"`
}
