import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTeamsTeamIdSchedulesDutyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dutyId" })
  dutyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class DeleteTeamsTeamIdSchedulesDutyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTeamsTeamIdSchedulesDutyIdPathParams;
}


export class DeleteTeamsTeamIdSchedulesDutyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
