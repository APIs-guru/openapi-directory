package shared

import (
	"time"
)

type PayeeDetailResponse2 struct {
	AcceptTermsAndConditionsTimestamp   *time.Time            `json:"acceptTermsAndConditionsTimestamp,omitempty"`
	Address                             *PayeeAddress2        `json:"address,omitempty"`
	CellphoneNumber                     *string               `json:"cellphoneNumber,omitempty"`
	Challenge                           *Challenge2           `json:"challenge,omitempty"`
	Company                             *Company2             `json:"company,omitempty"`
	Country                             *string               `json:"country,omitempty"`
	Created                             *time.Time            `json:"created,omitempty"`
	Disabled                            *bool                 `json:"disabled,omitempty"`
	DisabledComment                     *string               `json:"disabledComment,omitempty"`
	DisabledUpdatedTimestamp            *time.Time            `json:"disabledUpdatedTimestamp,omitempty"`
	DisplayName                         *string               `json:"displayName,omitempty"`
	Email                               *string               `json:"email,omitempty"`
	EnhancedKycCompleted                *bool                 `json:"enhancedKycCompleted,omitempty"`
	GracePeriodEndDate                  *time.Time            `json:"gracePeriodEndDate,omitempty"`
	Individual                          *Individual2          `json:"individual,omitempty"`
	KycCompletedTimestamp               *string               `json:"kycCompletedTimestamp,omitempty"`
	Language                            *string               `json:"language,omitempty"`
	MarketingOptInDecision              *bool                 `json:"marketingOptInDecision,omitempty"`
	MarketingOptInTimestamp             *string               `json:"marketingOptInTimestamp,omitempty"`
	OnboardedStatus                     *OnboardedStatusEnum  `json:"onboardedStatus,omitempty"`
	PausePayment                        *bool                 `json:"pausePayment,omitempty"`
	PausePaymentTimestamp               *string               `json:"pausePaymentTimestamp,omitempty"`
	PayeeID                             *string               `json:"payeeId,omitempty"`
	PayeeType                           *PayeeTypeEnum        `json:"payeeType,omitempty"`
	PayorRefs                           []PayeePayorRef       `json:"payorRefs,omitempty"`
	WatchlistOverrideComment            *string               `json:"watchlistOverrideComment,omitempty"`
	WatchlistOverrideExpiresAtTimestamp *time.Time            `json:"watchlistOverrideExpiresAtTimestamp,omitempty"`
	WatchlistStatus                     *WatchlistStatus2Enum `json:"watchlistStatus,omitempty"`
	WatchlistStatusUpdatedTimestamp     *string               `json:"watchlistStatusUpdatedTimestamp,omitempty"`
}
