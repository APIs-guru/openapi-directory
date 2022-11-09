import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS: string[];
export declare class FetchHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchHostedNumbersHostedNumberOrderPathParams;
    security: FetchHostedNumbersHostedNumberOrderSecurity;
}
export declare class FetchHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
