import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSinkTestServerList: readonly ["https://events.twilio.com"];
export declare class CreateSinkTestPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class CreateSinkTestSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSinkTestRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSinkTestPathParams;
    security: CreateSinkTestSecurity;
}
export declare class CreateSinkTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1SinkSinkTest?: shared.EventsV1SinkSinkTest;
}
