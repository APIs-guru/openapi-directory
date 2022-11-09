import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagResource } from "./tagresource";


export class ListTagsResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next: string;

  @Metadata({ data: "json, name=prev" })
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
  @Metadata({ data: "json, name=data", elemType: shared.TagResource })
  data: TagResource[];

  @Metadata({ data: "json, name=links" })
  links: ListTagsResponseLinks;
}
