package shared

import (
	"time"
)

type SubscriptionInfo struct {
	BranchID          *string    `json:"branchId,omitempty"`
	Country           *string    `json:"country,omitempty"`
	Currency          *string    `json:"currency,omitempty"`
	ExternalAccountID *string    `json:"externalAccountId,omitempty"`
	ID                *string    `json:"id,omitempty"`
	Name              *string    `json:"name,omitempty"`
	NextBilling       *time.Time `json:"nextBilling,omitempty"`
	OwnerID           *string    `json:"ownerId,omitempty"`
	PlanCode          *string    `json:"planCode,omitempty"`
	PlanState         *int32     `json:"planState,omitempty"`
	ReferralEnabled   *bool      `json:"referralEnabled,omitempty"`
	Status            *int32     `json:"status,omitempty"`
}
