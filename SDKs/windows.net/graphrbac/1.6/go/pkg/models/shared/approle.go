package shared

type AppRole struct {
	AllowedMemberTypes []string `json:"allowedMemberTypes"`
	Description        *string  `json:"description"`
	DisplayName        *string  `json:"displayName"`
	ID                 *string  `json:"id"`
	IsEnabled          *bool    `json:"isEnabled"`
	Value              *string  `json:"value"`
}
