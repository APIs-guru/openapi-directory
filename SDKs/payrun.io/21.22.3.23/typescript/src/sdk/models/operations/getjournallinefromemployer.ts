import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJournalLineFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=JournalLineId" })
  journalLineId: string;
}


export class GetJournalLineFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalLineFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJournalLineFromEmployerPathParams;

  @Metadata()
  headers: GetJournalLineFromEmployerHeaders;
}


export class GetJournalLineFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  journalLine?: shared.JournalLine;

  @Metadata()
  statusCode: number;
}
