import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CategoryMarkets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * endpointGetAvailableMarkets - Get Available Markets
     *
     * Get the list of markets where Spotify is available.
     *
     * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-available-markets - Find more info on the official Spotify Web API Reference
    **/
    endpointGetAvailableMarkets(req: operations.EndpointGetAvailableMarketsRequest, config?: AxiosRequestConfig): Promise<operations.EndpointGetAvailableMarketsResponse>;
}
