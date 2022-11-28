import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProcessorBalanceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorBalanceGetRequest;
}


export class ProcessorBalanceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  processorBalanceGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
