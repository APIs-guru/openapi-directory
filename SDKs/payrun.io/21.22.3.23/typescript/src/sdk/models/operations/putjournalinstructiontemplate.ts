import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutJournalInstructionTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class PutJournalInstructionTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutJournalInstructionTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutJournalInstructionTemplatePathParams;

  @SpeakeasyMetadata()
  headers: PutJournalInstructionTemplateHeaders;
}


export class PutJournalInstructionTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  journalInstruction?: shared.JournalInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
