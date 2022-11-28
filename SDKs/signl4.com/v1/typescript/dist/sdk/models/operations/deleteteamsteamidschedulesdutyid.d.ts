import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTeamsTeamIdSchedulesDutyIdPathParams extends SpeakeasyBase {
    dutyId: string;
    teamId: string;
}
export declare class DeleteTeamsTeamIdSchedulesDutyIdRequest extends SpeakeasyBase {
    pathParams: DeleteTeamsTeamIdSchedulesDutyIdPathParams;
}
export declare class DeleteTeamsTeamIdSchedulesDutyIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
