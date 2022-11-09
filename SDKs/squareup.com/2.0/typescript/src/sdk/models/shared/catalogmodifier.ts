import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CatalogModifier
/** 
 * A modifier applicable to items at the time of sale.
**/
export class CatalogModifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=modifier_list_id" })
  modifierListId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=price_money" })
  priceMoney?: Money;
}
