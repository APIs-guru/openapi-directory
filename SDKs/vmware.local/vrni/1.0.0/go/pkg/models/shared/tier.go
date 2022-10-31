package shared

type Tier struct {
	Application             *Reference                `json:"application,omitempty"`
	EntityID                *string                   `json:"entity_id,omitempty"`
	EntityType              *EntityTypeEnum           `json:"entity_type,omitempty"`
	GroupMembershipCriteria []GroupMembershipCriteria `json:"group_membership_criteria,omitempty"`
	Name                    *string                   `json:"name,omitempty"`
}
