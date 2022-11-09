import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJournalInstructionTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class GetJournalInstructionTemplateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalInstructionTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJournalInstructionTemplatePathParams;

  @Metadata()
  headers: GetJournalInstructionTemplateHeaders;
}


export class GetJournalInstructionTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  journalInstruction?: shared.JournalInstruction;

  @Metadata()
  statusCode: number;
}
