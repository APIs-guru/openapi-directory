import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Site } from "./site";


// ListSitesResponse
/** 
 * Represents a `ListSites` response. The response can include either `sites` or `errors`.
**/
export class ListSitesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=sites", elemType: shared.Site })
  sites?: Site[];
}
