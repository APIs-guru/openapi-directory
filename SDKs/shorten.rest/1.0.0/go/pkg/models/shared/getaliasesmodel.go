package shared

type GetAliasesModel struct {
	Aliases []string `json:"aliases,omitempty"`
	LastID  *string  `json:"lastId,omitempty"`
}
