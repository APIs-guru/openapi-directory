package shared

type GetAliasesModel struct {
	Aliases []string `json:"aliases"`
	LastID  *string  `json:"lastId"`
}
