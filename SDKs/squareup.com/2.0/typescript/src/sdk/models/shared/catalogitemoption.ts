import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogObject } from "./catalogobject";


// CatalogItemOption
/** 
 * A group of variations for a `CatalogItem`.
**/
export class CatalogItemOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=show_colors" })
  showColors?: boolean;

  @Metadata({ data: "json, name=values", elemType: shared.CatalogObject })
  values?: CatalogObject[];
}
