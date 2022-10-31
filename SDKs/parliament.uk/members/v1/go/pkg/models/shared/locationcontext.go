package shared

type LocationContext struct {
	ID       *int32  `json:"id,omitempty"`
	Name     *string `json:"name,omitempty"`
	Type     *int32  `json:"type,omitempty"`
	TypeName *string `json:"typeName,omitempty"`
}
