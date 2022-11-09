import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsTeamIdMembershipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdMembershipsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  usersInvitation?: shared.UsersInvitation;

  @Metadata({ data: "request, media_type=application/json" })
  usersInvitation1?: shared.UsersInvitation;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  usersInvitation2?: shared.UsersInvitation;

  @Metadata({ data: "request, media_type=text/json" })
  usersInvitation3?: shared.UsersInvitation;
}


export class PostTeamsTeamIdMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsTeamIdMembershipsPathParams;

  @Metadata()
  request?: PostTeamsTeamIdMembershipsRequests;
}


export class PostTeamsTeamIdMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserInvitationResult })
  userInvitationResults?: shared.UserInvitationResult[];
}
