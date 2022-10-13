package shared

import (
	"time"
)

type TransactionsGetRequest struct {
	AccessToken string                         `json:"access_token"`
	ClientID    *string                        `json:"client_id"`
	EndDate     time.Time                      `json:"end_date"`
	Options     *TransactionsGetRequestOptions `json:"options"`
	Secret      *string                        `json:"secret"`
	StartDate   time.Time                      `json:"start_date"`
}
