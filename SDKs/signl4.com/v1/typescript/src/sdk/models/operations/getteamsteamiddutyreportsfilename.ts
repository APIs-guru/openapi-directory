import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdDutyReportsFileNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdDutyReportsFileNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdDutyReportsFileNamePathParams;
}


export class GetTeamsTeamIdDutyReportsFileNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  getTeamsTeamIdDutyReportsFileName200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  getTeamsTeamIdDutyReportsFileName200TextJsonBinaryString?: Uint8Array;

  @Metadata()
  getTeamsTeamIdDutyReportsFileName200TextPlainBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
