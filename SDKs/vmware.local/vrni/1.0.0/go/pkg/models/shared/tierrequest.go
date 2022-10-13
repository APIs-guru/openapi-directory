package shared

type TierRequest struct {
	GroupMembershipCriteria []GroupMembershipCriteria `json:"group_membership_criteria"`
	Name                    *string                   `json:"name"`
}
