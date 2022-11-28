import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagResource } from "./tagresource";



export class ListTagsResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: string;
}


// ListTagsResponse
/** 
 * Successful response to get all tags. This returns a paginated list of
 * tags, which can be scrolled by following the `prev` and `next` links if
 * present.
 * 
**/
export class ListTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TagResource })
  data: TagResource[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListTagsResponseLinks;
}
