import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsTeamIdDutysummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdDutysummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lastTwoDuties" })
  lastTwoDuties?: boolean;
}


export class GetTeamsTeamIdDutysummaryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsTeamIdDutysummaryPathParams;

  @Metadata()
  queryParams: GetTeamsTeamIdDutysummaryQueryParams;
}


export class GetTeamsTeamIdDutysummaryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamDutySummaryInfo?: shared.TeamDutySummaryInfo;
}
