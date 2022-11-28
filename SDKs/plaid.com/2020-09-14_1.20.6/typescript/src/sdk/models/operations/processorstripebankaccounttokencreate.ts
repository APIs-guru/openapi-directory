import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProcessorStripeBankAccountTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorStripeBankAccountTokenCreateRequest;
}


export class ProcessorStripeBankAccountTokenCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  processorStripeBankAccountTokenCreateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
