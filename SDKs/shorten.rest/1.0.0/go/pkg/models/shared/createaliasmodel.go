package shared

type CreateAliasModel struct {
	Destinations []DestinationModel `json:"destinations"`
	Metatags     []MetaTagModel     `json:"metatags"`
	Snippets     []SnippetModel     `json:"snippets"`
}
