import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dispute } from "./dispute";
import { Error } from "./error";


// ListDisputesResponse
/** 
 * Defines fields in a `ListDisputes` response.
**/
export class ListDisputesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=disputes", elemType: shared.Dispute })
  disputes?: Dispute[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
