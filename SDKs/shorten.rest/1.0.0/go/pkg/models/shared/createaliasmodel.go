package shared



type CreateAliasModel struct {
    Destinations []DestinationModel `json:"destinations,omitempty"`
    Metatags []MetaTagModel `json:"metatags,omitempty"`
    Snippets []SnippetModel `json:"snippets,omitempty"`
    
}

