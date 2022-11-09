import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomAttributeFilter } from "./customattributefilter";


// SearchCatalogItemsRequest
/** 
 * Defines the request body for the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
**/
export class SearchCatalogItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=category_ids" })
  categoryIds?: string[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=custom_attribute_filters", elemType: shared.CustomAttributeFilter })
  customAttributeFilters?: CustomAttributeFilter[];

  @Metadata({ data: "json, name=enabled_location_ids" })
  enabledLocationIds?: string[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=product_types" })
  productTypes?: string[];

  @Metadata({ data: "json, name=sort_order" })
  sortOrder?: string;

  @Metadata({ data: "json, name=stock_levels" })
  stockLevels?: string[];

  @Metadata({ data: "json, name=text_filter" })
  textFilter?: string;
}
