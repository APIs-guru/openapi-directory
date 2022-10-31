package shared

import (
"time")

type AccountsV1SecondaryAuthToken struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    SecondaryAuthToken *string `json:"secondary_auth_token,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

