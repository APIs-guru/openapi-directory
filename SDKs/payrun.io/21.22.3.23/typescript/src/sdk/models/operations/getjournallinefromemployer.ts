import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJournalLineFromEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JournalLineId" })
  journalLineId: string;
}


export class GetJournalLineFromEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalLineFromEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJournalLineFromEmployerPathParams;

  @SpeakeasyMetadata()
  headers: GetJournalLineFromEmployerHeaders;
}


export class GetJournalLineFromEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  journalLine?: shared.JournalLine;

  @SpeakeasyMetadata()
  statusCode: number;
}
