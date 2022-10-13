package shared

type AliasModel struct {
	CreatedAt    *int64             `json:"createdAt"`
	Destinations []DestinationModel `json:"destinations"`
	DomainName   *string            `json:"domainName"`
	Metatags     []MetaTagModel     `json:"metatags"`
	Name         string             `json:"name"`
	Snippets     []SnippetModel     `json:"snippets"`
	UpdatedAt    *int64             `json:"updatedAt"`
}
