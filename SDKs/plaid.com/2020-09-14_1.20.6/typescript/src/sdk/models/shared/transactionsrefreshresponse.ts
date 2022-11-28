import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransactionsRefreshResponse
/** 
 * TransactionsRefreshResponse defines the response schema for `/transactions/refresh`
**/
export class TransactionsRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
