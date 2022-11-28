import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdDutyReportsFileNamePathParams extends SpeakeasyBase {
    fileName: string;
    teamId: string;
}
export declare class GetTeamsTeamIdDutyReportsFileNameRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdDutyReportsFileNamePathParams;
}
export declare class GetTeamsTeamIdDutyReportsFileNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    getTeamsTeamIdDutyReportsFileName200ApplicationJsonBinaryString?: Uint8Array;
    getTeamsTeamIdDutyReportsFileName200TextJsonBinaryString?: Uint8Array;
    getTeamsTeamIdDutyReportsFileName200TextPlainBinaryString?: Uint8Array;
    statusCode: number;
}
