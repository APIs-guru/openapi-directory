package shared

type FlexV1UserRoles struct {
	Roles []string `json:"roles,omitempty"`
	URL   *string  `json:"url,omitempty"`
}
