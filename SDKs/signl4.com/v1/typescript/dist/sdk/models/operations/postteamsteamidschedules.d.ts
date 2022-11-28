import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsTeamIdSchedulesPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostTeamsTeamIdSchedulesRequests extends SpeakeasyBase {
    scheduleInfo?: shared.ScheduleInfo;
    scheduleInfo1?: shared.ScheduleInfo;
    scheduleInfo2?: shared.ScheduleInfo;
    scheduleInfo3?: shared.ScheduleInfo;
}
export declare class PostTeamsTeamIdSchedulesRequest extends SpeakeasyBase {
    pathParams: PostTeamsTeamIdSchedulesPathParams;
    request?: PostTeamsTeamIdSchedulesRequests;
}
export declare class PostTeamsTeamIdSchedulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scheduleInfo?: shared.ScheduleInfo;
    statusCode: number;
}
