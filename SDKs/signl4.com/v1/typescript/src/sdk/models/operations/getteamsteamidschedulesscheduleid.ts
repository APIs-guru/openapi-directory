import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdSchedulesScheduleIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scheduleId" })
  scheduleId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdSchedulesScheduleIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdSchedulesScheduleIdPathParams;
}


export class GetTeamsTeamIdSchedulesScheduleIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  scheduleInfo?: shared.ScheduleInfo;

  @Metadata()
  statusCode: number;
}
