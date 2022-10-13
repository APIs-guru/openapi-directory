package shared

import (
	"time"
)

type PrepaidTransactionInfo struct {
	AutoTopUpID    *string    `json:"autoTopUpId"`
	Created        *time.Time `json:"created"`
	CreatedBy      *string    `json:"createdBy"`
	Credits        *int32     `json:"credits"`
	Currency       *string    `json:"currency"`
	Modified       *time.Time `json:"modified"`
	PackageCode    *string    `json:"packageCode"`
	Status         *string    `json:"status"`
	StatusCode     *int32     `json:"statusCode"`
	SubscriptionID *string    `json:"subscriptionId"`
	TransactionID  *string    `json:"transactionId"`
}
