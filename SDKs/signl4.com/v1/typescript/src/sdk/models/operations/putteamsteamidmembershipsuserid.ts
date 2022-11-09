import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTeamsTeamIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutTeamsTeamIdMembershipsUserIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=requesterUserId" })
  requesterUserId?: string;
}


export class PutTeamsTeamIdMembershipsUserIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  userMembership?: shared.UserMembership;

  @Metadata({ data: "request, media_type=application/json" })
  userMembership1?: shared.UserMembership;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  userMembership2?: shared.UserMembership;

  @Metadata({ data: "request, media_type=text/json" })
  userMembership3?: shared.UserMembership;
}


export class PutTeamsTeamIdMembershipsUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTeamsTeamIdMembershipsUserIdPathParams;

  @Metadata()
  queryParams: PutTeamsTeamIdMembershipsUserIdQueryParams;

  @Metadata()
  request?: PutTeamsTeamIdMembershipsUserIdRequests;
}


export class PutTeamsTeamIdMembershipsUserIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  userInfo?: shared.UserInfo;
}
