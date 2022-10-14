package shared

type ProfileSpecifier struct {
	Oid      *string `json:"oid,omitempty"`
	Provider *string `json:"provider,omitempty"`
	Tid      *string `json:"tid,omitempty"`
}
