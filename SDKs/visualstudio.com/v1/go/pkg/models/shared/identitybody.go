package shared

type IdentityBody struct {
	DisplayName *string `json:"displayName"`
	ID          *string `json:"id"`
	UserName    *string `json:"userName"`
}
