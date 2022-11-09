import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTeamsTeamIdProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PutTeamsTeamIdProfileRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  teamProfile?: shared.TeamProfile;

  @Metadata({ data: "request, media_type=application/json" })
  teamProfile1?: shared.TeamProfile;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  teamProfile2?: shared.TeamProfile;

  @Metadata({ data: "request, media_type=text/json" })
  teamProfile3?: shared.TeamProfile;
}


export class PutTeamsTeamIdProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTeamsTeamIdProfilePathParams;

  @Metadata()
  request?: PutTeamsTeamIdProfileRequests;
}


export class PutTeamsTeamIdProfileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamInfo?: shared.TeamInfo;
}
