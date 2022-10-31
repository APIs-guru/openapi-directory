package shared

type CatalogQuery struct {
	ExactQuery                             *CatalogQueryExact                             `json:"exact_query,omitempty"`
	ItemVariationsForItemOptionValuesQuery *CatalogQueryItemVariationsForItemOptionValues `json:"item_variations_for_item_option_values_query,omitempty"`
	ItemsForItemOptionsQuery               *CatalogQueryItemsForItemOptions               `json:"items_for_item_options_query,omitempty"`
	ItemsForModifierListQuery              *CatalogQueryItemsForModifierList              `json:"items_for_modifier_list_query,omitempty"`
	ItemsForTaxQuery                       *CatalogQueryItemsForTax                       `json:"items_for_tax_query,omitempty"`
	PrefixQuery                            *CatalogQueryPrefix                            `json:"prefix_query,omitempty"`
	RangeQuery                             *CatalogQueryRange                             `json:"range_query,omitempty"`
	SetQuery                               *CatalogQuerySet                               `json:"set_query,omitempty"`
	SortedAttributeQuery                   *CatalogQuerySortedAttribute                   `json:"sorted_attribute_query,omitempty"`
	TextQuery                              *CatalogQueryText                              `json:"text_query,omitempty"`
}
