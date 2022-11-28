import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://sandbox.whapi.com/v2/bets"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cashin - Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer
     *
     * Allows a trusted application to cash in a bet (take a return on a bet) on behalf of the customer. If the customers monitor bets they can cash in a bet at any point before the event ends.
    **/
    cashin(req: operations.CashinRequest, config?: AxiosRequestConfig): Promise<operations.CashinResponse>;
    /**
     * getBetHistory - Retrieves the customer’s bet history.
     *
     * Retrieves the customer’s bet history. Options are available to organise the history in terms of date, bet type and settled and unsettled bets. The maximum number of bets and bet history pages retrieved can also be set.
    **/
    getBetHistory(req: operations.GetBetHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetBetHistoryResponse>;
    /**
     * getFreeBets - Returns available free bets
     *
     * Retrieves the current free bets available for a customer.
    **/
    getFreeBets(req: operations.GetFreeBetsRequest, config?: AxiosRequestConfig): Promise<operations.GetFreeBetsResponse>;
    /**
     * placeComplexBet - Places a multiple or a complex bet.
     *
     * Places a multiple or a complex bet.
    **/
    placeComplexBet(req: operations.PlaceComplexBetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceComplexBetResponse>;
    /**
     * placeSingleBet - Places a single bet
     *
     * Places a single bet. When placing a single bet using live inplay bets, the system might generate a bet delay to allow a time margin to negate the effects of major changes (for example, goals) to the market. Note that the amount of bet delay will vary by category and event type. A delayedBetId will be recieved that can be used to resubmit the bet.
    **/
    placeSingleBet(req: operations.PlaceSingleBetRequest, config?: AxiosRequestConfig): Promise<operations.PlaceSingleBetResponse>;
    /**
     * validateBetslip - Organises the betslip when one or more selections are made. It returns a bet slip structure organised by betting opportunities.
    **/
    validateBetslip(req: operations.ValidateBetslipRequest, config?: AxiosRequestConfig): Promise<operations.ValidateBetslipResponse>;
}
export {};
