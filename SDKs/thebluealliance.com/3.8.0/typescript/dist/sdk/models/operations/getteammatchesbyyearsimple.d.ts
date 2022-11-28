import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMatchesByYearSimplePathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamMatchesByYearSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamMatchesByYearSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamMatchesByYearSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamMatchesByYearSimplePathParams;
    headers: GetTeamMatchesByYearSimpleHeaders;
    security: GetTeamMatchesByYearSimpleSecurity;
}
export declare class GetTeamMatchesByYearSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    matchSimples?: shared.MatchSimple[];
    statusCode: number;
}
