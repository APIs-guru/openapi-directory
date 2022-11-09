import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsTeamIdSchedulesMultiplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdSchedulesMultipleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=overrideExisting" })
  overrideExisting?: boolean;
}


export class PostTeamsTeamIdSchedulesMultipleRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json", elemType: shared.ScheduleInfo })
  scheduleInfos?: shared.ScheduleInfo[];

  @Metadata({ data: "request, media_type=application/json", elemType: shared.ScheduleInfo })
  scheduleInfos1?: shared.ScheduleInfo[];

  @Metadata({ data: "request, media_type=application/json-patch+json", elemType: shared.ScheduleInfo })
  scheduleInfos2?: shared.ScheduleInfo[];

  @Metadata({ data: "request, media_type=text/json", elemType: shared.ScheduleInfo })
  scheduleInfos3?: shared.ScheduleInfo[];
}


export class PostTeamsTeamIdSchedulesMultipleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsTeamIdSchedulesMultiplePathParams;

  @Metadata()
  queryParams: PostTeamsTeamIdSchedulesMultipleQueryParams;

  @Metadata()
  request?: PostTeamsTeamIdSchedulesMultipleRequests;
}


export class PostTeamsTeamIdSchedulesMultipleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata({ elemType: shared.ScheduleInfo })
  scheduleInfos?: shared.ScheduleInfo[];

  @Metadata()
  statusCode: number;
}
