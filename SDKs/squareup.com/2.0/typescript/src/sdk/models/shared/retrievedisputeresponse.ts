import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dispute } from "./dispute";
import { Error } from "./error";


// RetrieveDisputeResponse
/** 
 * Defines fields in a `RetrieveDispute` response.
**/
export class RetrieveDisputeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dispute" })
  dispute?: Dispute;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
