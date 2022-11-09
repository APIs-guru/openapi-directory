import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionsGetRequestOptions } from "./transactionsgetrequestoptions";


// TransactionsGetRequest
/** 
 * TransactionsGetRequest defines the request schema for `/transactions/get`
**/
export class TransactionsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate: Date;

  @Metadata({ data: "json, name=options" })
  options?: TransactionsGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: Date;
}
