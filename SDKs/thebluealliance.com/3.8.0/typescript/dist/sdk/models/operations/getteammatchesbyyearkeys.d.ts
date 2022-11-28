import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMatchesByYearKeysPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamMatchesByYearKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamMatchesByYearKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamMatchesByYearKeysRequest extends SpeakeasyBase {
    pathParams: GetTeamMatchesByYearKeysPathParams;
    headers: GetTeamMatchesByYearKeysHeaders;
    security: GetTeamMatchesByYearKeysSecurity;
}
export declare class GetTeamMatchesByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamMatchesByYearKeys200ApplicationJsonStrings?: string[];
}
