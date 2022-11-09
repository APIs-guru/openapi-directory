import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogObject } from "./catalogobject";


// CatalogModifierList
/** 
 * A list of modifiers applicable to items at the time of sale.
 * 
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
 * may contain "Ketchup", "Mustard", and "Relish" modifiers.
 * Use the `selection_type` field to specify whether or not multiple selections from
 * the modifier list are allowed.
**/
export class CatalogModifierList extends SpeakeasyBase {
  @Metadata({ data: "json, name=modifiers", elemType: shared.CatalogObject })
  modifiers?: CatalogObject[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=selection_type" })
  selectionType?: string;
}
