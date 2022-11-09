import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS: string[];
export declare class UpdateHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    callDelay?: number;
    ccEmails?: string[];
    email?: string;
    extension?: string;
    friendlyName?: string;
    status?: shared.HostedNumberOrderEnumStatusEnum;
    uniqueName?: string;
    verificationCode?: string;
    verificationDocumentSid?: string;
    verificationType?: shared.HostedNumberOrderEnumVerificationTypeEnum;
}
export declare class UpdateHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateHostedNumbersHostedNumberOrderPathParams;
    request?: UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;
    security: UpdateHostedNumbersHostedNumberOrderSecurity;
}
export declare class UpdateHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
