import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTeamsTeamIdSchedulesDutyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dutyId" })
  dutyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class DeleteTeamsTeamIdSchedulesDutyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTeamsTeamIdSchedulesDutyIdPathParams;
}


export class DeleteTeamsTeamIdSchedulesDutyIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
