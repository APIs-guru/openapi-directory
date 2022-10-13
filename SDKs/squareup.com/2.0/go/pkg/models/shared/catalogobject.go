package shared

type CatalogObject struct {
	AbsentAtLocationIds           []string                               `json:"absent_at_location_ids"`
	CatalogV1Ids                  []CatalogV1ID                          `json:"catalog_v1_ids"`
	CategoryData                  *CatalogCategory                       `json:"category_data"`
	CustomAttributeDefinitionData *CatalogCustomAttributeDefinition      `json:"custom_attribute_definition_data"`
	CustomAttributeValues         map[string]CatalogCustomAttributeValue `json:"custom_attribute_values"`
	DiscountData                  *CatalogDiscount                       `json:"discount_data"`
	ID                            string                                 `json:"id"`
	ImageData                     *CatalogImage                          `json:"image_data"`
	ImageID                       *string                                `json:"image_id"`
	IsDeleted                     *bool                                  `json:"is_deleted"`
	ItemData                      *CatalogItem                           `json:"item_data"`
	ItemOptionData                *CatalogItemOption                     `json:"item_option_data"`
	ItemOptionValueData           *CatalogItemOptionValue                `json:"item_option_value_data"`
	ItemVariationData             *CatalogItemVariation                  `json:"item_variation_data"`
	MeasurementUnitData           *CatalogMeasurementUnit                `json:"measurement_unit_data"`
	ModifierData                  *CatalogModifier                       `json:"modifier_data"`
	ModifierListData              *CatalogModifierList                   `json:"modifier_list_data"`
	PresentAtAllLocations         *bool                                  `json:"present_at_all_locations"`
	PresentAtLocationIds          []string                               `json:"present_at_location_ids"`
	PricingRuleData               *CatalogPricingRule                    `json:"pricing_rule_data"`
	ProductSetData                *CatalogProductSet                     `json:"product_set_data"`
	QuickAmountsSettingsData      *CatalogQuickAmountsSettings           `json:"quick_amounts_settings_data"`
	SubscriptionPlanData          *CatalogSubscriptionPlan               `json:"subscription_plan_data"`
	TaxData                       *CatalogTax                            `json:"tax_data"`
	TimePeriodData                *CatalogTimePeriod                     `json:"time_period_data"`
	Type                          string                                 `json:"type"`
	UpdatedAt                     *string                                `json:"updated_at"`
	Version                       *int64                                 `json:"version"`
}
