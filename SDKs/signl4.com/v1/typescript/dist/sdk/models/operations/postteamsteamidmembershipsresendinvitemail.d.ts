import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsTeamIdMembershipsResendInviteMailPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class PostTeamsTeamIdMembershipsResendInviteMailRequests extends SpeakeasyBase {
    userInvitationInfo?: shared.UserInvitationInfo;
    userInvitationInfo1?: shared.UserInvitationInfo;
    userInvitationInfo2?: shared.UserInvitationInfo;
    userInvitationInfo3?: shared.UserInvitationInfo;
}
export declare class PostTeamsTeamIdMembershipsResendInviteMailRequest extends SpeakeasyBase {
    pathParams: PostTeamsTeamIdMembershipsResendInviteMailPathParams;
    request?: PostTeamsTeamIdMembershipsResendInviteMailRequests;
}
export declare class PostTeamsTeamIdMembershipsResendInviteMailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    postTeamsTeamIdMembershipsResendInviteMail200ApplicationJsonString?: string;
    postTeamsTeamIdMembershipsResendInviteMail200TextJsonString?: string;
    postTeamsTeamIdMembershipsResendInviteMail200TextPlainString?: string;
    statusCode: number;
}
