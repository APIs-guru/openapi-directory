import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogItemOptionForItem } from "./catalogitemoptionforitem";
import { CatalogItemModifierListInfo } from "./catalogitemmodifierlistinfo";
import { CatalogObject } from "./catalogobject";


// CatalogItem
/** 
 * A [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog.
**/
export class CatalogItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=available_electronically" })
  availableElectronically?: boolean;

  @Metadata({ data: "json, name=available_for_pickup" })
  availableForPickup?: boolean;

  @Metadata({ data: "json, name=available_online" })
  availableOnline?: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=item_options", elemType: shared.CatalogItemOptionForItem })
  itemOptions?: CatalogItemOptionForItem[];

  @Metadata({ data: "json, name=label_color" })
  labelColor?: string;

  @Metadata({ data: "json, name=modifier_list_info", elemType: shared.CatalogItemModifierListInfo })
  modifierListInfo?: CatalogItemModifierListInfo[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product_type" })
  productType?: string;

  @Metadata({ data: "json, name=skip_modifier_screen" })
  skipModifierScreen?: boolean;

  @Metadata({ data: "json, name=sort_name" })
  sortName?: string;

  @Metadata({ data: "json, name=tax_ids" })
  taxIds?: string[];

  @Metadata({ data: "json, name=variations", elemType: shared.CatalogObject })
  variations?: CatalogObject[];
}
