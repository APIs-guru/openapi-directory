import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { DisputeEvidence } from "./disputeevidence";


// RetrieveDisputeEvidenceResponse
/** 
 * Defines the fields in a `RetrieveDisputeEvidence` response.
**/
export class RetrieveDisputeEvidenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=evidence" })
  evidence?: DisputeEvidence;
}
