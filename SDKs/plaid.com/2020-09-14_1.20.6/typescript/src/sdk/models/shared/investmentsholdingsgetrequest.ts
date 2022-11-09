import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InvestmentHoldingsGetRequestOptions } from "./investmentholdingsgetrequestoptions";


// InvestmentsHoldingsGetRequest
/** 
 * InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
**/
export class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: InvestmentHoldingsGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
