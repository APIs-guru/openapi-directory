import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdAlertReportsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdAlertReportsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdAlertReportsPathParams;
}


export class GetTeamsTeamIdAlertReportsResponse extends SpeakeasyBase {
  @Metadata()
  alertAuditReportFileInfos?: Map<string, any>[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
