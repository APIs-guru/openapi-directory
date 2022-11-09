import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogItemOptionValue
/** 
 * An enumerated value that can link a
 * `CatalogItemVariation` to an item option as one of
 * its item option values.
**/
export class CatalogItemOptionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=item_option_id" })
  itemOptionId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;
}
