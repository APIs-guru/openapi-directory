import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsByYearPathParams extends SpeakeasyBase {
    pageNum: number;
    year: number;
}
export declare class GetTeamsByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamsByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamsByYearRequest extends SpeakeasyBase {
    pathParams: GetTeamsByYearPathParams;
    headers: GetTeamsByYearHeaders;
    security: GetTeamsByYearSecurity;
}
export declare class GetTeamsByYearResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teams?: shared.Team[];
}
