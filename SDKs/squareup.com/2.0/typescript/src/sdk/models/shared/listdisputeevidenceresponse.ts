import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { DisputeEvidence } from "./disputeevidence";


// ListDisputeEvidenceResponse
/** 
 * Defines the fields in a `ListDisputeEvidence` response.
**/
export class ListDisputeEvidenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=evidence", elemType: shared.DisputeEvidence })
  evidence?: DisputeEvidence[];
}
