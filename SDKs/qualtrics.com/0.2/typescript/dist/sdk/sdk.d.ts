import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://fra1.qualtrics.com/API/v3"];
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
     * createContactInMailinglist - Create contact in mailing list
     *
     * Creates a contact in a given mailing list
    **/
    createContactInMailinglist(req: operations.CreateContactInMailinglistRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactInMailinglistResponse>;
    /**
     * generateDistributionLinks - Generate distribution links
     *
     * Geneates links for individual distribution
    **/
    generateDistributionLinks(req: operations.GenerateDistributionLinksRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDistributionLinksResponse>;
    /**
     * getDistributions - Get distributions for survey
     *
     * Gets all distributions for a given survey
    **/
    getDistributions(req: operations.GetDistributionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionsResponse>;
    /**
     * getEventSubscriptions - Get event subscriptions
     *
     * Get event subscriptions
    **/
    getEventSubscriptions(req: operations.GetEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventSubscriptionsResponse>;
    /**
     * getSurvey - Get survey
     *
     * Gets a single Qualtrics survey speficied by its ID
    **/
    getSurvey(req: operations.GetSurveyRequest, config?: AxiosRequestConfig): Promise<operations.GetSurveyResponse>;
    /**
     * retrievedistributionlinks - Retrieve distribution links
     *
     * Retrieves all the individual links for a given distribution
    **/
    retrievedistributionlinks(req: operations.RetrievedistributionlinksRequest, config?: AxiosRequestConfig): Promise<operations.RetrievedistributionlinksResponse>;
    /**
     * webhookDelete - Remove subscription to response event
     *
     * Remove event subscription
    **/
    webhookDelete(req: operations.WebhookDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebhookDeleteResponse>;
    /**
     * whenAResponseIsReceived - Triggers when a response is submitted to a qualtrics survey
     *
     * Subscribe to response event
    **/
    whenAResponseIsReceived(req: operations.WhenAResponseIsReceivedRequest, config?: AxiosRequestConfig): Promise<operations.WhenAResponseIsReceivedResponse>;
}
export {};
