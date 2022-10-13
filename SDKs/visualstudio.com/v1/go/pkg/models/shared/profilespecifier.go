package shared

type ProfileSpecifier struct {
	Oid      *string `json:"oid"`
	Provider *string `json:"provider"`
	Tid      *string `json:"tid"`
}
