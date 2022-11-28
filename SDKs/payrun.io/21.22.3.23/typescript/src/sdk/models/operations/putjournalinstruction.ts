import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutJournalInstructionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=JournalInstructionId" })
  journalInstructionId: string;
}


export class PutJournalInstructionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutJournalInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutJournalInstructionPathParams;

  @SpeakeasyMetadata()
  headers: PutJournalInstructionHeaders;
}


export class PutJournalInstructionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  journalInstruction?: shared.JournalInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
