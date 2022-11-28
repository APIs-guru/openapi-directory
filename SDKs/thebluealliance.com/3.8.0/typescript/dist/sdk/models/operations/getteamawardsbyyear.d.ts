import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamAwardsByYearPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamAwardsByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamAwardsByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamAwardsByYearRequest extends SpeakeasyBase {
    pathParams: GetTeamAwardsByYearPathParams;
    headers: GetTeamAwardsByYearHeaders;
    security: GetTeamAwardsByYearSecurity;
}
export declare class GetTeamAwardsByYearResponse extends SpeakeasyBase {
    awards?: shared.Award[];
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
