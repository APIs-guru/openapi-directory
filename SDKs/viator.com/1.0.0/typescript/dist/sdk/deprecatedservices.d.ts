import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DeprecatedServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * merchantCancellation - /merchant/cancellation
     *
     * Cancel a booking
     * **Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints
     *
    **/
    merchantCancellation(req: operations.MerchantCancellationRequest, config?: AxiosRequestConfig): Promise<operations.MerchantCancellationResponse>;
}
