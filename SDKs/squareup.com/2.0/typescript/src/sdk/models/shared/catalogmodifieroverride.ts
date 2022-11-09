import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogModifierOverride
/** 
 * Options to control how to override the default behavior of the specified modifier.
**/
export class CatalogModifierOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=modifier_id" })
  modifierId: string;

  @Metadata({ data: "json, name=on_by_default" })
  onByDefault?: boolean;
}
