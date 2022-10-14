package shared

type CatalogObject struct {
	AbsentAtLocationIds           []string                               `json:"absent_at_location_ids,omitempty"`
	CatalogV1Ids                  []CatalogV1ID                          `json:"catalog_v1_ids,omitempty"`
	CategoryData                  *CatalogCategory                       `json:"category_data,omitempty"`
	CustomAttributeDefinitionData *CatalogCustomAttributeDefinition      `json:"custom_attribute_definition_data,omitempty"`
	CustomAttributeValues         map[string]CatalogCustomAttributeValue `json:"custom_attribute_values,omitempty"`
	DiscountData                  *CatalogDiscount                       `json:"discount_data,omitempty"`
	ID                            string                                 `json:"id"`
	ImageData                     *CatalogImage                          `json:"image_data,omitempty"`
	ImageID                       *string                                `json:"image_id,omitempty"`
	IsDeleted                     *bool                                  `json:"is_deleted,omitempty"`
	ItemData                      *CatalogItem                           `json:"item_data,omitempty"`
	ItemOptionData                *CatalogItemOption                     `json:"item_option_data,omitempty"`
	ItemOptionValueData           *CatalogItemOptionValue                `json:"item_option_value_data,omitempty"`
	ItemVariationData             *CatalogItemVariation                  `json:"item_variation_data,omitempty"`
	MeasurementUnitData           *CatalogMeasurementUnit                `json:"measurement_unit_data,omitempty"`
	ModifierData                  *CatalogModifier                       `json:"modifier_data,omitempty"`
	ModifierListData              *CatalogModifierList                   `json:"modifier_list_data,omitempty"`
	PresentAtAllLocations         *bool                                  `json:"present_at_all_locations,omitempty"`
	PresentAtLocationIds          []string                               `json:"present_at_location_ids,omitempty"`
	PricingRuleData               *CatalogPricingRule                    `json:"pricing_rule_data,omitempty"`
	ProductSetData                *CatalogProductSet                     `json:"product_set_data,omitempty"`
	QuickAmountsSettingsData      *CatalogQuickAmountsSettings           `json:"quick_amounts_settings_data,omitempty"`
	SubscriptionPlanData          *CatalogSubscriptionPlan               `json:"subscription_plan_data,omitempty"`
	TaxData                       *CatalogTax                            `json:"tax_data,omitempty"`
	TimePeriodData                *CatalogTimePeriod                     `json:"time_period_data,omitempty"`
	Type                          string                                 `json:"type"`
	UpdatedAt                     *string                                `json:"updated_at,omitempty"`
	Version                       *int64                                 `json:"version,omitempty"`
}
