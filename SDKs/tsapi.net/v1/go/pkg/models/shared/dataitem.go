package shared

type DataItemParentIdent struct {
	ParentValueIdent    *string `json:"parentValueIdent,omitempty"`
	ParentVariableIdent *string `json:"parentVariableIdent,omitempty"`
}

type DataItem struct {
	Ident       *string              `json:"ident,omitempty"`
	ParentIdent *DataItemParentIdent `json:"parentIdent,omitempty"`
	Values      []string             `json:"values,omitempty"`
}
