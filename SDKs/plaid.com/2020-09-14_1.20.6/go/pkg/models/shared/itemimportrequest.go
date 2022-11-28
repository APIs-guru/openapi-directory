package shared

// ItemImportRequest
// ItemImportRequest defines the request schema for `/item/import`
type ItemImportRequest struct {
	ClientID *string                   `json:"client_id,omitempty"`
	Options  *ItemImportRequestOptions `json:"options,omitempty"`
	Products []ProductsEnum            `json:"products"`
	Secret   *string                   `json:"secret,omitempty"`
	UserAuth ItemImportRequestUserAuth `json:"user_auth"`
}
