import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvestmentsTransactionsGetRequestOptions } from "./investmentstransactionsgetrequestoptions";



// InvestmentsTransactionsGetRequest
/** 
 * InvestmentsTransactionsGetRequest defines the request schema for `/investments/transactions/get`
**/
export class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: InvestmentsTransactionsGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: Date;
}
