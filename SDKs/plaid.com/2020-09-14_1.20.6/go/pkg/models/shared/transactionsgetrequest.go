package shared

import (
	"time"
)

// TransactionsGetRequest
// TransactionsGetRequest defines the request schema for `/transactions/get`
type TransactionsGetRequest struct {
	AccessToken string                         `json:"access_token"`
	ClientID    *string                        `json:"client_id,omitempty"`
	EndDate     time.Time                      `json:"end_date"`
	Options     *TransactionsGetRequestOptions `json:"options,omitempty"`
	Secret      *string                        `json:"secret,omitempty"`
	StartDate   time.Time                      `json:"start_date"`
}
