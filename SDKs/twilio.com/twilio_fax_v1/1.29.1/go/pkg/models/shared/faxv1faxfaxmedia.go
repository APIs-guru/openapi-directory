package shared

import (
"time")

type FaxV1FaxFaxMedia struct {
    AccountSid *string `json:"account_sid,omitempty"`
    ContentType *string `json:"content_type,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FaxSid *string `json:"fax_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

