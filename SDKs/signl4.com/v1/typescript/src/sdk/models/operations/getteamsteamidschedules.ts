import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdSchedulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdSchedulesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MinDate" })
  minDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UserId" })
  userId?: string;
}


export class GetTeamsTeamIdSchedulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdSchedulesPathParams;

  @Metadata()
  queryParams: GetTeamsTeamIdSchedulesQueryParams;
}


export class GetTeamsTeamIdSchedulesResponse extends SpeakeasyBase {
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
