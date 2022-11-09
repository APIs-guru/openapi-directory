import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorBankTransferCreateRequest;
}


export class ProcessorBankTransferCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  processorBankTransferCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
