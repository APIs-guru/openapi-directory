package shared

import (
	"time"
)

type GovernmentOppositionPostHolder struct {
	EndDate            *time.Time  `json:"endDate"`
	IsPaid             *bool       `json:"isPaid"`
	LayingMinisterName *string     `json:"layingMinisterName"`
	Member             *MemberItem `json:"member"`
	StartDate          *time.Time  `json:"startDate"`
}
