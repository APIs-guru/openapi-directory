import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJournalInstructionFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class GetJournalInstructionFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalInstructionFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJournalInstructionFromEmployerPathParams;

  @Metadata()
  headers: GetJournalInstructionFromEmployerHeaders;
}


export class GetJournalInstructionFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  journalInstruction?: shared.JournalInstruction;

  @Metadata()
  statusCode: number;
}
