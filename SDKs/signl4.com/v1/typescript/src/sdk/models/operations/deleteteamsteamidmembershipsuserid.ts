import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTeamsTeamIdMembershipsUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteTeamsTeamIdMembershipsUserIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requesterUserId" })
  requesterUserId?: string;
}


export class DeleteTeamsTeamIdMembershipsUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTeamsTeamIdMembershipsUserIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteTeamsTeamIdMembershipsUserIdQueryParams;
}


export class DeleteTeamsTeamIdMembershipsUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteTeamsTeamIdMembershipsUserId200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  deleteTeamsTeamIdMembershipsUserId200TextJsonString?: string;

  @SpeakeasyMetadata()
  deleteTeamsTeamIdMembershipsUserId200TextPlainString?: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
