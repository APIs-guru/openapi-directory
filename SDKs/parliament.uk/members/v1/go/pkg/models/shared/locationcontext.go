package shared

type LocationContext struct {
	ID       *int32  `json:"id"`
	Name     *string `json:"name"`
	Type     *int32  `json:"type"`
	TypeName *string `json:"typeName"`
}
