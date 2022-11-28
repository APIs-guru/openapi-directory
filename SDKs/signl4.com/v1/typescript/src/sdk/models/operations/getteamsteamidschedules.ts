import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsTeamIdSchedulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdSchedulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MinDate" })
  minDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UserId" })
  userId?: string;
}


export class GetTeamsTeamIdSchedulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsTeamIdSchedulesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTeamsTeamIdSchedulesQueryParams;
}


export class GetTeamsTeamIdSchedulesResponse extends SpeakeasyBase {
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
