import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsByYearKeysPathParams extends SpeakeasyBase {
    pageNum: number;
    year: number;
}
export declare class GetTeamsByYearKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamsByYearKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamsByYearKeysRequest extends SpeakeasyBase {
    pathParams: GetTeamsByYearKeysPathParams;
    headers: GetTeamsByYearKeysHeaders;
    security: GetTeamsByYearKeysSecurity;
}
export declare class GetTeamsByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamsByYearKeys200ApplicationJsonStrings?: string[];
}
