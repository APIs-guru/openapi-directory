import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventTeamsKeysPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventTeamsKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventTeamsKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventTeamsKeysRequest extends SpeakeasyBase {
    pathParams: GetEventTeamsKeysPathParams;
    headers: GetEventTeamsKeysHeaders;
    security: GetEventTeamsKeysSecurity;
}
export declare class GetEventTeamsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getEventTeamsKeys200ApplicationJsonStrings?: string[];
}
