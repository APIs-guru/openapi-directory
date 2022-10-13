package shared

type UserExtension struct {
	Dids            []Did   `json:"dids"`
	ExtensionNumber *string `json:"extension_number"`
}
