import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTeamsTeamIdMembershipsResendInviteMailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdMembershipsResendInviteMailRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  userInvitationInfo?: shared.UserInvitationInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userInvitationInfo1?: shared.UserInvitationInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  userInvitationInfo2?: shared.UserInvitationInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userInvitationInfo3?: shared.UserInvitationInfo;
}


export class PostTeamsTeamIdMembershipsResendInviteMailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTeamsTeamIdMembershipsResendInviteMailPathParams;

  @SpeakeasyMetadata()
  request?: PostTeamsTeamIdMembershipsResendInviteMailRequests;
}


export class PostTeamsTeamIdMembershipsResendInviteMailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  postTeamsTeamIdMembershipsResendInviteMail200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  postTeamsTeamIdMembershipsResendInviteMail200TextJsonString?: string;

  @SpeakeasyMetadata()
  postTeamsTeamIdMembershipsResendInviteMail200TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
