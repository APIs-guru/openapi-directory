import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdSchedulesPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdSchedulesQueryParams extends SpeakeasyBase {
    limit?: number;
    minDate?: Date;
    userId?: string;
}
export declare class GetTeamsTeamIdSchedulesRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdSchedulesPathParams;
    queryParams: GetTeamsTeamIdSchedulesQueryParams;
}
export declare class GetTeamsTeamIdSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scheduleInfos?: shared.ScheduleInfo[];
    statusCode: number;
}
