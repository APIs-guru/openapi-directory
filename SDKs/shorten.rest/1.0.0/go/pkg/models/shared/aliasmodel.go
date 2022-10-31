package shared

type AliasModel struct {
	CreatedAt    *int64             `json:"createdAt,omitempty"`
	Destinations []DestinationModel `json:"destinations,omitempty"`
	DomainName   *string            `json:"domainName,omitempty"`
	Metatags     []MetaTagModel     `json:"metatags,omitempty"`
	Name         string             `json:"name"`
	Snippets     []SnippetModel     `json:"snippets,omitempty"`
	UpdatedAt    *int64             `json:"updatedAt,omitempty"`
}
