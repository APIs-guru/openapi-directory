import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionResource } from "./transactionresource";



// GetTransactionResponse
/** 
 * Successful response to get a single transaction.
 * 
**/
export class GetTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResource;
}
