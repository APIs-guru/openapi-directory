package shared

type Tier struct {
	Application             *Reference                `json:"application"`
	EntityID                *string                   `json:"entity_id"`
	EntityType              *EntityTypeEnum           `json:"entity_type"`
	GroupMembershipCriteria []GroupMembershipCriteria `json:"group_membership_criteria"`
	Name                    *string                   `json:"name"`
}
