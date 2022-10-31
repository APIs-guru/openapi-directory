package shared

import (
"time")

type AccountsV1AuthTokenPromotion struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AuthToken *string `json:"auth_token,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

