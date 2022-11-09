import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dispute } from "./dispute";
import { Error } from "./error";


// SubmitEvidenceResponse
/** 
 * Defines the fields in a `SubmitEvidence` response.
**/
export class SubmitEvidenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dispute" })
  dispute?: Dispute;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
