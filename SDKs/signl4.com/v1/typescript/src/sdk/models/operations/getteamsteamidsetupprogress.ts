import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsTeamIdSetupProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdSetupProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsTeamIdSetupProgressPathParams;
}


export class GetTeamsTeamIdSetupProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamSetupProgress?: shared.TeamSetupProgress;
}
