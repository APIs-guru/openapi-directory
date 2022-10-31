package shared

import (
"time")

type InvestmentsTransactionsGetRequest struct {
    AccessToken string `json:"access_token"`
    ClientID *string `json:"client_id,omitempty"`
    EndDate time.Time `json:"end_date"`
    Options *InvestmentsTransactionsGetRequestOptions `json:"options,omitempty"`
    Secret *string `json:"secret,omitempty"`
    StartDate time.Time `json:"start_date"`
    
}

