import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTeamsTeamIdSchedulesDeleteRangePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostTeamsTeamIdSchedulesDeleteRangeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  deleteRangeInfo?: shared.DeleteRangeInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deleteRangeInfo1?: shared.DeleteRangeInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  deleteRangeInfo2?: shared.DeleteRangeInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  deleteRangeInfo3?: shared.DeleteRangeInfo;
}


export class PostTeamsTeamIdSchedulesDeleteRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTeamsTeamIdSchedulesDeleteRangePathParams;

  @SpeakeasyMetadata()
  request?: PostTeamsTeamIdSchedulesDeleteRangeRequests;
}


export class PostTeamsTeamIdSchedulesDeleteRangeResponse extends SpeakeasyBase {
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
