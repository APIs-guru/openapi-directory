package shared

type DataItemParentIdent struct {
	ParentValueIdent    *string `json:"parentValueIdent"`
	ParentVariableIdent *string `json:"parentVariableIdent"`
}

type DataItem struct {
	Ident       *string              `json:"ident"`
	ParentIdent *DataItemParentIdent `json:"parentIdent"`
	Values      []string             `json:"values"`
}
