import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventMatchesKeysPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventMatchesKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventMatchesKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventMatchesKeysRequest extends SpeakeasyBase {
    pathParams: GetEventMatchesKeysPathParams;
    headers: GetEventMatchesKeysHeaders;
    security: GetEventMatchesKeysSecurity;
}
export declare class GetEventMatchesKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getEventMatchesKeys200ApplicationJsonStrings?: string[];
}
