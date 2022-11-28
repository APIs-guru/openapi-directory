import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsStatusesByYearPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamEventsStatusesByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsStatusesByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsStatusesByYearRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsStatusesByYearPathParams;
    headers: GetTeamEventsStatusesByYearHeaders;
    security: GetTeamEventsStatusesByYearSecurity;
}
export declare class GetTeamEventsStatusesByYearResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTeamEventsStatusesByYear200ApplicationJsonObject?: Map<string, shared.TeamEventStatus>;
}
