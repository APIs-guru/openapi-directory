package shared

type UserExtension struct {
	Dids            []Did   `json:"dids,omitempty"`
	ExtensionNumber *string `json:"extension_number,omitempty"`
}
