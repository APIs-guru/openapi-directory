import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Snippet } from "./snippet";


// UpsertSnippetResponse
/** 
 * Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`.
**/
export class UpsertSnippetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=snippet" })
  snippet?: Snippet;
}
