import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogQueryItemsForModifierList
/** 
 * The query filter to return the items containing the specified modifier list IDs.
**/
export class CatalogQueryItemsForModifierList extends SpeakeasyBase {
  @Metadata({ data: "json, name=modifier_list_ids" })
  modifierListIds: string[];
}
