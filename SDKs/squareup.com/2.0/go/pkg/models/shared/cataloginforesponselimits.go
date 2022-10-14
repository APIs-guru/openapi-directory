package shared

type CatalogInfoResponseLimits struct {
	BatchDeleteMaxObjectIds                          *int64 `json:"batch_delete_max_object_ids,omitempty"`
	BatchRetrieveMaxObjectIds                        *int64 `json:"batch_retrieve_max_object_ids,omitempty"`
	BatchUpsertMaxObjectsPerBatch                    *int64 `json:"batch_upsert_max_objects_per_batch,omitempty"`
	BatchUpsertMaxTotalObjects                       *int64 `json:"batch_upsert_max_total_objects,omitempty"`
	SearchMaxPageLimit                               *int64 `json:"search_max_page_limit,omitempty"`
	UpdateItemModifierListsMaxItemIds                *int64 `json:"update_item_modifier_lists_max_item_ids,omitempty"`
	UpdateItemModifierListsMaxModifierListsToDisable *int64 `json:"update_item_modifier_lists_max_modifier_lists_to_disable,omitempty"`
	UpdateItemModifierListsMaxModifierListsToEnable  *int64 `json:"update_item_modifier_lists_max_modifier_lists_to_enable,omitempty"`
	UpdateItemTaxesMaxItemIds                        *int64 `json:"update_item_taxes_max_item_ids,omitempty"`
	UpdateItemTaxesMaxTaxesToDisable                 *int64 `json:"update_item_taxes_max_taxes_to_disable,omitempty"`
	UpdateItemTaxesMaxTaxesToEnable                  *int64 `json:"update_item_taxes_max_taxes_to_enable,omitempty"`
}
