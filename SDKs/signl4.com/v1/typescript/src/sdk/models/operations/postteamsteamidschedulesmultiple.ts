import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTeamsTeamIdSchedulesMultiplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdSchedulesMultipleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=overrideExisting" })
  overrideExisting?: boolean;
}


export class PostTeamsTeamIdSchedulesMultipleRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json", elemType: shared.ScheduleInfo })
  scheduleInfos?: shared.ScheduleInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.ScheduleInfo })
  scheduleInfos1?: shared.ScheduleInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json", elemType: shared.ScheduleInfo })
  scheduleInfos2?: shared.ScheduleInfo[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json", elemType: shared.ScheduleInfo })
  scheduleInfos3?: shared.ScheduleInfo[];
}


export class PostTeamsTeamIdSchedulesMultipleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTeamsTeamIdSchedulesMultiplePathParams;

  @SpeakeasyMetadata()
  queryParams: PostTeamsTeamIdSchedulesMultipleQueryParams;

  @SpeakeasyMetadata()
  request?: PostTeamsTeamIdSchedulesMultipleRequests;
}


export class PostTeamsTeamIdSchedulesMultipleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata({ elemType: shared.ScheduleInfo })
  scheduleInfos?: shared.ScheduleInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
