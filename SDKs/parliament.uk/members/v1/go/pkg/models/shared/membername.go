package shared

import (
"time")

type MemberName struct {
    EndDate *time.Time `json:"endDate,omitempty"`
    NameAddressAs *string `json:"nameAddressAs,omitempty"`
    NameDisplayAs *string `json:"nameDisplayAs,omitempty"`
    NameFullTitle *string `json:"nameFullTitle,omitempty"`
    NameListAs *string `json:"nameListAs,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

