package shared

import (
	"time"
)

type SubscriptionInfo struct {
	BranchID          *string    `json:"branchId"`
	Country           *string    `json:"country"`
	Currency          *string    `json:"currency"`
	ExternalAccountID *string    `json:"externalAccountId"`
	ID                *string    `json:"id"`
	Name              *string    `json:"name"`
	NextBilling       *time.Time `json:"nextBilling"`
	OwnerID           *string    `json:"ownerId"`
	PlanCode          *string    `json:"planCode"`
	PlanState         *int32     `json:"planState"`
	ReferralEnabled   *bool      `json:"referralEnabled"`
	Status            *int32     `json:"status"`
}
