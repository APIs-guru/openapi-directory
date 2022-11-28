import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMatchesByYearPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamMatchesByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamMatchesByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamMatchesByYearRequest extends SpeakeasyBase {
    pathParams: GetTeamMatchesByYearPathParams;
    headers: GetTeamMatchesByYearHeaders;
    security: GetTeamMatchesByYearSecurity;
}
export declare class GetTeamMatchesByYearResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matches?: shared.Match[];
    statusCode: number;
}
