import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteHostedNumbersHostedNumberOrderServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteHostedNumbersHostedNumberOrderPathParams;
    security: DeleteHostedNumbersHostedNumberOrderSecurity;
}
export declare class DeleteHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
