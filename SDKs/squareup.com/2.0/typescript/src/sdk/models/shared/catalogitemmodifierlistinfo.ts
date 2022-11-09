import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogModifierOverride } from "./catalogmodifieroverride";


// CatalogItemModifierListInfo
/** 
 * Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance.
**/
export class CatalogItemModifierListInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=max_selected_modifiers" })
  maxSelectedModifiers?: number;

  @Metadata({ data: "json, name=min_selected_modifiers" })
  minSelectedModifiers?: number;

  @Metadata({ data: "json, name=modifier_list_id" })
  modifierListId: string;

  @Metadata({ data: "json, name=modifier_overrides", elemType: shared.CatalogModifierOverride })
  modifierOverrides?: CatalogModifierOverride[];
}
