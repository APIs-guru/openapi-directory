import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateBrandVettingServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateBrandVettingPathParams extends SpeakeasyBase {
    brandSid: string;
}
export declare class CreateBrandVettingCreateBrandVettingRequest extends SpeakeasyBase {
    vettingId?: string;
    vettingProvider: shared.BrandVettingEnumVettingProviderEnum;
}
export declare class CreateBrandVettingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateBrandVettingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateBrandVettingPathParams;
    request?: CreateBrandVettingCreateBrandVettingRequest;
    security: CreateBrandVettingSecurity;
}
export declare class CreateBrandVettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
