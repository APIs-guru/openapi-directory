import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransactionsRefreshResponse
/** 
 * TransactionsRefreshResponse defines the response schema for `/transactions/refresh`
**/
export class TransactionsRefreshResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId: string;
}
