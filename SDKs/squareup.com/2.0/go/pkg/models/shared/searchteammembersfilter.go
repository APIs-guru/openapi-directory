package shared

type SearchTeamMembersFilter struct {
	LocationIds []string `json:"location_ids"`
	Status      *string  `json:"status"`
}
