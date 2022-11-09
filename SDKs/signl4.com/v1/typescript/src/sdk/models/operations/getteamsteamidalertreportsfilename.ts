import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdAlertReportsFileNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdAlertReportsFileNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdAlertReportsFileNamePathParams;
}


export class GetTeamsTeamIdAlertReportsFileNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  getTeamsTeamIdAlertReportsFileName200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  getTeamsTeamIdAlertReportsFileName200TextJsonBinaryString?: Uint8Array;

  @Metadata()
  getTeamsTeamIdAlertReportsFileName200TextPlainBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
