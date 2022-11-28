import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchMediaProcessorServerList: readonly ["https://media.twilio.com"];
export declare class FetchMediaProcessorPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchMediaProcessorSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchMediaProcessorRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchMediaProcessorPathParams;
    security: FetchMediaProcessorSecurity;
}
export declare class FetchMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
