import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProcessorIdentityGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProcessorIdentityGetRequest;
}


export class ProcessorIdentityGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  processorIdentityGetResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
