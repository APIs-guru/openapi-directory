import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamsTeamIdAlertReportsFileNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileName" })
  fileName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetTeamsTeamIdAlertReportsFileNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamsTeamIdAlertReportsFileNamePathParams;
}


export class GetTeamsTeamIdAlertReportsFileNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  getTeamsTeamIdAlertReportsFileName200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTeamsTeamIdAlertReportsFileName200TextJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getTeamsTeamIdAlertReportsFileName200TextPlainBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
