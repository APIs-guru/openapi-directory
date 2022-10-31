package shared

type SegmentFilter struct {
	ServiceVariationID string       `json:"service_variation_id"`
	TeamMemberIDFilter *FilterValue `json:"team_member_id_filter,omitempty"`
}
