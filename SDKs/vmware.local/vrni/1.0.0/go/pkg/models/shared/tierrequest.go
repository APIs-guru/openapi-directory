package shared

type TierRequest struct {
	GroupMembershipCriteria []GroupMembershipCriteria `json:"group_membership_criteria,omitempty"`
	Name                    *string                   `json:"name,omitempty"`
}
