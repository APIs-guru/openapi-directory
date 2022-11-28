import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTeamsTeamIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PutTeamsTeamIdMembershipsUserIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requesterUserId" })
  requesterUserId?: string;
}


export class PutTeamsTeamIdMembershipsUserIdRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  userMembership?: shared.UserMembershipInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userMembership1?: shared.UserMembershipInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  userMembership2?: shared.UserMembershipInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userMembership3?: shared.UserMembershipInput;
}


export class PutTeamsTeamIdMembershipsUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTeamsTeamIdMembershipsUserIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutTeamsTeamIdMembershipsUserIdQueryParams;

  @SpeakeasyMetadata()
  request?: PutTeamsTeamIdMembershipsUserIdRequestsInput;
}


export class PutTeamsTeamIdMembershipsUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userInfo?: shared.UserInfo;
}
