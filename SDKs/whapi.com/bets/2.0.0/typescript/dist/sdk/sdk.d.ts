import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.
    **/
    Cashin(req: operations.CashinRequest, config?: AxiosRequestConfig): Promise<operations.CashinResponse>;
    /**
     * Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.
    **/
    GetBetHistory(req: operations.GetBetHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBetHistoryResponse>;
    /**
     * Retrieves the current free bets available for a customer.
    **/
    GetFreeBets(req: operations.GetFreeBetsRequest, config?: AxiosRequestConfig): Promise<operations.GetFreeBetsResponse>;
    /**
     * Places a multiple or a complex bet.
    **/
    PlaceComplexBet(req: operations.PlaceComplexBetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceComplexBetResponse>;
    /**
     * Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.
    **/
    PlaceSingleBet(req: operations.PlaceSingleBetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceSingleBetResponse>;
    ValidateBetslip(req: operations.ValidateBetslipRequest, config?: AxiosRequestConfig): Promise<operations.ValidateBetslipResponse>;
}
export {};
