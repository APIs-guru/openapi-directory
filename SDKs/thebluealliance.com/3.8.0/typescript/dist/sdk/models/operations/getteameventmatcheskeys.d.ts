import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventMatchesKeysPathParams extends SpeakeasyBase {
    eventKey: string;
    teamKey: string;
}
export declare class GetTeamEventMatchesKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventMatchesKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventMatchesKeysRequest extends SpeakeasyBase {
    pathParams: GetTeamEventMatchesKeysPathParams;
    headers: GetTeamEventMatchesKeysHeaders;
    security: GetTeamEventMatchesKeysSecurity;
}
export declare class GetTeamEventMatchesKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamEventMatchesKeys200ApplicationJsonStrings?: string[];
}
