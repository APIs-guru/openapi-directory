import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdDutyReportsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdDutyReportsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdDutyReportsPathParams;
}


export class GetTeamsTeamIdDutyReportsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  dutyAuditReportFileInfos?: Map<string, any>[];

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
