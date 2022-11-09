import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutJournalInstructionTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class PutJournalInstructionTemplateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutJournalInstructionTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutJournalInstructionTemplatePathParams;

  @Metadata()
  headers: PutJournalInstructionTemplateHeaders;
}


export class PutJournalInstructionTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  journalInstruction?: shared.JournalInstruction;

  @Metadata()
  statusCode: number;
}
