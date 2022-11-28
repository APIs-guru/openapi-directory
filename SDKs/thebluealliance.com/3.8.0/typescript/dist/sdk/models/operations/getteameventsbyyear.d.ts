import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamEventsByYearPathParams extends SpeakeasyBase {
    teamKey: string;
    year: number;
}
export declare class GetTeamEventsByYearHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamEventsByYearSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamEventsByYearRequest extends SpeakeasyBase {
    pathParams: GetTeamEventsByYearPathParams;
    headers: GetTeamEventsByYearHeaders;
    security: GetTeamEventsByYearSecurity;
}
export declare class GetTeamEventsByYearResponse extends SpeakeasyBase {
    contentType: string;
    events?: shared.Event[];
    headers: Map<string, string[]>;
    statusCode: number;
}
