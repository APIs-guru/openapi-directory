import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CatalogInfoResponseLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=batch_delete_max_object_ids" })
  batchDeleteMaxObjectIds?: number;

  @Metadata({ data: "json, name=batch_retrieve_max_object_ids" })
  batchRetrieveMaxObjectIds?: number;

  @Metadata({ data: "json, name=batch_upsert_max_objects_per_batch" })
  batchUpsertMaxObjectsPerBatch?: number;

  @Metadata({ data: "json, name=batch_upsert_max_total_objects" })
  batchUpsertMaxTotalObjects?: number;

  @Metadata({ data: "json, name=search_max_page_limit" })
  searchMaxPageLimit?: number;

  @Metadata({ data: "json, name=update_item_modifier_lists_max_item_ids" })
  updateItemModifierListsMaxItemIds?: number;

  @Metadata({ data: "json, name=update_item_modifier_lists_max_modifier_lists_to_disable" })
  updateItemModifierListsMaxModifierListsToDisable?: number;

  @Metadata({ data: "json, name=update_item_modifier_lists_max_modifier_lists_to_enable" })
  updateItemModifierListsMaxModifierListsToEnable?: number;

  @Metadata({ data: "json, name=update_item_taxes_max_item_ids" })
  updateItemTaxesMaxItemIds?: number;

  @Metadata({ data: "json, name=update_item_taxes_max_taxes_to_disable" })
  updateItemTaxesMaxTaxesToDisable?: number;

  @Metadata({ data: "json, name=update_item_taxes_max_taxes_to_enable" })
  updateItemTaxesMaxTaxesToEnable?: number;
}
