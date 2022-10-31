package shared

import (
	"time"
)

type PrepaidTransactionInfo struct {
	AutoTopUpID    *string    `json:"autoTopUpId,omitempty"`
	Created        *time.Time `json:"created,omitempty"`
	CreatedBy      *string    `json:"createdBy,omitempty"`
	Credits        *int32     `json:"credits,omitempty"`
	Currency       *string    `json:"currency,omitempty"`
	Modified       *time.Time `json:"modified,omitempty"`
	PackageCode    *string    `json:"packageCode,omitempty"`
	Status         *string    `json:"status,omitempty"`
	StatusCode     *int32     `json:"statusCode,omitempty"`
	SubscriptionID *string    `json:"subscriptionId,omitempty"`
	TransactionID  *string    `json:"transactionId,omitempty"`
}
