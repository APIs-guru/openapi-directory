import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsTeamIdSchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdSchedulesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  scheduleInfo?: shared.ScheduleInfo;

  @Metadata({ data: "request, media_type=application/json" })
  scheduleInfo1?: shared.ScheduleInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  scheduleInfo2?: shared.ScheduleInfo;

  @Metadata({ data: "request, media_type=text/json" })
  scheduleInfo3?: shared.ScheduleInfo;
}


export class PostTeamsTeamIdSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsTeamIdSchedulesPathParams;

  @Metadata()
  request?: PostTeamsTeamIdSchedulesRequests;
}


export class PostTeamsTeamIdSchedulesResponse extends SpeakeasyBase {
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
