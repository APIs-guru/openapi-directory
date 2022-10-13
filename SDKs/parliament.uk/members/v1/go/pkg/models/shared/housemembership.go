package shared

import (
	"time"
)

type HouseMembership struct {
	House                    *int32                 `json:"house"`
	MembershipEndDate        *time.Time             `json:"membershipEndDate"`
	MembershipEndReason      *string                `json:"membershipEndReason"`
	MembershipEndReasonID    *int32                 `json:"membershipEndReasonId"`
	MembershipEndReasonNotes *string                `json:"membershipEndReasonNotes"`
	MembershipFrom           *string                `json:"membershipFrom"`
	MembershipFromID         *int32                 `json:"membershipFromId"`
	MembershipStartDate      *time.Time             `json:"membershipStartDate"`
	MembershipStatus         *HouseMembershipStatus `json:"membershipStatus"`
}
