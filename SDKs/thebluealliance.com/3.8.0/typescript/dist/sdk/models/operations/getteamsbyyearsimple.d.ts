import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsByYearSimplePathParams extends SpeakeasyBase {
    pageNum: number;
    year: number;
}
export declare class GetTeamsByYearSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamsByYearSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamsByYearSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamsByYearSimplePathParams;
    headers: GetTeamsByYearSimpleHeaders;
    security: GetTeamsByYearSimpleSecurity;
}
export declare class GetTeamsByYearSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamSimples?: shared.TeamSimple[];
}
