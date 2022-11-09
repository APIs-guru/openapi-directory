import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProcessorStripeBankAccountTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorStripeBankAccountTokenCreateRequest;
}


export class ProcessorStripeBankAccountTokenCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  processorStripeBankAccountTokenCreateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
