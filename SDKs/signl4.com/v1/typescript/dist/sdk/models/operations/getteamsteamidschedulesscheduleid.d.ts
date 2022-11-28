import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdSchedulesScheduleIdPathParams extends SpeakeasyBase {
    scheduleId: string;
    teamId: string;
}
export declare class GetTeamsTeamIdSchedulesScheduleIdRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdSchedulesScheduleIdPathParams;
}
export declare class GetTeamsTeamIdSchedulesScheduleIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scheduleInfo?: shared.ScheduleInfo;
    statusCode: number;
}
