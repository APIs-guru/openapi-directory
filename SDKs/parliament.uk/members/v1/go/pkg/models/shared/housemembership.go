package shared

import (
"time")

type HouseMembership struct {
    House *int32 `json:"house,omitempty"`
    MembershipEndDate *time.Time `json:"membershipEndDate,omitempty"`
    MembershipEndReason *string `json:"membershipEndReason,omitempty"`
    MembershipEndReasonID *int32 `json:"membershipEndReasonId,omitempty"`
    MembershipEndReasonNotes *string `json:"membershipEndReasonNotes,omitempty"`
    MembershipFrom *string `json:"membershipFrom,omitempty"`
    MembershipFromID *int32 `json:"membershipFromId,omitempty"`
    MembershipStartDate *time.Time `json:"membershipStartDate,omitempty"`
    MembershipStatus *HouseMembershipStatus `json:"membershipStatus,omitempty"`
    
}

