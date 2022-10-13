package shared

import (
	"time"
)

type PayeeDetailResponse struct {
	AcceptTermsAndConditionsTimestamp   *time.Time            `json:"acceptTermsAndConditionsTimestamp"`
	Address                             *PayeeAddress         `json:"address"`
	CellphoneNumber                     *string               `json:"cellphoneNumber"`
	Challenge                           *Challenge            `json:"challenge"`
	Company                             *Company              `json:"company"`
	Country                             *string               `json:"country"`
	Created                             *time.Time            `json:"created"`
	Disabled                            *bool                 `json:"disabled"`
	DisabledComment                     *string               `json:"disabledComment"`
	DisabledUpdatedTimestamp            *time.Time            `json:"disabledUpdatedTimestamp"`
	DisplayName                         *string               `json:"displayName"`
	Email                               *string               `json:"email"`
	EnhancedKycCompleted                *bool                 `json:"enhancedKycCompleted"`
	GracePeriodEndDate                  *time.Time            `json:"gracePeriodEndDate"`
	Individual                          *Individual           `json:"individual"`
	KycCompletedTimestamp               *string               `json:"kycCompletedTimestamp"`
	Language                            *string               `json:"language"`
	MarketingOptInDecision              *bool                 `json:"marketingOptInDecision"`
	MarketingOptInTimestamp             *string               `json:"marketingOptInTimestamp"`
	OnboardedStatus                     *OnboardedStatus2Enum `json:"onboardedStatus"`
	PausePayment                        *bool                 `json:"pausePayment"`
	PausePaymentTimestamp               *string               `json:"pausePaymentTimestamp"`
	PayeeID                             *string               `json:"payeeId"`
	PayeeType                           *PayeeTypeEnum        `json:"payeeType"`
	PayorRefs                           []PayeePayorRefV3     `json:"payorRefs"`
	WatchlistOverrideComment            *string               `json:"watchlistOverrideComment"`
	WatchlistOverrideExpiresAtTimestamp *time.Time            `json:"watchlistOverrideExpiresAtTimestamp"`
	WatchlistStatus                     *WatchlistStatusEnum  `json:"watchlistStatus"`
	WatchlistStatusUpdatedTimestamp     *string               `json:"watchlistStatusUpdatedTimestamp"`
}
