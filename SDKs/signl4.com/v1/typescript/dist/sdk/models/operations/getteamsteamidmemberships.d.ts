import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsTeamIdMembershipsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class GetTeamsTeamIdMembershipsRequest extends SpeakeasyBase {
    pathParams: GetTeamsTeamIdMembershipsPathParams;
}
export declare class GetTeamsTeamIdMembershipsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    invitedUserInfos?: shared.InvitedUserInfo[];
    statusCode: number;
}
