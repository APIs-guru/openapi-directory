import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsKeysPathParams extends SpeakeasyBase {
    pageNum: number;
}
export declare class GetTeamsKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamsKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamsKeysRequest extends SpeakeasyBase {
    pathParams: GetTeamsKeysPathParams;
    headers: GetTeamsKeysHeaders;
    security: GetTeamsKeysSecurity;
}
export declare class GetTeamsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamsKeys200ApplicationJsonStrings?: string[];
}
