import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdPathParams;
}
export declare class GetTeamsTeamIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    teamInfo?: shared.TeamInfo;
}
