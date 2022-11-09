import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Snippet } from "./snippet";


// UpsertSnippetRequest
/** 
 * Represents an `UpsertSnippet` request.
**/
export class UpsertSnippetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=snippet" })
  snippet: Snippet;
}
