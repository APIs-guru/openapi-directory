import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS: string[];
export declare enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    accountSid?: string;
    addressSid?: string;
    ccEmails?: string[];
    email?: string;
    friendlyName?: string;
    phoneNumber: string;
    smsApplicationSid?: string;
    smsCapability: boolean;
    smsFallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;
    smsUrl?: string;
    statusCallbackMethod?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;
    statusCallbackUrl?: string;
    uniqueName?: string;
    verificationDocumentSid?: string;
    verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}
export declare class CreateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest;
    security: CreateHostedNumbersHostedNumberOrderSecurity;
}
export declare class CreateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
