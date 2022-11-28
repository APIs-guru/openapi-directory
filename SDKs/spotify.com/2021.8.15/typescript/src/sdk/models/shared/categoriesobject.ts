import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryObject } from "./categoryobject";



// CategoriesObjectCategories
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export class CategoriesObjectCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CategoryObject })
  items?: CategoryObject[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class CategoriesObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: CategoriesObjectCategories;
}
