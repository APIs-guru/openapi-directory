package shared

type CatalogInfoResponseLimits struct {
	BatchDeleteMaxObjectIds                          *int64 `json:"batch_delete_max_object_ids"`
	BatchRetrieveMaxObjectIds                        *int64 `json:"batch_retrieve_max_object_ids"`
	BatchUpsertMaxObjectsPerBatch                    *int64 `json:"batch_upsert_max_objects_per_batch"`
	BatchUpsertMaxTotalObjects                       *int64 `json:"batch_upsert_max_total_objects"`
	SearchMaxPageLimit                               *int64 `json:"search_max_page_limit"`
	UpdateItemModifierListsMaxItemIds                *int64 `json:"update_item_modifier_lists_max_item_ids"`
	UpdateItemModifierListsMaxModifierListsToDisable *int64 `json:"update_item_modifier_lists_max_modifier_lists_to_disable"`
	UpdateItemModifierListsMaxModifierListsToEnable  *int64 `json:"update_item_modifier_lists_max_modifier_lists_to_enable"`
	UpdateItemTaxesMaxItemIds                        *int64 `json:"update_item_taxes_max_item_ids"`
	UpdateItemTaxesMaxTaxesToDisable                 *int64 `json:"update_item_taxes_max_taxes_to_disable"`
	UpdateItemTaxesMaxTaxesToEnable                  *int64 `json:"update_item_taxes_max_taxes_to_enable"`
}
