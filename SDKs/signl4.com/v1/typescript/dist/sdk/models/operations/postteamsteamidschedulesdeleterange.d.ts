import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsTeamIdSchedulesDeleteRangePathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostTeamsTeamIdSchedulesDeleteRangeRequests extends SpeakeasyBase {
    deleteRangeInfo?: shared.DeleteRangeInfo;
    deleteRangeInfo1?: shared.DeleteRangeInfo;
    deleteRangeInfo2?: shared.DeleteRangeInfo;
    deleteRangeInfo3?: shared.DeleteRangeInfo;
}
export declare class PostTeamsTeamIdSchedulesDeleteRangeRequest extends SpeakeasyBase {
    pathParams: PostTeamsTeamIdSchedulesDeleteRangePathParams;
    request?: PostTeamsTeamIdSchedulesDeleteRangeRequests;
}
export declare class PostTeamsTeamIdSchedulesDeleteRangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    scheduleInfos?: shared.ScheduleInfo[];
    statusCode: number;
}
