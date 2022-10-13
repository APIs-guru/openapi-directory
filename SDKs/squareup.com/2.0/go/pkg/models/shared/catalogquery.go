package shared

type CatalogQuery struct {
	ExactQuery                             *CatalogQueryExact                             `json:"exact_query"`
	ItemVariationsForItemOptionValuesQuery *CatalogQueryItemVariationsForItemOptionValues `json:"item_variations_for_item_option_values_query"`
	ItemsForItemOptionsQuery               *CatalogQueryItemsForItemOptions               `json:"items_for_item_options_query"`
	ItemsForModifierListQuery              *CatalogQueryItemsForModifierList              `json:"items_for_modifier_list_query"`
	ItemsForTaxQuery                       *CatalogQueryItemsForTax                       `json:"items_for_tax_query"`
	PrefixQuery                            *CatalogQueryPrefix                            `json:"prefix_query"`
	RangeQuery                             *CatalogQueryRange                             `json:"range_query"`
	SetQuery                               *CatalogQuerySet                               `json:"set_query"`
	SortedAttributeQuery                   *CatalogQuerySortedAttribute                   `json:"sorted_attribute_query"`
	TextQuery                              *CatalogQueryText                              `json:"text_query"`
}
