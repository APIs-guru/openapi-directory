import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdAlertReportsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdAlertReportsRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdAlertReportsPathParams;
}
export declare class GetTeamsTeamIdAlertReportsResponse extends SpeakeasyBase {
    alertAuditReportFileInfos?: Map<string, any>[];
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
