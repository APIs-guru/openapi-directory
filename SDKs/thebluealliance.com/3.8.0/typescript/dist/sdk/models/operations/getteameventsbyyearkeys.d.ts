import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsByYearKeysPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamEventsByYearKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsByYearKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsByYearKeysRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsByYearKeysPathParams;
    headers: GetTeamEventsByYearKeysHeaders;
    security: GetTeamEventsByYearKeysSecurity;
}
export declare class GetTeamEventsByYearKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamEventsByYearKeys200ApplicationJsonStrings?: string[];
}
