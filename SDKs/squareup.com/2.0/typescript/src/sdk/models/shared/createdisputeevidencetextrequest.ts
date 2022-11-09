import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDisputeEvidenceTextRequest
/** 
 * Defines the parameters for a `CreateDisputeEvidenceText` request.
**/
export class CreateDisputeEvidenceTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidence_text" })
  evidenceText: string;

  @Metadata({ data: "json, name=evidence_type" })
  evidenceType?: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;
}
