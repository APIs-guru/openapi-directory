import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdAlertReportsFileNamePathParams extends SpeakeasyBase {
    fileName: string;
    teamId: string;
}
export declare class GetTeamsTeamIdAlertReportsFileNameRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdAlertReportsFileNamePathParams;
}
export declare class GetTeamsTeamIdAlertReportsFileNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    getTeamsTeamIdAlertReportsFileName200ApplicationJsonBinaryString?: Uint8Array;
    getTeamsTeamIdAlertReportsFileName200TextJsonBinaryString?: Uint8Array;
    getTeamsTeamIdAlertReportsFileName200TextPlainBinaryString?: Uint8Array;
    statusCode: number;
}
