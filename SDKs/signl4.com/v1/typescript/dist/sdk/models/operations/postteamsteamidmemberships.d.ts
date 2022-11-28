import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsTeamIdMembershipsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostTeamsTeamIdMembershipsRequests extends SpeakeasyBase {
    usersInvitation?: shared.UsersInvitation;
    usersInvitation1?: shared.UsersInvitation;
    usersInvitation2?: shared.UsersInvitation;
    usersInvitation3?: shared.UsersInvitation;
}
export declare class PostTeamsTeamIdMembershipsRequest extends SpeakeasyBase {
    pathParams: PostTeamsTeamIdMembershipsPathParams;
    request?: PostTeamsTeamIdMembershipsRequests;
}
export declare class PostTeamsTeamIdMembershipsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userInvitationResults?: shared.UserInvitationResult[];
}
