import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionsGetRequestOptions } from "./transactionsgetrequestoptions";



// TransactionsGetRequest
/** 
 * TransactionsGetRequest defines the request schema for `/transactions/get`
**/
export class TransactionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: TransactionsGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;
}
