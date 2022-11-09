import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CatalogObject } from "./catalogobject";


// SearchCatalogItemsResponse
/** 
 * Defines the response body returned from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
**/
export class SearchCatalogItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=items", elemType: shared.CatalogObject })
  items?: CatalogObject[];

  @Metadata({ data: "json, name=matched_variation_ids" })
  matchedVariationIds?: string[];
}
