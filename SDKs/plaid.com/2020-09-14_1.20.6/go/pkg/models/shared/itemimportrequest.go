package shared

type ItemImportRequest struct {
	ClientID *string                   `json:"client_id"`
	Options  *ItemImportRequestOptions `json:"options"`
	Products []ProductsEnum            `json:"products"`
	Secret   *string                   `json:"secret"`
	UserAuth ItemImportRequestUserAuth `json:"user_auth"`
}
