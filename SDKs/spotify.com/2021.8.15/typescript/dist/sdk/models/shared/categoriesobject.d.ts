import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryObject } from "./categoryobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class CategoriesObjectCategories extends SpeakeasyBase {
    href?: string;
    items?: CategoryObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class CategoriesObject extends SpeakeasyBase {
    categories?: CategoriesObjectCategories;
}
