import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsTeamIdSchedulesMultiplePathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostTeamsTeamIdSchedulesMultipleQueryParams extends SpeakeasyBase {
    overrideExisting?: boolean;
}
export declare class PostTeamsTeamIdSchedulesMultipleRequests extends SpeakeasyBase {
    scheduleInfos?: shared.ScheduleInfo[];
    scheduleInfos1?: shared.ScheduleInfo[];
    scheduleInfos2?: shared.ScheduleInfo[];
    scheduleInfos3?: shared.ScheduleInfo[];
}
export declare class PostTeamsTeamIdSchedulesMultipleRequest extends SpeakeasyBase {
    pathParams: PostTeamsTeamIdSchedulesMultiplePathParams;
    queryParams: PostTeamsTeamIdSchedulesMultipleQueryParams;
    request?: PostTeamsTeamIdSchedulesMultipleRequests;
}
export declare class PostTeamsTeamIdSchedulesMultipleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scheduleInfos?: shared.ScheduleInfo[];
    statusCode: number;
}
