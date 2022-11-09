import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteSnippetResponse
/** 
 * Represents a `DeleteSnippet` response.
**/
export class DeleteSnippetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
