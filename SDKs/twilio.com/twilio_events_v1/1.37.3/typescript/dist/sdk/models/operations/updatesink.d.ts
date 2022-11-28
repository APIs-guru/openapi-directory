import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateSinkServerList: readonly ["https://events.twilio.com"];
export declare class UpdateSinkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateSinkUpdateSinkRequest extends SpeakeasyBase {
    description: string;
}
export declare class UpdateSinkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateSinkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateSinkPathParams;
    request?: UpdateSinkUpdateSinkRequest;
    security: UpdateSinkSecurity;
}
export declare class UpdateSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Sink?: shared.EventsV1Sink;
}
