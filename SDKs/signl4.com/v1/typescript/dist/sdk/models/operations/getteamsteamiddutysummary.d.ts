import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdDutysummaryPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdDutysummaryQueryParams extends SpeakeasyBase {
    lastTwoDuties?: boolean;
}
export declare class GetTeamsTeamIdDutysummaryRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdDutysummaryPathParams;
    queryParams: GetTeamsTeamIdDutysummaryQueryParams;
}
export declare class GetTeamsTeamIdDutysummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    teamDutySummaryInfo?: shared.TeamDutySummaryInfo;
}
