import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsTeamIdDutyReportsFileNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdDutyReportsFileNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsTeamIdDutyReportsFileNamePathParams;
}


export class GetTeamsTeamIdDutyReportsFileNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  getTeamsTeamIdDutyReportsFileName200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTeamsTeamIdDutyReportsFileName200TextJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTeamsTeamIdDutyReportsFileName200TextPlainBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
