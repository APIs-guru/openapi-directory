import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvestmentHoldingsGetRequestOptions } from "./investmentholdingsgetrequestoptions";



// InvestmentsHoldingsGetRequest
/** 
 * InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
**/
export class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: InvestmentHoldingsGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
