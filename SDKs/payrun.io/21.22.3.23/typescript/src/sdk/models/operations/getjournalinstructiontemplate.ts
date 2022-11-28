import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJournalInstructionTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class GetJournalInstructionTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalInstructionTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJournalInstructionTemplatePathParams;

  @SpeakeasyMetadata()
  headers: GetJournalInstructionTemplateHeaders;
}


export class GetJournalInstructionTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  journalInstruction?: shared.JournalInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
