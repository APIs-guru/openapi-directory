import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdMembershipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdMembershipsPathParams;
}


export class GetTeamsTeamIdMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.InvitedUserInfo })
  invitedUserInfos?: shared.InvitedUserInfo[];

  @Metadata()
  statusCode: number;
}
