import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://marketplace.walmartapis.com", "https://sandbox.walmartapis.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * optCapProgramInPrice - Set up CAP SKU All
     *
     * This API helps Sellers to completely opt-in or opt-out from CAP program.
     *
     * If the subsidyEnrolled value = "true", the Seller enrolls in the CAP program. All eligible SKUs (current and future) are by default opt-in. Seller should use the SKU opt-in/opt-out API to opt-out individual items.
     *
     * If the subsidyEnrolled value = "false", the Seller stops participating in the CAP program and all eligible SKUs (current and future) are opt-out of the CAP program.
     *
     * /doc/us/mp/us-mp-price/#1290 - View Guide
    **/
    optCapProgramInPrice(req: operations.OptCapProgramInPriceRequest, config?: AxiosRequestConfig): Promise<operations.OptCapProgramInPriceResponse>;
    /**
     * priceBulkUploads - Update bulk prices (Multiple)
     *
     * Updates prices in bulk.
     *
     * In one Feed you can update up to 10,000 items in bulk. To ensure optimal Feed processing time, we recommend sending no more than 1000 items in one Feed and keeping the Feed sizes below 10 MB.
     *
     * The price sequence guarantee is observed by the bulk price update functionality, subject to the following rules:
     *
     * The timestamp used to determine precedence is passed in the request headers. All price updates in the feed are considered to have the same timestamp. The timestamp in the XML file is used only for auditing.
     * You can send a single SKU multiple times in one Feed. If a SKU is repeated in a Feed, the price will be set for that SKU on Walmart.com, but there is no guarantee as to which SKU's price within that feed will be used.
     * This API should be used in preference to the update a price. It should be called no sooner than 24 hours after a new item is set up and a wpid (Walmart Part ID) is available. Thereafter, the bulk price update has an service level agreement (SLA) of 15 minutes.
     *
     * After the update is submitted, wait for at least five minutes before verifying whether the bulk price update was successful. Individual SKU price update success or failure is only available after the entire feed is processed.
     *
     * If a SKU's price update fails (for example, multiple price updates were sent for the same SKU in a single feed), an error will be returned.
    **/
    priceBulkUploads(req: operations.PriceBulkUploadsRequest, config?: AxiosRequestConfig): Promise<operations.PriceBulkUploadsResponse>;
    /**
     * updatePrice - Update a price
     *
     * Updates the regular price for a given item.
    **/
    updatePrice(req: operations.UpdatePriceRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePriceResponse>;
}
export {};
