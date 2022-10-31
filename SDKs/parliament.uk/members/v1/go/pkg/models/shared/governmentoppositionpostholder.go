package shared

import (
"time")

type GovernmentOppositionPostHolder struct {
    EndDate *time.Time `json:"endDate,omitempty"`
    IsPaid *bool `json:"isPaid,omitempty"`
    LayingMinisterName *string `json:"layingMinisterName,omitempty"`
    Member *MemberItem `json:"member,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

