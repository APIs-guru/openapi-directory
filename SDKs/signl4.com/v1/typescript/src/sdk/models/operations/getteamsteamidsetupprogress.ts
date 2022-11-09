import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdSetupProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdSetupProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdSetupProgressPathParams;
}


export class GetTeamsTeamIdSetupProgressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamSetupProgress?: shared.TeamSetupProgress;
}
