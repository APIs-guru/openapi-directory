import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventRequest extends SpeakeasyBase {
    pathParams: GetEventPathParams;
    headers: GetEventHeaders;
    security: GetEventSecurity;
}
export declare class GetEventResponse extends SpeakeasyBase {
    contentType: string;
    event?: shared.Event;
    headers: Map<string, string[]>;
    statusCode: number;
}
