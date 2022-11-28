import { SpeakeasyBase } from "../../../internal/utils";
import { TagResource } from "./tagresource";
export declare class ListTagsResponseLinks extends SpeakeasyBase {
    next: string;
    prev: string;
}
/**
 * Successful response to get all tags. This returns a paginated list of
 * tags, which can be scrolled by following the `prev` and `next` links if
 * present.
 *
**/
export declare class ListTagsResponse extends SpeakeasyBase {
    data: TagResource[];
    links: ListTagsResponseLinks;
}
