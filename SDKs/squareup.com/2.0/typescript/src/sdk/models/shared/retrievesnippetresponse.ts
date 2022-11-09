import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Snippet } from "./snippet";


// RetrieveSnippetResponse
/** 
 * Represents a `RetrieveSnippet` response. The response can include either `snippet` or `errors`.
**/
export class RetrieveSnippetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=snippet" })
  snippet?: Snippet;
}
