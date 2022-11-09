import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteDisputeEvidenceResponse
/** 
 * Defines the fields in a `DeleteDisputeEvidence` response.
**/
export class DeleteDisputeEvidenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
