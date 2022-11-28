import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSinkServerList: readonly ["https://events.twilio.com"];
export declare class CreateSinkCreateSinkRequest extends SpeakeasyBase {
    description: string;
    sinkConfiguration: any;
    sinkType: shared.SinkEnumSinkTypeEnum;
}
export declare class CreateSinkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSinkRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateSinkCreateSinkRequest;
    security: CreateSinkSecurity;
}
export declare class CreateSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Sink?: shared.EventsV1Sink;
}
