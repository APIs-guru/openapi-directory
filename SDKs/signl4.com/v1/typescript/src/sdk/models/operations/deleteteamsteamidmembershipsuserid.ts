import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTeamsTeamIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteTeamsTeamIdMembershipsUserIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=requesterUserId" })
  requesterUserId?: string;
}


export class DeleteTeamsTeamIdMembershipsUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTeamsTeamIdMembershipsUserIdPathParams;

  @Metadata()
  queryParams: DeleteTeamsTeamIdMembershipsUserIdQueryParams;
}


export class DeleteTeamsTeamIdMembershipsUserIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteTeamsTeamIdMembershipsUserId200ApplicationJsonString?: string;

  @Metadata()
  deleteTeamsTeamIdMembershipsUserId200TextJsonString?: string;

  @Metadata()
  deleteTeamsTeamIdMembershipsUserId200TextPlainString?: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
