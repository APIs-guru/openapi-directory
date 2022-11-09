import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";


// CustomAttributeFilter
/** 
 * Supported custom attribute query expressions for calling the
 * [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
 * endpoint to search for items or item variations.
**/
export class CustomAttributeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=bool_filter" })
  boolFilter?: boolean;

  @Metadata({ data: "json, name=custom_attribute_definition_id" })
  customAttributeDefinitionId?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=number_filter" })
  numberFilter?: Range;

  @Metadata({ data: "json, name=selection_uids_filter" })
  selectionUidsFilter?: string[];

  @Metadata({ data: "json, name=string_filter" })
  stringFilter?: string;
}
