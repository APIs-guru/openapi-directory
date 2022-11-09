import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsTeamIdSchedulesDeleteRangePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdSchedulesDeleteRangeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  deleteRangeInfo?: shared.DeleteRangeInfo;

  @Metadata({ data: "request, media_type=application/json" })
  deleteRangeInfo1?: shared.DeleteRangeInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  deleteRangeInfo2?: shared.DeleteRangeInfo;

  @Metadata({ data: "request, media_type=text/json" })
  deleteRangeInfo3?: shared.DeleteRangeInfo;
}


export class PostTeamsTeamIdSchedulesDeleteRangeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsTeamIdSchedulesDeleteRangePathParams;

  @Metadata()
  request?: PostTeamsTeamIdSchedulesDeleteRangeRequests;
}


export class PostTeamsTeamIdSchedulesDeleteRangeResponse extends SpeakeasyBase {
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
