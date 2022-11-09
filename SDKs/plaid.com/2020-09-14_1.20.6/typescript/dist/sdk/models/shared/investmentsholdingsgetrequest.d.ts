import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InvestmentHoldingsGetRequestOptions } from "./investmentholdingsgetrequestoptions";
/**
 * InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
**/
export declare class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    options?: InvestmentHoldingsGetRequestOptions;
    secret?: string;
}
