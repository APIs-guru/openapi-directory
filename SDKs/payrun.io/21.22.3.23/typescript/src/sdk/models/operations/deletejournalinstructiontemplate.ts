import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteJournalInstructionTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class DeleteJournalInstructionTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class DeleteJournalInstructionTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteJournalInstructionTemplatePathParams;

  @SpeakeasyMetadata()
  headers: DeleteJournalInstructionTemplateHeaders;
}


export class DeleteJournalInstructionTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
