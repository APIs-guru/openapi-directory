import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTeamsTeamIdSchedulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdSchedulesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  scheduleInfo?: shared.ScheduleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  scheduleInfo1?: shared.ScheduleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  scheduleInfo2?: shared.ScheduleInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  scheduleInfo3?: shared.ScheduleInfo;
}


export class PostTeamsTeamIdSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTeamsTeamIdSchedulesPathParams;

  @SpeakeasyMetadata()
  request?: PostTeamsTeamIdSchedulesRequests;
}


export class PostTeamsTeamIdSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  scheduleInfo?: shared.ScheduleInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
