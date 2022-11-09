import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsTeamIdMembershipsResendInviteMailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdMembershipsResendInviteMailRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  userInvitationInfo?: shared.UserInvitationInfo;

  @Metadata({ data: "request, media_type=application/json" })
  userInvitationInfo1?: shared.UserInvitationInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  userInvitationInfo2?: shared.UserInvitationInfo;

  @Metadata({ data: "request, media_type=text/json" })
  userInvitationInfo3?: shared.UserInvitationInfo;
}


export class PostTeamsTeamIdMembershipsResendInviteMailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsTeamIdMembershipsResendInviteMailPathParams;

  @Metadata()
  request?: PostTeamsTeamIdMembershipsResendInviteMailRequests;
}


export class PostTeamsTeamIdMembershipsResendInviteMailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  postTeamsTeamIdMembershipsResendInviteMail200ApplicationJsonString?: string;

  @Metadata()
  postTeamsTeamIdMembershipsResendInviteMail200TextJsonString?: string;

  @Metadata()
  postTeamsTeamIdMembershipsResendInviteMail200TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
