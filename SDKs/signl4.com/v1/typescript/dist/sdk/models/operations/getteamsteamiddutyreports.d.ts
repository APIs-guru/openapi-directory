import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdDutyReportsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdDutyReportsRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdDutyReportsPathParams;
}
export declare class GetTeamsTeamIdDutyReportsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    dutyAuditReportFileInfos?: Map<string, any>[];
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
