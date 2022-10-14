package shared

type SearchCatalogItemsResponse struct {
	Cursor              *string         `json:"cursor,omitempty"`
	Errors              []Error         `json:"errors,omitempty"`
	Items               []CatalogObject `json:"items,omitempty"`
	MatchedVariationIds []string        `json:"matched_variation_ids,omitempty"`
}
