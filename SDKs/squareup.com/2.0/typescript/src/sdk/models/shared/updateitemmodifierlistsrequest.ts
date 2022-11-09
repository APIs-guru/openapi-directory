import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateItemModifierListsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=item_ids" })
  itemIds: string[];

  @Metadata({ data: "json, name=modifier_lists_to_disable" })
  modifierListsToDisable?: string[];

  @Metadata({ data: "json, name=modifier_lists_to_enable" })
  modifierListsToEnable?: string[];
}
