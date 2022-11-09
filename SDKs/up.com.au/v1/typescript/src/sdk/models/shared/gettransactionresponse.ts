import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionResource } from "./transactionresource";


// GetTransactionResponse
/** 
 * Successful response to get a single transaction.
 * 
**/
export class GetTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionResource;
}
