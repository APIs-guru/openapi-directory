package shared

type SearchMembershipCriteria struct {
	EntityType *AllEntityTypeEnum `json:"entity_type"`
	Filter     *string            `json:"filter"`
}
