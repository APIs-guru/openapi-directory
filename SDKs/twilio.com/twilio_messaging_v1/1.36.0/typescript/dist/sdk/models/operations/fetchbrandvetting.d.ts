import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHBRANDVETTING_SERVERS: string[];
export declare class FetchBrandVettingPathParams extends SpeakeasyBase {
    brandSid: string;
    brandVettingSid: string;
}
export declare class FetchBrandVettingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBrandVettingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBrandVettingPathParams;
    security: FetchBrandVettingSecurity;
}
export declare class FetchBrandVettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
