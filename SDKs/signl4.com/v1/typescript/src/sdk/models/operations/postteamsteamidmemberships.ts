import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTeamsTeamIdMembershipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdMembershipsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  usersInvitation?: shared.UsersInvitation;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  usersInvitation1?: shared.UsersInvitation;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  usersInvitation2?: shared.UsersInvitation;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  usersInvitation3?: shared.UsersInvitation;
}


export class PostTeamsTeamIdMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTeamsTeamIdMembershipsPathParams;

  @SpeakeasyMetadata()
  request?: PostTeamsTeamIdMembershipsRequests;
}


export class PostTeamsTeamIdMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserInvitationResult })
  userInvitationResults?: shared.UserInvitationResult[];
}
