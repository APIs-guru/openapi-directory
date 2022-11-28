import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTeamsTeamIdProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PutTeamsTeamIdProfileRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  teamProfile?: shared.TeamProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  teamProfile1?: shared.TeamProfile;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  teamProfile2?: shared.TeamProfile;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  teamProfile3?: shared.TeamProfile;
}


export class PutTeamsTeamIdProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTeamsTeamIdProfilePathParams;

  @SpeakeasyMetadata()
  request?: PutTeamsTeamIdProfileRequests;
}


export class PutTeamsTeamIdProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamInfo?: shared.TeamInfo;
}
