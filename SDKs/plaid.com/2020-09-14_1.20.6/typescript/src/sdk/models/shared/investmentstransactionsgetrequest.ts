import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InvestmentsTransactionsGetRequestOptions } from "./investmentstransactionsgetrequestoptions";


// InvestmentsTransactionsGetRequest
/** 
 * InvestmentsTransactionsGetRequest defines the request schema for `/investments/transactions/get`
**/
export class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate: Date;

  @Metadata({ data: "json, name=options" })
  options?: InvestmentsTransactionsGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: Date;
}
