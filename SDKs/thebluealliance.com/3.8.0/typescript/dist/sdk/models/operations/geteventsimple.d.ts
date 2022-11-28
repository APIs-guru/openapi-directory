import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventSimplePathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventSimpleRequest extends SpeakeasyBase {
    pathParams: GetEventSimplePathParams;
    headers: GetEventSimpleHeaders;
    security: GetEventSimpleSecurity;
}
export declare class GetEventSimpleResponse extends SpeakeasyBase {
    contentType: string;
    eventSimple?: shared.EventSimple;
    headers: Map<string, string[]>;
    statusCode: number;
}
